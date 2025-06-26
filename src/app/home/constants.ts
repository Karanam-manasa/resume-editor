import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const MANASA_RESUME: Resume = {
  profile: {
    name: "Manasa Karanam",
    summary:
      "Driven and detail-oriented Computer Science student with practical experience in Python and Java. Eager to apply technical skills to real-world software development projects and grow within a collaborative and innovative environment.",
    email: "manasakaranam868@gmail.com",
    phone: "+91 9647293746",
    location: "India",
    url: "linkedin.com/in/manasa-k-514807254",
  },
  workExperiences: [
    {
      company: "Infosys Springboard",
      jobTitle: "Java Full Stack Developer Intern (Virtual)",
      date: "2024",
      descriptions: [
        "Worked on BidCenter: Online Auction and Bidding platform.",
        "Gained hands-on experience with React.js, MySQL, RESTful APIs, and Eclipse IDE.",
      ],
    },
  ],
  educations: [
    {
      school: "Shri Vishnu Engineering College for Women, Bhimavaram",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      date: "2022 - 2026",
      gpa: "9.38",
      descriptions: [],
    },
    {
      school: "SASI Junior College for Girls, Velivennu",
      degree: "Intermediate",
      date: "2020 - 2022",
      gpa: "970/1000",
      descriptions: [],
    },
    {
      school: "SASI English Medium High School, Nallajerla",
      degree: "Secondary School Certificate (SSC)",
      date: "2019 - 2020",
      gpa: "582/600",
      descriptions: [],
    },
  ],
  projects: [
    {
      project: "Hostel Vacancy Hub",
      date: "2024",
      descriptions: [
        "Developed a user-friendly platform for students to find and view available hostel accommodations using Tkinter, PIL, and MySQL.",
        "Streamlined the search process and displayed detailed information on vacant rooms.",
      ],
    },
    {
      project: "Medicine Review Predictor",
      date: "2024",
      descriptions: [
        "Built a machine learning web app using Flask to predict the Excellent Review % of medicines.",
        "Used Random Forest Regressor trained on real-world data to deliver accurate predictions.",
      ],
    },
    {
      project: "CareerConnect",
      date: "2024",
      descriptions: [
        "Developed a full-stack platform using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.",
        "Enabled job seekers to browse/apply and recruiters to post/manage job listings.",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "Python", rating: 4 },
      { skill: "Java", rating: 3 },
      { skill: "C", rating: 2 },
      { skill: "HTML", rating: 4 },
      { skill: "CSS", rating: 4 },
      { skill: "JavaScript", rating: 3 },
    ],
    descriptions: [
      "Tech: Flask, React.js, Node.js, Express.js, MongoDB, MySQL, Pandas, Scikit-learn, SQL, DBMS, OS",
      "Soft: Communication, Teamwork, Time Management, Patience",
    ],
  },
  custom: {
    descriptions: [
      "Certified in Introduction to Front-End Development by META (Coursera)",
      "Certified in Foundations of CyberSecurity by Google (Coursera)",
      "Certified in Introduction to Artificial Intelligence by IBM (Coursera)",
      "Certified in Zscaler CyberSecurity by AICTE",
      "Selected as a Mentee for Adobe Career Academy 2024",
      "Top 25 in college-level Smart India Hackathon",
      "Coding Profiles: LeetCode (Manasa Karanam), CodeChef (manasa36), SmartInterviews (Manasa Karanam)",
    ],
  },
};

export const START_MANASA_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: MANASA_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: MANASA_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
