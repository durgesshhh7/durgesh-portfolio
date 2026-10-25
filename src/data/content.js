

export const ph = (hint) => ({ ph: hint });

export const site = {
  brand: "Durgesh Rajpurohit",
  name: "Durgesh Rajpurohit",
  role: "Computer Science & Engineering student · AI specialization",
  intro:
    "I am studying Computer Science and Engineering with a specialization in Artificial Intelligence at GGSIPU, Delhi, alongside the IIT Madras BS Degree Programme in Data Science. My interests include artificial intelligence, machine learning, data science, geospatial technology, software development and research.",
  photo: "/images/durgesh.jpg",
  photoAlt: "Portrait of Durgesh Rajpurohit",
};

export const links = {
  github: "https://github.com/durgesshhh7",
  linkedin: "https://www.linkedin.com/in/durgesh-rajpurohit-4b9867382/",
  email: "mailto:durgeshrajpurohit685@gmail.com",
  resume: "/Durgesh_Rajpurohit_Resume.pdf",
  fiverr: null,
};

export const nav = [
  ["Projects", "projects"],
  ["Research", "research"],
  ["Experience", "experience"],
  ["Design & visuals", "design"],
  ["About", "about"],
];

export const about = {
  text:
    "I am pursuing Computer Science and Engineering with an AI specialization at Guru Gobind Singh Indraprastha University (GGSIPU), Delhi, and the BS Degree Programme in Data Science at IIT Madras. I enjoy combining software development, AI, data analysis and visual communication to explore practical problems through projects and research.",
};

export const skills = [
  {
    title: "Programming & web",
    items: ["C", "C++", "JavaScript", "React", "Vite", "CSS"],
  },
  {
    title: "AI & data",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "NLP / OCR",
    ],
  },
  {
    title: "Geospatial & research",
    items: [
      "Satellite imagery",
      "Geospatial data",
      "Data analysis",
      "Remote sensing",
    ],
  },
  {
    title: "Design & collaboration",
    items: [
      "Poster design",
      "Frontend development",
      "Team collaboration",
    ],
  },
];

const ongoing = { kind: "ongoing", label: "In Progress" };

export const projects = [
  {
    title: "MultiMind AI",
    text:
      "A Streamlit-based AI project exploring multi-perspective reasoning and intelligent debate. Developed collaboratively with a team, the project reached the finalist stage at Hacknovate.",
    image: "/images/multimind.png",
    imageAlt: "MultiMind AI project screenshot",
    status: { kind: "done", label: "Hackathon Finalist" },
    tags: ["AI", "Streamlit", "Team Project"],
    href: null,
  },
  {
    title: "Satellite-Based Maritime Intelligence",
    text:
      "A geospatial intelligence project combining satellite imagery and vessel-related data to explore oil-spill detection and maritime monitoring.",
    image: "/images/maritime-project.png",
    imageAlt: "Maritime intelligence project visual",
    status: ongoing,
    tags: [
      "Satellite Imagery",
      "Geospatial Analysis",
      "Vessel Correlation",
    ],
    href: null,
  },
  {
    title: "Git Bhu",
    text:
      "A geospatial land-record management project exploring multi-source parcel data integration, land-record history and traceable changes to land information.",
    image: "/images/git-bhu.png",
    imageAlt: "Git Bhu geospatial land-record project",
    status: ongoing,
    tags: ["GIS", "Land Records", "Geospatial Data"],
    href: null,
  },
  {
    title: "AI-Based Land-Cover Recognition",
    text:
      "Exploring AI-based image analysis to identify and classify land-cover categories from imagery.",
    image: null,
    imageAlt: "",
    tags: ["AI", "Image Analysis"],
    href: null,
  },
  {
    title: "Career Website",
    text:
      "A React-based website concept focused on career information, job discovery and entry-level opportunities, built with Vite, Framer Motion and CSS.",
    image: null,
    imageAlt: "",
    status: ongoing,
    tags: ["React", "Vite", "Framer Motion", "CSS"],
    href: null,
  },
];

