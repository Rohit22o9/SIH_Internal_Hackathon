import { hackathonConfig } from '../config/hackathonConfig';
import { INITIAL_TEAMS, MOCK_DEPARTMENT_DISTRIBUTION, MOCK_THEME_DISTRIBUTION, MOCK_YEAR_DISTRIBUTION, MOCK_REGISTRATION_TREND } from '../data/dummyData';

const LOCAL_STORAGE_KEY = "sih_hackathon_teams_v1";

// Helper to initialize local storage if empty
export const initializeStorage = () => {
  const existing = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_TEAMS));
  }
};

export const getStoredTeams = async () => {
  if (hackathonConfig.USE_DUMMY_DATA) {
    initializeStorage();
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : INITIAL_TEAMS;
  } else {
    try {
      const response = await fetch(`${hackathonConfig.GOOGLE_APPS_SCRIPT_URL}?action=getTeams`, {
        redirect: "follow"
      });
      const data = await response.json();
      return data.teams || [];
    } catch (err) {
      console.error("Error fetching teams from Google Apps Script:", err);
      return [];
    }
  }
};

export const submitTeamRegistration = async (formData) => {
  const regId = `SIH-2026-${String(Math.floor(100 + Math.random() * 900)).padStart(3, '0')}`;
  const now = new Date();
  const registrationDate = now.toISOString().split('T')[0];
  const registrationTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Structure Sheet 1: Team Data
  const teamRecord = {
    registrationId: regId,
    teamName: formData.teamInformation.teamName,
    theme: formData.teamInformation.theme,
    projectTitle: formData.teamInformation.projectTitle,
    teamLeader: formData.teamInformation.teamLeaderName,
    mentorName: formData.teamInformation.mentorName || "N/A",
    memberCount: 6,
    femaleMemberCount: formData.students.filter(s => s.gender === 'Female').length,
    registrationDate,
    registrationTime,
    status: "Verified",
    members: formData.students.map((student, idx) => ({
      studentNumber: idx + 1,
      isLeader: student.fullName.trim().toLowerCase() === formData.teamInformation.teamLeaderName.trim().toLowerCase(),
      fullName: student.fullName,
      prn: student.prn,
      department: student.department,
      year: student.year,
      semester: student.semester,
      gender: student.gender,
      email: student.email,
      mobile: student.mobile,
      skills: student.skills,
      photoUrl: student.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(student.fullName)}&background=3f51b5&color=fff`
    })),
    declarations: formData.declarations,
    consentAccepted: formData.consentAccepted,
    consentTimestamp: now.toISOString()
  };

  if (hackathonConfig.USE_DUMMY_DATA) {
    initializeStorage();
    const existing = await getStoredTeams();
    const updated = [teamRecord, ...existing];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    return { success: true, registrationId: regId, teamRecord };
  } else {
    try {
      // POST to Google Apps Script URL using text/plain to prevent CORS preflight OPTIONS rejection
      const response = await fetch(hackathonConfig.GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "registerTeam",
          payload: teamRecord
        }),
        redirect: "follow"
      });
      const result = await response.json();
      return { success: result.success, registrationId: regId, teamRecord };
    } catch (err) {
      console.error("Failed to post to Google Sheets:", err);
      // Fallback local storage save if remote fails
      initializeStorage();
      const existing = await getStoredTeams();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([teamRecord, ...existing]));
      return { success: true, registrationId: regId, teamRecord };
    }
  }
};

// LIVE CALCULATION OF ANALYTICS FROM TEAMS DATA
export const calculateLiveAnalytics = (teams) => {
  const totalTeams = teams.length;
  let totalStudents = 0;
  let maleStudents = 0;
  let femaleStudents = 0;
  let otherStudents = 0;
  let teamsWithMentors = 0;
  let teamsWithoutMentors = 0;

  const departmentCounts = {};
  const themeCounts = {};
  const yearCounts = {};
  const semesterCounts = {};

  hackathonConfig.DEPARTMENTS.forEach(dep => {
    departmentCounts[dep] = { teams: 0, students: 0, male: 0, female: 0, other: 0 };
  });

  hackathonConfig.THEMES.forEach(th => {
    themeCounts[th] = 0;
  });

  hackathonConfig.YEARS_OF_STUDY.forEach(yr => {
    yearCounts[yr] = { students: 0, teams: new Set() };
  });

  teams.forEach(team => {
    if (team.mentorName && team.mentorName !== "N/A" && team.mentorName.trim() !== "") {
      teamsWithMentors++;
    } else {
      teamsWithoutMentors++;
    }

    if (team.theme) {
      themeCounts[team.theme] = (themeCounts[team.theme] || 0) + 1;
    }

    const members = team.members || [];
    totalStudents += members.length;

    members.forEach(student => {
      // Gender stats
      if (student.gender === 'Male') maleStudents++;
      else if (student.gender === 'Female') femaleStudents++;
      else otherStudents++;

      // Department stats
      const dep = student.department;
      if (departmentCounts[dep]) {
        departmentCounts[dep].students++;
        if (student.gender === 'Male') departmentCounts[dep].male++;
        else if (student.gender === 'Female') departmentCounts[dep].female++;
        else departmentCounts[dep].other++;
      }

      // Year stats
      const yr = student.year;
      if (yearCounts[yr]) {
        yearCounts[yr].students++;
        yearCounts[yr].teams.add(team.registrationId);
      }

      // Semester stats
      const sem = student.semester;
      if (sem) {
        semesterCounts[sem] = (semesterCounts[sem] || 0) + 1;
      }
    });

    // Count team department by leader or majority
    const leader = members.find(m => m.isLeader) || members[0];
    if (leader && leader.department && departmentCounts[leader.department]) {
      departmentCounts[leader.department].teams++;
    }
  });

  const departmentData = Object.keys(departmentCounts).map(dep => ({
    department: dep,
    teams: departmentCounts[dep].teams,
    students: departmentCounts[dep].students,
    male: departmentCounts[dep].male,
    female: departmentCounts[dep].female
  })).sort((a, b) => b.students - a.students);

  const themeData = Object.keys(themeCounts)
    .filter(th => themeCounts[th] > 0 || totalTeams === 0)
    .map(th => ({ theme: th, count: themeCounts[th] }))
    .sort((a, b) => b.count - a.count);

  const genderData = [
    { name: 'Male Students', value: maleStudents, color: '#3b82f6' },
    { name: 'Female Students', value: femaleStudents, color: '#ec4899' },
    { name: 'Other', value: otherStudents, color: '#a855f7' }
  ];

  const yearData = Object.keys(yearCounts).map(yr => ({
    year: yr,
    students: yearCounts[yr].students,
    teams: yearCounts[yr].teams.size
  }));

  const uniqueProjects = new Set(teams.map(t => t.projectTitle)).size;
  const uniqueDepartments = departmentData.filter(d => d.students > 0).length;

  return {
    summary: {
      totalTeams,
      totalStudents,
      maleStudents,
      femaleStudents,
      totalDepartments: uniqueDepartments || hackathonConfig.DEPARTMENTS.length,
      totalProjects: uniqueProjects || totalTeams,
      teamsWithMentors,
      teamsWithoutMentors
    },
    departmentData,
    themeData,
    genderData,
    yearData
  };
};
