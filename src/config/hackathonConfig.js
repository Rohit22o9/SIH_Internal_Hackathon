// SIH Internal Hackathon Configuration File
// This configuration centralizes all settings, endpoints, and validation rules.

export const hackathonConfig = {
  // Global Toggle for Data Source
  // Set to false when connecting to real Google Apps Script backend
  USE_DUMMY_DATA: false,

  // Google Integration Endpoints
  GOOGLE_APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbx3x9hbzmMGlfwBdX0fhGfec7K7vNd6UhcRTgLgECEmhwFrEu6df3miMbJuKB2O4Lhm/exec",
  GOOGLE_DRIVE_FOLDER_ID: "YOUR_GOOGLE_DRIVE_FOLDER_ID",

  // College Information
  COLLEGE: {
    name: "JSPM's Jayawantrao Sawant College of Engineering, Pune",
    shortName: "JSPM JSCOE",
    location: "Hadapsar, Pune, Maharashtra 411028",
    spoc: "Dr. Dattatray Waghole"
  },

  // Prohibited Keywords for Team Name Validation
  PROHIBITED_TEAM_NAME_KEYWORDS: [
    "JSPM",
    "JSCOE",
    "JAYAWANTRAO",
    "SAWANT",
    "COLLEGE",
    "ENGINEERING",
    "JSPMS",
    "PUNE"
  ],

  // Configurable Academic Departments
  DEPARTMENTS: [
    "IT",
    "COMPUTER",
    "E&TC",
    "AI&DS",
    "ELECTRICAL",
    "MECHANICAL",
    "BCA",
    "MCA",
    "MBA"
  ],

  // Configurable Year of Study
  YEARS_OF_STUDY: [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year"
  ],

  // Configurable Semesters
  SEMESTERS: [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8"
  ],

  // Configurable SIH Themes / Domains (17 Official SIH Categories)
  THEMES: [
    "Smart Automation",
    "Fitness & Sports",
    "Space Technology",
    "Heritage & Culture",
    "MedTech/BioTech/HealthTech",
    "Agriculture, FoodTech & Rural Development",
    "Smart Vehicles",
    "Transportation & Logistics",
    "Robotics and Drones",
    "Clean & Green Technology",
    "Tourism",
    "Renewable/ Sustainable Energy",
    "Smart Education",
    "Disaster Management",
    "Games & Toys",
    "FinTech",
    "Miscellaneous"
  ],

  // Admin Credentials (Protected)
  ADMIN_CREDENTIALS: {
    username: "admin@jscoe.sih26.edu.in",
    password: "SIH@2026"
  },

  // Event Placeholders
  EVENT_PLACEHOLDERS: {
    eventDate: "August 22 - 23, 2026",
    registrationDeadline: "August 16, 2026 (11:59 PM)",
    venue: "VC Hall Building, JSCOE Pune",
    sihVersion: "SIH Internal Hackathon 2026"
  }
};
