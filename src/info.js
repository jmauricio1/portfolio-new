const info = {
  about:{
    quote: `"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them." - Andrew Hunt`,
    paragraphs: [
      `Hello, I'm Josh! I'm an aspiring developer with years of experience in developing software and web applications. I received my Bachelor of Science degree in Computer Science from Western Oregon University in 2020. Post-graduation, I was also able to work towards and earn my certificate of completion from The Complete 2021 Web Development Bootcamp instructed by Dr. Angela Yu with the App Brewery. Since then, I have been involved in coding communities such as FreeCodeCamp and the App Brewery providing help to those learning software and web development.`,
      `As a developer, I do not like being stagnant. I am always striving to be a better developer than the day before. Being curious and self-motivated, I push myself to keep learning new things, expand my knowledge, and take on new challenges. I am passionate about what I do and thus, apply my energetic, yet determined personality, in the process of building applications and producing software with a creative mind.`
    ]
  },
  projects: {
    featured: [
      {
        title: "Ocean and Dexter's Kitchen",
        link: "https://oceananddexterskitchen.netlify.app/",
        paragraphs: [
          "Ocean and Dexter's Kitchen is a collection of recipes and tutorials from the talented Portland, Oregon based chef, Ocean Carlisle. Visitors can dive into the methods of his recipes and simply recreate his work from home.",
        ],
        tools: "React, HTML, CSS, JavaScript, Email.js, Netlify, Adobe XD",
      },
      {
        title: "The Black and White Collection",
        link: "https://bwcollex.netlify.app/",
        paragraphs: [
          "The Black and White collection is a simple selection of black and white images from various photographers and artists on Unsplash. The purpose of this project was to explore with parallax scrolling and compose a layout that would sway towards uncommon yet pleasing.",
        ],
        tools: "React, HTML, CSS, JavaScript, Netlify, Adobe XD",
      },
      {
        title: "React Portfolio",
        link: "/",
        paragraphs: [
          `My React portfolio is used to showcase my work, projects, and information about myself. Please, don't be afraid to read about myself as a developer and view the projects I collaborated on.`,
        ]
      },
      {
        title: "Puppert",
        link: "#",
        paragraphs: [
          `Puppert is a productivity application that tracks the progress of user and team created development projects. I have found that other progress tracking applications are complex and have many features that are not utilized by many users. Puppert, on the other hand, is being made to be simple and have an easy-going user experience while having a comprehensive user interface.`,
          `"We believe in keeping the planning phase quick and simple so that there is more room for your creativity."`
        ]
      },
      {
        title: "Astronomical Learning",
        link: "#",
        paragraphs: [
          `Astronomical Learning is a website for those interested in all things space who want to learn more about things beyond Earth. This project is also an informational system that will allow people of all ages to learn about SpaceX, NASA and space in a variety of ways.`,
          `Visitors will be able to see what missions SpaceX and NASA have completed and be able to view various information about each mission. The website will also include other ways of teaching people about what goes into space missions and other aspects of space. Unlike SpaceX’s launch manifest, our product will be able to deliver more detailed information about SpaceX missions and in a format that is more appealing to younger audiences alongside a much larger scope of topics.`
        ]
      }
    ],
    bootcamp: [
      {
        title: "Keeper App",
        link: "#",
        paragraphs: [
          `The Keeper App is a simplified clone of Google Keep. The main purpose of creating this application was to sharpen my skills on some key concepts in React.js. Some core concepts that I was able to practice during the creation of this project was event handling, state management with React Hooks, array functions, forms, and spread operators.`
        ]
      },
      {
        title: "TinDog",
        link: "#",
        paragraphs : [
          `The main idea behind TinDog was to make a Tinder for Dogs. The goal in this project was to recreate the TinDog landing page from a design of the page while implementing Bootstrap components. In practicing front-end development for this project, I was able to improve my skills with HTML and CSS.`
        ]
      },
      {
        title: "Secrets App",
        link: "#",
        paragraphs: [
          `The Secrets App is an application where users can share information anonymously.`,
          `The goal of this project was to practice many server-side aspects such as connecting to MongoDB using Mongoose, user authentication and third-party logins using Passport.js, and different ways to hash user passwords.`
        ]
      }
    ],
  },
  bootcampSkills: [
    "Front-End Web Development",
    "HTML 5",
    "CSS 3",
    "Bootstrap 4",
    "Javascript ES6",
    "DOM Manipulation",
    "jQuery",
    "Bash Command Line",
    "Git, GitHub and Version Control",
    "Backend Web Development",
    "Node.js",
    "NPM",
    "Express.js",
    "EJS",
    "REST",
    "APIs",
    "Databases",
    "SQL",
    "MongoDB",
    "Mongoose",
    "Authentication",
    "Firebase",
    "React.js",
    "React Hooks",
    "Web Design",
  ],
  skillIcons: [
    {
      name: 'js',
      simpleIconName: 'Javascript',
      color: '#F7DF1E'
    },
    {
      name: 'cs',
      simpleIconName: 'Csharp',
      color: '#239120'
    },
    {
      name: 'cpp',
      simpleIconName: 'Cplusplus',
      color: '#00599C'
    },
    {
      name: 'html',
      simpleIconName: 'Html5',
      color: '#E34F26'
    },
    {
      name: 'css',
      simpleIconName: 'CssThree',
      color: '#1572B6'
    },
    {
      name: 'rjs',
      simpleIconName: 'ReactJs',
      color: '#61DAFB'
    },
    {
      name: 'vss',
      simpleIconName: 'VisualStudio',
      color: '#5C2D91'
    },
    {
      name: 'vsc',
      simpleIconName: 'Visualstudiocode',
      color: '#007ACC'
    },
    {
      name: 'g',
      simpleIconName: 'Git',
      color: '#F05032'
    },
    {
      name: 'gh',
      simpleIconName: 'Github',
      color: '#181717'
    },
    {
      name: 'msa',
      simpleIconName: 'Microsoftazure',
      color: '#0089D6'
    },
    {
      name: 'mssql',
      simpleIconName: 'Microsoftsqlserver',
      color: '#CC2927'
    },
    {
      name: 'mdb',
      simpleIconName: 'Mongodb',
      color: '#47A248'
    },
    {
      name: 'bs',
      simpleIconName: 'Bootstrap',
      color: '#7952B3'
    },
    {
      name: 'jq',
      simpleIconName: 'Jquery',
      color: '#0769AD'
    },
    {
      name: 'ndjs',
      simpleIconName: 'NodeDotJs',
      color: '#339933'
    },
    {
      name: 'n',
      simpleIconName: 'Npm',
      color: '#CB3837'
    },
  ]
};

export default info;
