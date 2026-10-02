// Edit this file to change everything shown on the site.
export const profile = {
  first: "Rutuja",
  last: "Waghmode",
  role: "Full Stack Web Developer",
  intro:
    "Passionate about building responsive web applications and solving real-world problems with clean and efficient code.",
  about: [
    "I'm a Computer Science graduate and a Full Stack Web Developer with 2+ years of experience building web applications using Core PHP, MySQL, JavaScript and modern web technologies.",
    "I enjoy building user-friendly and efficient solutions, working on challenging projects, and continuously learning new technologies.",
  ],
  email: "rutuja.waghmode@gmail.com",
  phone: "+91 98765 43210",
  location: "Pune, Maharashtra",
  languages: "English, Hindi, Marathi",
  education: "BCS (Computer Science)",
  years: "2+",
  links: { linkedin: "#", github: "#", instagram: "#" },
};

export const skills = [
  "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AJAX", "JSON",
  "Git", "cPanel", "Laravel", "React", "jQuery", "VS Code", "Windows",
];

export const experience = [
  {
    role: "Full Stack Developer", company: "Current Company", period: "2023 – Present",
    points: [
      "Developed and maintained web applications using Core PHP, MySQL, JavaScript and Bootstrap.",
      "Worked on multiple modules including employee management, CRM and attendance systems.",
      "Collaborated with the team to deliver products on time.",
    ],
  },
  {
    role: "PHP Developer", company: "Previous Company", period: "2021 – 2023",
    points: [
      "Worked on Core PHP and MySQL based projects.",
      "Handled website updates, bug fixes and database management.",
      "Used cPanel for hosting and domain management.",
    ],
  },
];

export const projects = [
  { name: "Employee Management System", tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    desc: "Employee management system with CRUD operations, employee records, search and database management." },
  { name: "CRM System", tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    desc: "Customer relationship management system with customer management, follow-ups, leads and reports." },
  { name: "Attendance Management System", tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    desc: "Manage employee attendance, mark present/absent, generate reports and view history." },
  { name: "E-commerce Website", tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    desc: "Online shopping website with product listing, cart, order management and user authentication." },
  { name: "Job Portal", tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    desc: "Platform to search and apply for jobs with user registration, posting and application tracking." },
  { name: "Portfolio Website", tech: ["Next.js", "Tailwind CSS", "React"],
    desc: "This website, showcasing my skills, projects and resume." },
].map((p) => ({ ...p, live: "#", github: "#" }));
