import { hackathonConfig } from '../config/hackathonConfig';

export const validateStudentData = (student, index) => {
  const errors = {};

  // 1. Full Name
  if (!student.fullName || !student.fullName.trim()) {
    errors.fullName = `Student ${index + 1}: Full Name is required.`;
  }

  // 2. PRN Number (Alphanumeric, required)
  if (!student.prn || !student.prn.trim()) {
    errors.prn = `Student ${index + 1}: PRN Number is required.`;
  } else if (!/^[a-zA-Z0-9]+$/.test(student.prn.trim())) {
    errors.prn = `Student ${index + 1}: PRN must contain alphanumeric characters only.`;
  } else if (student.prn.trim().length < 4 || student.prn.trim().length > 15) {
    errors.prn = `Student ${index + 1}: PRN must be between 4 and 15 characters.`;
  }

  // 3. Department
  if (!student.department) {
    errors.department = `Student ${index + 1}: Department is required.`;
  }

  // 4. Year of Study
  if (!student.year) {
    errors.year = `Student ${index + 1}: Year of study is required.`;
  }

  // 5. Semester
  if (!student.semester) {
    errors.semester = `Student ${index + 1}: Semester is required.`;
  }

  // 6. Gender
  if (!student.gender) {
    errors.gender = `Student ${index + 1}: Gender is required.`;
  }

  // 7. Email ID
  if (!student.email || !student.email.trim()) {
    errors.email = `Student ${index + 1}: Email ID is required.`;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email.trim())) {
    errors.email = `Student ${index + 1}: Enter a valid email address.`;
  }

  // 8. Mobile Number (Exactly 10 digits)
  if (!student.mobile || !student.mobile.trim()) {
    errors.mobile = `Student ${index + 1}: Mobile number is required.`;
  } else if (!/^\d{10}$/.test(student.mobile.trim())) {
    errors.mobile = `Student ${index + 1}: Mobile number must be exactly 10 digits.`;
  }

  // 9. Technical Skills
  if (!student.skills || !student.skills.trim()) {
    errors.skills = `Student ${index + 1}: Technical skills are required.`;
  }

  // 10. Student Photograph / ID Card
  if (!student.photoUrl && !student.photoFile) {
    errors.photo = `Student ${index + 1}: Photograph / ID Card upload is required.`;
  }

  return errors;
};

