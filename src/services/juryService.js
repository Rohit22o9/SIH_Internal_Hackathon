import { hackathonConfig } from '../config/hackathonConfig';

const JURY_LOCAL_STORAGE_KEY = "sih_hackathon_jury_v1";

// Default initial dummy jury members if local storage is empty
const INITIAL_JURY_MEMBERS = [
  {
    juryId: "JURY-2026-001",
    name: "Dr. Rajesh Kumar",
    designation: "Professor & HOD",
    organizationDepartment: "COEP Tech University / Computer Engineering",
    mobile: "9823012345",
    email: "rajesh.kumar@coep.ac.in",
    registrationDate: "2026-08-10",
    registrationTime: "10:30 AM"
  },
  {
    juryId: "JURY-2026-002",
    name: "Anita Deshmukh",
    designation: "Principal Cloud Architect",
    organizationDepartment: "TCS Pune / Innovation Labs",
    mobile: "9890123456",
    email: "anita.deshmukh@tcs.com",
    registrationDate: "2026-08-12",
    registrationTime: "02:15 PM"
  }
];

export const initializeJuryStorage = () => {
  const existing = localStorage.getItem(JURY_LOCAL_STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(JURY_LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_JURY_MEMBERS));
  }
};

export const validateJuryData = (juryData) => {
  const errors = {};

  // 1. Name of the Jury
  if (!juryData.name || !juryData.name.trim()) {
    errors.name = "Full Name of the Jury is required.";
  } else if (juryData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long.";
  }

  // 2. Designation of Jury
  if (!juryData.designation || !juryData.designation.trim()) {
    errors.designation = "Designation of Jury is required.";
  }

  // 3. Organization/Department of Jury
  if (!juryData.organizationDepartment || !juryData.organizationDepartment.trim()) {
    errors.organizationDepartment = "Organization/Department of Jury is required.";
  }

  // 4. Mobile No of Jury (10 digits)
  if (!juryData.mobile || !juryData.mobile.trim()) {
    errors.mobile = "Mobile Number of Jury is required.";
  } else if (!/^\d{10}$/.test(juryData.mobile.trim())) {
    errors.mobile = "Mobile Number must be exactly 10 digits.";
  }

  // 5. Email ID of Jury
  if (!juryData.email || !juryData.email.trim()) {
    errors.email = "Email ID of Jury is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(juryData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const getStoredJury = async () => {
  if (!hackathonConfig.JURY_GOOGLE_APPS_SCRIPT_URL) {
    initializeJuryStorage();
    const raw = localStorage.getItem(JURY_LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : INITIAL_JURY_MEMBERS;
  } else {
    try {
      const response = await fetch(`${hackathonConfig.JURY_GOOGLE_APPS_SCRIPT_URL}?action=getJury`, {
        redirect: "follow"
      });
      const data = await response.json();
      return data.jury || [];
    } catch (err) {
      console.error("Error fetching jury from Google Apps Script:", err);
      initializeJuryStorage();
      const raw = localStorage.getItem(JURY_LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : INITIAL_JURY_MEMBERS;
    }
  }
};

export const submitJuryRegistration = async (juryData) => {
  const juryId = `SIH-JURY-${String(Math.floor(1000 + Math.random() * 9000))}`;
  const now = new Date();
  const registrationDate = now.toISOString().split('T')[0];
  const registrationTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const record = {
    juryId,
    name: juryData.name.trim(),
    designation: juryData.designation.trim(),
    organizationDepartment: juryData.organizationDepartment.trim(),
    mobile: juryData.mobile.trim(),
    email: juryData.email.trim().toLowerCase(),
    registrationDate,
    registrationTime,
    timestamp: now.toISOString()
  };

  if (!hackathonConfig.JURY_GOOGLE_APPS_SCRIPT_URL) {
    initializeJuryStorage();
    const existing = await getStoredJury();
    const updated = [record, ...existing];
    localStorage.setItem(JURY_LOCAL_STORAGE_KEY, JSON.stringify(updated));
    return { success: true, juryId, record };
  } else {
    try {
      const response = await fetch(hackathonConfig.JURY_GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "registerJury",
          payload: record
        }),
        redirect: "follow"
      });
      const result = await response.json();
      return { success: result.success, juryId, record };
    } catch (err) {
      console.error("Failed to post Jury data to Google Sheets:", err);
      initializeJuryStorage();
      const existing = await getStoredJury();
      localStorage.setItem(JURY_LOCAL_STORAGE_KEY, JSON.stringify([record, ...existing]));
      return { success: true, juryId, record };
    }
  }
};