export const research = [
  {
    title: "AI Bias and Fairness",
    meta: "Published Research Paper",
    text:
      "Completed and published research examining bias and fairness in artificial intelligence. The work explores the importance of identifying algorithmic bias and promoting fairer, more responsible AI systems.",
    image: "/images/research-paper.png",
    imageAlt: "Published research paper on AI bias and fairness",
    status: { kind: "done", label: "Published" },
    tags: ["AI Ethics", "Algorithmic Bias", "Fairness"],
    href: null,
  },
  {
    title: "Rare Earth Elements Research",
    meta: "Ongoing Research",
    text:
      "Investigating rare earth elements, their properties and applications, and their role in modern technologies. The research is ongoing, with further work focused on developing a deeper understanding of the subject.",
    image: null,
    imageAlt: "",
    status: ongoing,
    tags: ["Materials Research", "Rare Earth Elements", "Technology"],
    href: null,
  },
  {
    title: "SAR & Sentinel Satellite Imagery",
    meta: "Remote Sensing · Ongoing Research",
    text:
      "Exploring Synthetic Aperture Radar (SAR) and Sentinel satellite data for Earth observation and geospatial analysis, with an interest in potential AI-driven applications.",
    image: null,
    imageAlt: "",
    status: ongoing,
    tags: ["SAR", "Sentinel Satellites", "Remote Sensing", "AI"],
    href: null,
  },
  {
    title: "eRTMAC-NWIS",
    meta: "AI / NLP / OCR · Research Project",
    text:
      "Exploring the use of AI, natural language processing and optical character recognition with historical drilling reports, nearby-well intelligence, geospatial mapping and predictive drilling-risk analysis.",
    image: null,
    imageAlt: "",
    status: ongoing,
    tags: ["AI", "NLP", "OCR", "Geospatial Data"],
    href: null,
  },
  {
    title: "Quantum-Inspired Route Optimization",
    meta: "Optimization · Research Exploration",
    text:
      "Investigating quantum-inspired optimization approaches for vehicle-routing and shortest-path problems under varying traffic conditions.",
    image: null,
    imageAlt: "",
    status: ongoing,
    tags: ["Optimization", "Routing", "Traffic Conditions"],
    href: null,
  },
];

export const professional = [
  {
    title: "Website & Database Development",
    meta: "Business Website and Database Work",
    text:
      "Experience working on website development and database management, with a focus on practical digital solutions and organizing business information.",
    image: null,
    imageAlt: "",
    tags: ["Web Development", "Database Management"],
    href: null,
  },
  {
    title: "Freelance Services",
    meta: "Fiverr",
    text:
      "Freelance work and services presented through my Fiverr profile, showcasing my interest in delivering digital solutions and developing practical skills through client-oriented work.",
    image: "/images/fiverr-profile.png",
    imageAlt: "Fiverr freelancer profile screenshot",
    tags: ["Freelancing", "Digital Services"],
    href: "fiverr",
  },
];

export const leadership = [
  {
    title: "Class Representative",
    meta: "About One Year · Continuing",
    text:
      "Representing classmates, communicating student concerns and helping share important academic information.",
    status: { kind: "ongoing", label: "Ongoing" },
  },
  {
    title: "Core Member · College Fest Web Team",
    meta: "HMRITM",
    text:
      "Contributing to the college fest web team and supporting digital activities associated with college events.",
  },
  {
    title: "College Event Design",
    meta: "Posters and Event Creatives",
    text:
      "Creating visual materials for college events, including fest posters, festival creatives and other event-related designs.",
  },
  {
    title: "Educational Field Trip",
    meta: "Yakult Factory · Sonipat",
    text:
      "Participating in the coordination of an educational industrial visit to the Yakult factory in Sonipat.",
  },
];

export const gallery = [
  { label: "Emblazon 2K26 · Poster", image: "/images/emblazon-1.png" },
  { label: "Emblazon 2K26 · Poster", image: "/images/emblazon-2.png" },
  { label: "Diwali · Event Poster", image: "/images/diwali.png" },
  { label: "College Event · Design", image: "/images/template.png" },
  { label: "Event ID Card Design", image: "/images/id-card.png" },
  { label: "NRC Global · Website Visual", image: "/images/nrc-global.png" },
  { label: "Research / Technical Visual", image: "/images/research-hal.png" },
];

export const education = [
  {
    title: "Guru Gobind Singh Indraprastha University (GGSIPU), Delhi",
    meta: "Computer Science and Engineering · AI Specialization",
    text: "Currently pursuing BTech.",
  },
  {
    title: "IIT Madras",
    meta: "BS Degree Programme in Data Science",
    text: "Currently pursuing the degree programme.",
  },
];

