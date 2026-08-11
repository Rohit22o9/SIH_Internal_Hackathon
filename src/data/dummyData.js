// Initial Dummy Data for SIH Internal Hackathon 2026

const generateStudentAvatar = (name, gender) => {
  const bg = gender === 'Female' ? 'e91e63' : '3f51b5';
  const initial = name.charAt(0);
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=fff&size=200&bold=true`;
};

export const INITIAL_TEAMS = [
  {
    registrationId: "SIH-2026-001",
    teamName: "CodeCrafters",
    theme: "Smart Education",
    projectTitle: "AI-Powered Adaptive Learning & Student Progress Analytics",
    teamLeader: "Aarav Sharma",
    mentorName: "Dr. S. K. Kulkarni",
    memberCount: 6,
    femaleMemberCount: 2,
    registrationDate: "2026-09-01",
    registrationTime: "10:30 AM",
    status: "Approved",
    members: [
      { studentNumber: 1, isLeader: true, fullName: "Aarav Sharma", prn: "72145892A", department: "COMPUTER", year: "Third Year", semester: "Semester 5", gender: "Male", email: "aarav.sharma@jscoe.edu.in", mobile: "9876543210", skills: "React, Node.js, Python, PostgreSQL", photoUrl: generateStudentAvatar("Aarav Sharma", "Male") },
      { studentNumber: 2, isLeader: false, fullName: "Ananya Deshmukh", prn: "72145893B", department: "COMPUTER", year: "Third Year", semester: "Semester 5", gender: "Female", email: "ananya.d@jscoe.edu.in", mobile: "9876543211", skills: "UI/UX, Figma, Tailwind, Vue.js", photoUrl: generateStudentAvatar("Ananya Deshmukh", "Female") },
      { studentNumber: 3, isLeader: false, fullName: "Rohan Patil", prn: "72145894C", department: "IT", year: "Third Year", semester: "Semester 5", gender: "Male", email: "rohan.patil@jscoe.edu.in", mobile: "9876543212", skills: "Python, TensorFlow, PyTorch, Scikit-learn", photoUrl: generateStudentAvatar("Rohan Patil", "Male") },
      { studentNumber: 4, isLeader: false, fullName: "Priya Joshi", prn: "72145895D", department: "AI&DS", year: "Second Year", semester: "Semester 3", gender: "Female", email: "priya.joshi@jscoe.edu.in", mobile: "9876543213", skills: "Data Analytics, SQL, Tableau, R", photoUrl: generateStudentAvatar("Priya Joshi", "Female") },
      { studentNumber: 5, isLeader: false, fullName: "Aditya Kulkarni", prn: "72145896E", department: "COMPUTER", year: "Fourth Year", semester: "Semester 7", gender: "Male", email: "aditya.k@jscoe.edu.in", mobile: "9876543214", skills: "Docker, Kubernetes, AWS, CI/CD", photoUrl: generateStudentAvatar("Aditya Kulkarni", "Male") },
      { studentNumber: 6, isLeader: false, fullName: "Siddharth Shinde", prn: "72145897F", department: "IT", year: "Second Year", semester: "Semester 3", gender: "Male", email: "sid.shinde@jscoe.edu.in", mobile: "9876543215", skills: "HTML, CSS, JavaScript, Git", photoUrl: generateStudentAvatar("Siddharth Shinde", "Male") }
    ]
  },
  {
    registrationId: "SIH-2026-002",
    teamName: "NeuralNexus",
    theme: "Healthcare & MedTech",
    projectTitle: "Early Detection of Diabetic Retinopathy using Deep Learning",
    teamLeader: "Tanvi Pawar",
    mentorName: "Prof. V. M. More",
    memberCount: 6,
    femaleMemberCount: 3,
    registrationDate: "2026-09-01",
    registrationTime: "02:15 PM",
    status: "Verified",
    members: [
      { studentNumber: 1, isLeader: true, fullName: "Tanvi Pawar", prn: "72146001A", department: "AI&DS", year: "Fourth Year", semester: "Semester 7", gender: "Female", email: "tanvi.pawar@jscoe.edu.in", mobile: "9812345670", skills: "Deep Learning, CNN, Open-CV, Python", photoUrl: generateStudentAvatar("Tanvi Pawar", "Female") },
      { studentNumber: 2, isLeader: false, fullName: "Devendra Gaikwad", prn: "72146002B", department: "AI&DS", year: "Fourth Year", semester: "Semester 7", gender: "Male", email: "dev.gaikwad@jscoe.edu.in", mobile: "9812345671", skills: "FastAPI, MongoDB, Python, Docker", photoUrl: generateStudentAvatar("Devendra Gaikwad", "Male") },
      { studentNumber: 3, isLeader: false, fullName: "Neha Jagtap", prn: "72146003C", department: "E&TC", year: "Third Year", semester: "Semester 5", gender: "Female", email: "neha.jagtap@jscoe.edu.in", mobile: "9812345672", skills: "Embedded C, IoT, Raspberry Pi, Sensors", photoUrl: generateStudentAvatar("Neha Jagtap", "Female") },
      { studentNumber: 4, isLeader: false, fullName: "Yash Mehta", prn: "72146004D", department: "COMPUTER", year: "Third Year", semester: "Semester 5", gender: "Male", email: "yash.mehta@jscoe.edu.in", mobile: "9812345673", skills: "Flutter, Firebase, Dart, Mobile UI", photoUrl: generateStudentAvatar("Yash Mehta", "Male") },
      { studentNumber: 5, isLeader: false, fullName: "Kavya Suryavanshi", prn: "72146005E", department: "IT", year: "Second Year", semester: "Semester 3", gender: "Female", email: "kavya.s@jscoe.edu.in", mobile: "9812345674", skills: "System Testing, Documentation, Python", photoUrl: generateStudentAvatar("Kavya Suryavanshi", "Female") },
      { studentNumber: 6, isLeader: false, fullName: "Atharva Bhosale", prn: "72146006F", department: "AI&DS", year: "Third Year", semester: "Semester 5", gender: "Male", email: "atharva.b@jscoe.edu.in", mobile: "9812345675", skills: "Data Preprocessing, NumPy, Pandas", photoUrl: generateStudentAvatar("Atharva Bhosale", "Male") }
    ]
  },
  {
    registrationId: "SIH-2026-003",
    teamName: "AgroTech Pioneers",
    theme: "Agriculture, FoodTech & Rural Development",
    projectTitle: "Automated Crop Disease Identification and Soil Nutrient Optimizer",
    teamLeader: "Vishal Jadhav",
    mentorName: "",
    memberCount: 6,
    femaleMemberCount: 1,
    registrationDate: "2026-09-02",
    registrationTime: "09:45 AM",
    status: "Pending",
    members: [
      { studentNumber: 1, isLeader: true, fullName: "Vishal Jadhav", prn: "72147101A", department: "E&TC", year: "Fourth Year", semester: "Semester 7", gender: "Male", email: "vishal.jadhav@jscoe.edu.in", mobile: "9765432100", skills: "IoT Microcontrollers, ESP32, Arduino, LoRaWAN", photoUrl: generateStudentAvatar("Vishal Jadhav", "Male") },
      { studentNumber: 2, isLeader: false, fullName: "Sakshi More", prn: "72147102B", department: "COMPUTER", year: "Fourth Year", semester: "Semester 7", gender: "Female", email: "sakshi.more@jscoe.edu.in", mobile: "9765432101", skills: "Computer Vision, PyTorch, Flask", photoUrl: generateStudentAvatar("Sakshi More", "Female") },
      { studentNumber: 3, isLeader: false, fullName: "Pratham Mane", prn: "72147103C", department: "E&TC", year: "Fourth Year", semester: "Semester 7", gender: "Male", email: "pratham.m@jscoe.edu.in", mobile: "9765432102", skills: "PCB Design, Hardware Integration, Sensor Networks", photoUrl: generateStudentAvatar("Pratham Mane", "Male") },
      { studentNumber: 4, isLeader: false, fullName: "Omkar Thorat", prn: "72147104D", department: "MECHANICAL", year: "Third Year", semester: "Semester 5", gender: "Male", email: "omkar.t@jscoe.edu.in", mobile: "9765432103", skills: "CAD/CAM, 3D Printing, Drone Structure", photoUrl: generateStudentAvatar("Omkar Thorat", "Male") },
      { studentNumber: 5, isLeader: false, fullName: "Saurabh Wagh", prn: "72147105E", department: "ELECTRICAL", year: "Third Year", semester: "Semester 5", gender: "Male", email: "saurabh.w@jscoe.edu.in", mobile: "9765432104", skills: "Solar Power Systems, Battery Management", photoUrl: generateStudentAvatar("Saurabh Wagh", "Male") },
      { studentNumber: 6, isLeader: false, fullName: "Karan Kamble", prn: "72147106F", department: "IT", year: "Second Year", semester: "Semester 3", gender: "Male", email: "karan.k@jscoe.edu.in", mobile: "9765432105", skills: "React Native, Mobile App Backend", photoUrl: generateStudentAvatar("Karan Kamble", "Male") }
    ]
  },
  {
    registrationId: "SIH-2026-004",
    teamName: "CyberShield",
    theme: "Cybersecurity & National Security",
    projectTitle: "AI-Based Real-Time Ransomware Detection and Automated Response",
    teamLeader: "Meera Nair",
    mentorName: "Prof. P. R. Salunkhe",
    memberCount: 6,
    femaleMemberCount: 2,
    registrationDate: "2026-09-02",
    registrationTime: "11:20 AM",
    status: "Verified",
    members: [
      { studentNumber: 1, isLeader: true, fullName: "Meera Nair", prn: "72148201A", department: "IT", year: "Fourth Year", semester: "Semester 7", gender: "Female", email: "meera.nair@jscoe.edu.in", mobile: "9988776655", skills: "Ethical Hacking, Wireshark, Linux, Network Security", photoUrl: generateStudentAvatar("Meera Nair", "Female") },
      { studentNumber: 2, isLeader: false, fullName: "Akash Verma", prn: "72148202B", department: "IT", year: "Fourth Year", semester: "Semester 7", gender: "Male", email: "akash.verma@jscoe.edu.in", mobile: "9988776656", skills: "C++, Reverse Engineering, Malware Analysis", photoUrl: generateStudentAvatar("Akash Verma", "Male") },
      { studentNumber: 3, isLeader: false, fullName: "Rutuja Chavan", prn: "72148203C", department: "COMPUTER", year: "Third Year", semester: "Semester 5", gender: "Female", email: "rutuja.c@jscoe.edu.in", mobile: "9988776657", skills: "Python Security Scripts, SIEM, ELK Stack", photoUrl: generateStudentAvatar("Rutuja Chavan", "Female") },
      { studentNumber: 4, isLeader: false, fullName: "Rushikesh Nalawade", prn: "72148204D", department: "IT", year: "Third Year", semester: "Semester 5", gender: "Male", email: "rushi.n@jscoe.edu.in", mobile: "9988776658", skills: "Golang, API Security, Cryptography", photoUrl: generateStudentAvatar("Rushikesh Nalawade", "Male") },
      { studentNumber: 5, isLeader: false, fullName: "Harshwardhan Kadam", prn: "72148205E", department: "COMPUTER", year: "Second Year", semester: "Semester 3", gender: "Male", email: "harsh.kadam@jscoe.edu.in", mobile: "9988776659", skills: "Bash Scripting, Firewall Configuration", photoUrl: generateStudentAvatar("Harshwardhan Kadam", "Male") },
      { studentNumber: 6, isLeader: false, fullName: "Varun Shetty", prn: "72148206F", department: "MCA", year: "First Year", semester: "Semester 1", gender: "Male", email: "varun.shetty@jscoe.edu.in", mobile: "9988776660", skills: "Java, Database Security, Spring Boot", photoUrl: generateStudentAvatar("Varun Shetty", "Male") }
    ]
  },
  {
    registrationId: "SIH-2026-005",
    teamName: "UrbanFlow",
    theme: "Smart Cities & Infrastructure",
    projectTitle: "Intelligent Traffic Signal Synchronization using Edge AI Camera Grid",
    teamLeader: "Chinmay Sonawane",
    mentorName: "Dr. A. B. Shinde",
    memberCount: 6,
    femaleMemberCount: 2,
    registrationDate: "2026-09-03",
    registrationTime: "04:10 PM",
    status: "Approved",
    members: [
      { studentNumber: 1, isLeader: true, fullName: "Chinmay Sonawane", prn: "72149301A", department: "COMPUTER", year: "Fourth Year", semester: "Semester 7", gender: "Male", email: "chinmay.s@jscoe.edu.in", mobile: "9654321870", skills: "YOLOv8, OpenCV, Python, Edge Impulse", photoUrl: generateStudentAvatar("Chinmay Sonawane", "Male") },
      { studentNumber: 2, isLeader: false, fullName: "Isha Nimbalkar", prn: "72149302B", department: "AI&DS", year: "Third Year", semester: "Semester 5", gender: "Female", email: "isha.n@jscoe.edu.in", mobile: "9654321871", skills: "Reinforcement Learning, Python, PyTorch", photoUrl: generateStudentAvatar("Isha Nimbalkar", "Female") },
      { studentNumber: 3, isLeader: false, fullName: "Divya Shah", prn: "72149303C", department: "E&TC", year: "Third Year", semester: "Semester 5", gender: "Female", email: "divya.shah@jscoe.edu.in", mobile: "9654321872", skills: "Embedded Systems, NVIDIA Jetson, C++", photoUrl: generateStudentAvatar("Divya Shah", "Female") },
      { studentNumber: 4, isLeader: false, fullName: "Suraj Pawashe", prn: "72149304D", department: "ELECTRICAL", year: "Third Year", semester: "Semester 5", gender: "Male", email: "suraj.p@jscoe.edu.in", mobile: "9654321873", skills: "Traffic Control Logic, Microcontrollers", photoUrl: generateStudentAvatar("Suraj Pawashe", "Male") },
      { studentNumber: 5, isLeader: false, fullName: "Nikhil Bhosale", prn: "72149305E", department: "IT", year: "Second Year", semester: "Semester 3", gender: "Male", email: "nikhil.b@jscoe.edu.in", mobile: "9654321874", skills: "Web Dashboard, Leaflet.js, WebSockets", photoUrl: generateStudentAvatar("Nikhil Bhosale", "Male") },
      { studentNumber: 6, isLeader: false, fullName: "Ganesh Shelke", prn: "72149306F", department: "MECHANICAL", year: "Second Year", semester: "Semester 3", gender: "Male", email: "ganesh.s@jscoe.edu.in", mobile: "9654321875", skills: "Enclosure Design, CAD Modeling", photoUrl: generateStudentAvatar("Ganesh Shelke", "Male") }
    ]
  }
];

// Additional mock registrations to populate analytics charts realistically
export const EXTRA_SUMMARY_STATS = {
  totalTeams: 42,
  totalStudents: 252,
  maleStudents: 165,
  femaleStudents: 87,
  totalDepartments: 9,
  totalProjects: 42,
  teamsWithMentors: 31,
  teamsWithoutMentors: 11
};

export const MOCK_DEPARTMENT_DISTRIBUTION = [
  { department: "COMPUTER", teams: 14, students: 84, male: 54, female: 30 },
  { department: "IT", teams: 10, students: 60, male: 38, female: 22 },
  { department: "AI&DS", teams: 7, students: 42, male: 26, female: 16 },
  { department: "E&TC", teams: 5, students: 30, male: 20, female: 10 },
  { department: "ELECTRICAL", teams: 3, students: 18, male: 13, female: 5 },
  { department: "MECHANICAL", teams: 1, students: 6, male: 5, female: 1 },
  { department: "BCA", teams: 1, students: 6, male: 4, female: 2 },
  { department: "MCA", teams: 1, students: 6, male: 5, female: 1 },
  { department: "MBA", teams: 0, students: 0, male: 0, female: 0 }
];

export const MOCK_THEME_DISTRIBUTION = [
  { theme: "Smart Education", count: 8 },
  { theme: "Healthcare & MedTech", count: 7 },
  { theme: "Agriculture, FoodTech & Rural Development", count: 6 },
  { theme: "Cybersecurity & National Security", count: 5 },
  { theme: "Smart Cities & Infrastructure", count: 5 },
  { theme: "Environment & Renewable Energy", count: 4 },
  { theme: "Transportation & Logistics", count: 3 },
  { theme: "FinTech & Blockchain", count: 2 },
  { theme: "Robotics & Drones", count: 2 }
];

export const MOCK_YEAR_DISTRIBUTION = [
  { year: "First Year", students: 18, teams: 3 },
  { year: "Second Year", students: 48, teams: 8 },
  { year: "Third Year", students: 108, teams: 18 },
  { year: "Fourth Year", students: 78, teams: 13 }
];

export const MOCK_SEMESTER_DISTRIBUTION = [
  { semester: "Semester 1", students: 18 },
  { semester: "Semester 3", students: 48 },
  { semester: "Semester 5", students: 108 },
  { semester: "Semester 7", students: 78 }
];

export const MOCK_REGISTRATION_TREND = [
  { date: "Day 1 (Sep 01)", teams: 5, cumulative: 5 },
  { date: "Day 2 (Sep 02)", teams: 8, cumulative: 13 },
  { date: "Day 3 (Sep 03)", teams: 12, cumulative: 25 },
  { date: "Day 4 (Sep 04)", teams: 10, cumulative: 35 },
  { date: "Day 5 (Sep 05)", teams: 7, cumulative: 42 }
];
