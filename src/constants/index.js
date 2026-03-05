const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
 
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  
];

const blogPosts = [
  {
    id: 1,
    date: "December 03, 2025",
    title:
      "The Rise of Tailwind CSS -Why Developers Are Switching",
    image: "/images/blog1.png",
    link: "https://medium.com/@nemisruparel07/the-rise-of-tailwind-css-why-developers-are-switching-90ad4a001187",
  },
  {
    id: 2,
    date: "December 03, 2025",
    title: "How to Build a Clean Portfolio as a Computer Engineering Student",
    image: "/images/blog2.png",
    link: "https://medium.com/@nemisruparel07/how-to-build-a-clean-portfolio-as-a-computer-engineering-student-db91db02bf64",
  },
  {
  id: 3,
  date: "December 03, 2025",
  title: "Understanding GitHub and How to Use It Effectively",
  image: "/images/blog3.png",
  link: "",
  comingSoon: true,
}
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js","HTML"],
  },
  {
    category: "Styling",
    items: ["Tailwind", "CSS"],
  },
  {
    category: "Backend",
    items: ["JavaScript"],
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Android"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Oracle", "MySQL"],
  },
  {
    category: "Programming Languages",
    items: ["C", "C++", "Java", "PHP", "Python"],
  },
  {
    category: "Python Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    category: "Frameworks",
    items: ["Bootstap", "Angular", "Expo",],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Kaggle", "Linux"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#000000",
    link: "https://github.com/NemisRuparel",
  },
  {
  id: 3,
  text: "Email",
  icon: "/icons/email.svg",
  bg: "#EC493C",
  link: "mailto:nemisruparel07@gmail.com",
},
{
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#2C2C2C",
    link: "https://x.com/NemisRuparel",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#086BCA",
    link: "https://www.linkedin.com/in/nemis-ruparel",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Campus Placement Prediction ML Model",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Campus Placement Prediction.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
  "The Campus Placement Prediction project is a machine learning model designed to predict whether a student is likely to be placed during campus recruitment.",
  "It analyzes various academic and educational factors such as grades, specialization, and student background to identify patterns that influence placement outcomes.",
  "The project involves data preprocessing, exploratory data analysis, and training machine learning models to achieve accurate predictions.",
  "It demonstrates practical experience in applying machine learning techniques to real-world problems using Python and data science libraries.",
  "The system helps illustrate how data-driven insights can support better decision-making in educational and recruitment environments."
],
        },
        {
          id: 2,
          name: "GitHub Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/NemisRuparel/Campus-Placement-Prediction-ML-Model",
          position: "top-10 right-20",
        },
        
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Indian Heritage Narrator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Indian Heritage Narrator.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
  "The Indian Heritage Narrator project is designed to present stories and historical insights about India’s rich cultural heritage in an engaging digital format.",
  "It allows users to explore important monuments, traditions, and historical places while learning about their cultural significance.",
  "Instead of just displaying information, the platform focuses on delivering heritage content in a storytelling style that makes learning about history more interactive and interesting.",
  "The project demonstrates how technology can be used to preserve and share cultural knowledge with a wider audience.",
  "It is built using modern web technologies, showcasing skills in TypeScript and web development while creating an informative and user-friendly experience."
],
        },
        {
          id: 2,
          name: "GitHub Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/NemisRuparel/Indian-Heritage-Narrator",
          position: "top-20 left-20",
        },      
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "E-Commerce Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "e-commerce website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
  "The Complete E-Commerce Website project is a full-featured online shopping platform designed to simulate a real-world digital store.",
  "It allows users to browse products, view detailed product pages, and manage items in a shopping cart for a seamless shopping experience.",
  "The platform focuses on creating a clean interface and smooth navigation so users can easily explore products and make purchase decisions.",
  "This project demonstrates practical web development skills including front-end design, dynamic product display, and interactive user features.",
  "It highlights how modern web technologies can be used to build responsive and user-friendly e-commerce platforms."
],
        },
        {
          id: 2,
          name: "GitHub Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/NemisRuparel/Complete-e-commerce-website",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 8,
      name: "NavIC",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-70",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "NavIC.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
  "The NavIC project focuses on understanding and demonstrating India's regional satellite navigation system developed by ISRO.",
  "NavIC (Navigation with Indian Constellation) is designed to provide accurate positioning and timing services across India and nearby regions.",
  "This project explores how satellite navigation systems work and highlights the technology behind India's indigenous alternative to global systems like GPS.",
  "It showcases concepts related to satellite communication, positioning systems, and real-world applications such as navigation, vehicle tracking, and disaster management.",
  "The project reflects an interest in space technology and demonstrates how modern navigation systems support critical infrastructure and everyday digital services."
],
        },
        {
          id: 2,
          name: "GitHub Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/NemisRuparel/Complete-e-commerce-website",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Chck Live",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://navic.vercel.app/",
          position: "top-50 right-40",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/image.png",
    },
  
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "A Dedicated Learner Building a Future in Technology 🎯",
      image: "/images/gal4.jpg",
description: [
  "My name is Nemis, and I am currently pursuing Computer Engineering. I have a strong interest in technology and enjoy learning how computers, software, and digital systems work. Exploring technical concepts and understanding their real-world applications always excites me. 💻",

  "I continuously try to improve my knowledge by studying regularly and practicing different types of problems. Solving MCQs and analyzing concepts deeply helps me strengthen my understanding and prepares me to handle challenging technical questions. 📚",

  "Along with technical subjects, I am also working on improving my communication and English skills so that I can express my ideas more clearly and confidently. I believe discipline, consistency, and curiosity are essential for growth. 🎯",

  "My goal is to build strong technical expertise in computer engineering and contribute meaningfully to the world of technology. With dedication, continuous learning, and the right mindset, I aim to create a successful future in the tech industry. 🚀"
],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "My Resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "My Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Error.png",
      icon: "/images/Error.png",
      kind: "file",
      fileType: "img",  
      position: "top-10 left-10",
      imageUrl: "/images/Error.png",
    },
    {
      id: 2,
      name: "Coffee.png",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0s2ObVImUToY337-gdPG2egyFbnKFZa4XtQ&s",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0s2ObVImUToY337-gdPG2egyFbnKFZa4XtQ&s",
    },
    {
      id: 3,
      name: "Screenshot_20304.png",
      icon: "images/Screenshot_20304.png",
      kind: "file",
      fileType: "img",
      position: "top-50 left-10",
      imageUrl: "images/Screenshot_20304.png",
    },
  ],
};



export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };