
// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';

// Education Section Logo's
import galgotias from './assets/education_logo/galgotias.jpg';
import bcs from './assets/education_logo/bcs.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/git.png';
import movierecLogo from './assets/work_logo/filmorax.png';


// Exporting constants for use in other components
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },

    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company:"Self-Driven / Personal Projects",
      date: "April 2025 - Present",
      desc: "As a self-motivated learner, I explored full-stack web development and built basic projects using HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB. I gained a good understanding of how frontend and backend work together in a web application. I also learned to use Git and GitHub for version control and focused on writing clean and understandable code while improving my problem-solving skills.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
     img: agcLogo, // You can replace this with a relevant image or leave as is
     role: "Java Developer (Academic Project)",
     company: "Personal / Academic Project",
     date: "July 2023 - March 2024",
     desc: "Developed a Library Management System as part of a personal/academic project using Java, Java Swing for GUI, and MySQL for database management. Designed user-friendly interfaces to handle book records, student information, and issue/return processes. Focused on core Java concepts, basic OOP principles, and SQL queries to create a functional and interactive desktop application.",
    skills: [
      "Java",
      "Java Swing",
       "MySQL",
       "Object-Oriented Programming",
       "Database Design",
     ],
    },
    {
     id: 2,
     img: agcLogo, // You can replace this with a relevant image or leave as is
     role: "Frontend Developer (Personal Projects)",
     company: "Self-Learning",
     date: "January 2025 - Present",
     desc: "Built several basic web applications while learning frontend development. Used HTML, CSS, JavaScript, and React to create responsive user interfaces such as a portfolio website, to-do app. Focused on improving layout skills, component-based design, and gaining hands-on experience with React and DOM manipulation.",
     skills: [
      "HTML",
       "CSS",
       "JavaScript",
       "React",
       "Responsive Design",
       "Git",
     ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: galgotias,
      school: "GALGOTIAS UNIVERSITY",
      date: "Currently Studying",
      grade: "8.72 ",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Galgotias University. As a second-year student, I have built a solid foundation in programming and core computer science subjects. So far, I have studied courses such as Data Structures, Object-Oriented Programming, Web Development, and Database Management Systems. I actively participate in coding contests, workshops, and technical events, which help me enhance my practical skills and stay updated with current industry trends. My journey at Galgotias University has been enriching, contributing significantly to my technical development and professional aspirations.",
      degree: "Btech in Computer Science + Artificial Intelligence + Machine Learning.",
    },
   
    {
      id: 1,
      img: bcs,
      school: "Bishop Conrad Sr Sec School ,Dohna Bareilly",
      date: "April 2021 - July 2022",
      grade: "80.6%",
      desc: "I completed my class 12 education from Bishop Comnrad Sr Sec School, Dohna Bareilly, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: bcs,
      school: "Bishop Conrad Sr Sec School ,Dohna Bareilly",
      date: "Apr 2019 - July 2020",
      grade: "75.6%",
      desc: "I completed my class 10 education from Bishop Conrad Sr Sec School, Dohna Bareilly, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/PriyanshuSharma3108/Github-Profile-Detector",
      webapp: "https://github-profile-detector-beryl.vercel.app/",
    },
    
    {
      id: 1,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/PriyanshuSharma3108/Movie-Search",
      webapp: "https://movie-search-five-eosin.vercel.app/",
    },

  ];  