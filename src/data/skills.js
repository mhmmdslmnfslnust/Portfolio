import { FiCode, FiDatabase, FiLayers, FiServer, FiSettings, FiSmartphone, FiTool } from 'react-icons/fi';

export const skills = [
  {
    category: "Database",
    items: [
      {
        name: "SQL",
        icon: "database",
        level: 40, // Beginner level (percentage)
        description: "Academic knowledge from database courses"
      }
    ]
  },
  {
    category: "Currently Learning",
    items: [
      {
        name: "Web Development",
        icon: "code",
        level: 20,
        description: "Learning the basics of web development"
      }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      {
        name: "Communication",
        icon: "comments",
        level: 70,
        description: "Effective verbal and written communication"
      },
      {
        name: "Teamwork",
        icon: "users",
        level: 75,
        description: "Collaborative team player"
      },
      {
        name: "Problem Solving",
        icon: "puzzle-piece",
        level: 65,
        description: "Analytical approach to solving problems"
      }
    ]
  },
  {
    category: "Languages",
    items: [
      {
        name: "English",
        icon: "language",
        level: 80,
        description: "Professional working proficiency"
      },
      {
        name: "Urdu",
        icon: "language",
        level: 95,
        description: "Native language"
      }
    ]
  }
];

export default skills;