export const validateFullRegistration = (formData, existingTeams = []) => {
  const globalErrors = [];
  const studentErrors = [];

  // Validate 6 Students
  if (!formData.students || formData.students.length !== 6) {
    globalErrors.push("A team must consist of exactly 6 student members.");
  } else {
    formData.students.forEach((std, idx) => {
      const errs = validateStudentData(std, idx);
      if (Object.keys(errs).length > 0) {
        studentErrors[idx] = errs;
        Object.values(errs).forEach(msg => {
          globalErrors.push(msg);
        });
      }
    });

    // Check for Duplicates Within the Team
    const prnSet = new Set();
    const emailSet = new Set();
    const mobileSet = new Set();

    // Build map of already registered PRNs from existing teams database
    const existingPrnMap = new Map();
    if (existingTeams && existingTeams.length > 0) {
      existingTeams.forEach(t => {
        (t.members || []).forEach(m => {
          if (m.prn) {
            existingPrnMap.set(String(m.prn).trim(), t.teamName);
          }
        });
      });
    }

    formData.students.forEach((std, idx) => {
      if (std.prn) {
        const cleanPrn = std.prn.trim();
        if (prnSet.has(cleanPrn)) {
          globalErrors.push(`Duplicate PRN Number '${cleanPrn}' found in team members (Student ${idx + 1}). PRN must be unique.`);
        }
        if (existingPrnMap.has(cleanPrn)) {
          const registeredTeam = existingPrnMap.get(cleanPrn);
          globalErrors.push(`PRN '${cleanPrn}' (Student ${idx + 1}: ${std.fullName || 'Member'}) is already registered under team "${registeredTeam}". Duplicate PRN registration is not allowed.`);
        }
        prnSet.add(cleanPrn);
      }

      if (std.email) {
        const cleanEmail = std.email.trim().toLowerCase();
        if (emailSet.has(cleanEmail)) {
          globalErrors.push(`Duplicate Email ID '${cleanEmail}' found in team members (Student ${idx + 1}).`);
        }
        emailSet.add(cleanEmail);
      }

      if (std.mobile) {
        const cleanMobile = std.mobile.trim();
        if (mobileSet.has(cleanMobile)) {
          globalErrors.push(`Duplicate Mobile Number '${cleanMobile}' found in team members (Student ${idx + 1}).`);
        }
        mobileSet.add(cleanMobile);
      }
    });

    // Automatic Eligibility: Female Member Requirement
    const femaleCount = formData.students.filter(s => s.gender === 'Female').length;
    if (femaleCount < 1) {
      globalErrors.push("Your team must contain at least one female member.");
    }
  }

  // Validate Team Information
  const teamInfo = formData.teamInformation || {};
  const teamInfoErrors = {};
  if (!teamInfo.teamName || !teamInfo.teamName.trim()) {
    globalErrors.push("Team Name is required.");
    teamInfoErrors.teamName = "Team Name is required.";
  } else {
    const rawTeamName = teamInfo.teamName.trim();
    const upperTeamName = rawTeamName.toUpperCase();
    const normalizedName = rawTeamName.replace(/\s+/g, ' ').toLowerCase();

    // Check College Name / Abbreviation violation
    const matchedProhibited = hackathonConfig.PROHIBITED_TEAM_NAME_KEYWORDS.find(keyword =>
      upperTeamName.includes(keyword.toUpperCase())
    );

    if (matchedProhibited) {
      const msg = `Team Name '${rawTeamName}' is invalid. Team name must NOT contain college name or abbreviation (violates keyword: "${matchedProhibited}").`;
      globalErrors.push(msg);
      teamInfoErrors.teamName = msg;
    }

    // Check duplicate team name across existing teams (normalized whitespace & case-insensitive)
    const existingMatch = existingTeams.find(t =>
      t.teamName && t.teamName.trim().replace(/\s+/g, ' ').toLowerCase() === normalizedName
    );
    if (existingMatch) {
      const msg = `Team Name '${rawTeamName}' is already registered (by Team ID: ${existingMatch.registrationId || 'Existing Team'}). Please choose a unique team name.`;
      globalErrors.push(msg);
      teamInfoErrors.teamName = msg;
    }
  }

  if (!teamInfo.theme) {
    globalErrors.push("Please select an SIH Theme / Domain.");
    teamInfoErrors.theme = "Please select an SIH Theme / Domain.";
  }

  if (!teamInfo.projectTitle || !teamInfo.projectTitle.trim()) {
    globalErrors.push("Project Title is required.");
    teamInfoErrors.projectTitle = "Project Title is required.";
  }

  if (!teamInfo.teamLeaderName) {
    globalErrors.push("Team Leader Name must be selected.");
    teamInfoErrors.teamLeaderName = "Team Leader Name must be selected.";
  } else {
    // Ensure Team Leader is one of the 6 students
    const studentNames = (formData.students || []).map(s => s.fullName ? s.fullName.trim().toLowerCase() : '');
    const leaderMatch = studentNames.includes(teamInfo.teamLeaderName.trim().toLowerCase());
    if (!leaderMatch) {
      const msg = "The Team Leader must be one of the six registered student members.";
      globalErrors.push(msg);
      teamInfoErrors.teamLeaderName = msg;
    }
  }

  // Validate Mandatory Declarations (6 checkboxes)
  const decl = formData.declarations || {};
  const mandatoryDeclKeys = [
    'allBonaFide',
    'notInterCollege',
    'exactlySixMembers',
    'atLeastOneFemale',
    'infoCorrect',
    'collegeCanReject'
  ];

  const unconfirmedDecl = mandatoryDeclKeys.filter(key => !decl[key]);
  if (unconfirmedDecl.length > 0) {
    globalErrors.push("All 6 Eligibility Declarations are mandatory and must be accepted.");
  }

  // Validate Student Consent
  if (!formData.consentAccepted) {
    globalErrors.push("Student Consent checkbox must be accepted to submit registration.");
  }

  return {
    isValid: globalErrors.length === 0 && studentErrors.every(e => !e || Object.keys(e).length === 0),
    globalErrors,
    studentErrors,
    teamInfoErrors
  };
};
