import type { ContactChannel, ExperienceItem, HexBadge, LanguageBadge, Project, Skill, Stat } from "../types/portfolio";

export const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"] as const;

export const HERO_PHRASES = ["React / Node.js", "Python / Flask", "C# / .NET", "SQL / MongoDB", "Cloud Native"] as const;

export const STATS: Stat[] = [
    { label: "YEARS EXP", value: "6+" },
    { label: "PROJECTS", value: "13+" },
    { label: "LANGUAGES", value: "9+" },
];

export const HERO_HEX_BADGES: HexBadge[] = [
    { label: "#00F5FF", top: "5%", right: "-5%", color: "#00f5ff" },
    { label: "#00FF88", bottom: "10%", left: "-8%", color: "#00ff88" },
    { label: "#8B00FF", top: "60%", right: "-10%", color: "#8b00ff" },
];

export const ORBIT_COLORS = ["#00f5ff", "#00ff88", "#8b00ff", "#ff0080"] as const;

export const SKILLS: Skill[] = [
    { name: "React / Next.js", level: 88, hex: "#61DAFB", category: "Frontend" },
    { name: "Angular", level: 48, hex: "#f3311f", category: "Frontend" },
    { name: "Three.js", level: 58, hex: "#a5e044", category: "Frontend" },
    { name: "HTML", level: 93, hex: "#30c287", category: "Frontend" },
    { name: "Node.js / Express / Nest.js", level: 92, hex: "#68D391", category: "Backend" },
    { name: "ElectronJs", level: 92, hex: "#5888e8", category: "Backend" },
    { name: "Capacitor", level: 85, hex: "#e86f58", category: "Backend" },
    { name: "TypeScript", level: 90, hex: "#3178C6", category: "Frontend" },
    { name: "Python", level: 80, hex: "#FFD43B", category: "Backend" },
    { name: "C# / .NET", level: 55, hex: "#9B59B6", category: "Backend" },
    { name: "PostgreSQL", level: 87, hex: "#336791", category: "Database" },
    { name: "MSSQL", level: 82, hex: "#CC2927", category: "Database" },
    { name: "MYSQL", level: 85, hex: "#ccb527", category: "Database" },
    { name: "MariaDB", level: 90, hex: "#a1ff96", category: "Database" },
    { name: "MongoDB", level: 93, hex: "#47A248", category: "Database" },
    { name: "Docker / K8s", level: 78, hex: "#2496ED", category: "DevOps" },
    { name: "AWS / Azure / DigitalOcean", level: 75, hex: "#FF9900", category: "DevOps" },
    { name: "CloudFlare", level: 85, hex: "#aa9600", category: "DevOps" },
    { name: "Github Version Control", level: 98, hex: "#fffdf1", category: "DevOps" },
];

export const LANGUAGES: LanguageBadge[] = [
    { lang: "JavaScript", hex: "#F7DF1E", icon: "JS" },
    { lang: "JSON Web Token", hex: "#fbed79", icon: "JWT" },
    { lang: "Bash", hex: "#4EAA25", icon: "SH" },
    { lang: "Git", hex: "#fa771d", icon: "GIT" },
    { lang: "YAML/JSON", hex: "#8a1fcd", icon: "YJ" },
    { lang: "Linux", hex: "#e7a1a1", icon: "LNX" },
    { lang: "Windows", hex: "#0d7fca", icon: "WIN" },
    { lang: "Windows Server", hex: "#0d7fca", icon: "MWS" },
    { lang: "Windows Subsystem for Linux", hex: "#1f64e8", icon: "WSL" },
    { lang: "WebSocket", hex: "#5feb78", icon: "WS" },
    { lang: "WebHook", hex: "#d62139", icon: "WH" },
    { lang: ".\\MORE_INFO.BIN", hex: "#ffe2e6", icon: "AI" },
];

export const PROJECTS: Project[] = [
    {
        title: "QueueStation",
        description:
            "designed to manage queues for various institutions including medical facilities and other organizations that require queue tracking and control.",
        tech: [
            "Node.js",
            "Express.js",
            "Electron.js",
            "Capacitor",
            "Socket.io",
            "React",
            "MariaDB",
            "MongoDB",
            "RaspberryPI",
            "OrangePI",
            "Python",
            "RPI/GPIO",
            "...",
        ],
        hex: "#00f5ff",
        status: "PRODUCTION",
    },
    {
        title: "EasyAccess",
        description:
            "manages the access and denial of entry for employees or clients within an organization. It includes a control application and specific devices such as turnstiles or standalone card readers.",
        tech: ["React", "MariaDB", "MongoDB", "Node.js", "Express.js", "Socket.io", "..."],
        hex: "#00ff88",
        status: "PRODUCTION",
    },
    {
        title: "EasyPark",
        description:
            "consists of an internal management application and entry/exit devices. The application can control entrance and exit devices individually and allows the registration of multiple devices within the system, their real-time configuration, individual pricing logic for each exit device, and management of customer/employee access to the parking area.",
        tech: ["Express.js", "Node.js", "Nest.js", "MariaDB", "MongoDB", "Python", "RaspberryPI", "RPI/GPIO", "..."],
        hex: "#8b00ff",
        status: "PRODUCTION",
    },
    {
        title: "Plastic Card Design Builder",
        description:
            "card design builder application was developed by me for LSC. In addition to managing certain access control systems, the company also assembles plastic cards. This application allows the creation of card layouts based on standard sizes and supports adding elements such as text, photos, barcodes, and QR codes. These features can be either static or dynamic.",
        tech: ["React.js", "Node.js", "Express.js", "MariaDB", "..."],
        hex: "#ff0080",
        status: "PRODUCTION",
    },
    {
        title: "Interview Guide",
        description:
            "The application is built with Electron. Its primary purpose is to listen to the interviewer, analyze their questions, and provide competent answers. The application uses a local AI model, with its main advantage being extremely fast response times. I have solved the optimization challenges so that the application can process a question and generate a response in less than one second from the moment the question is asked.   Additional features include real-time transcription of the spoken conversation and translation of the transcribed text into Georgian.",
        tech: ["Electron.js", "React", "Node.js", "Transformers.js", "..."],
        hex: "#db174e",
        status: "PRODUCTION",
    },
    {
        title: "Plastic Card Printing Web-Application",
        description:
            "The application was developed specifically for a company that manufactures and prints plastic cards. Its primary purpose is to create virtual replicas of cards with precise dimensions, dynamically assign a barcode and unique identifier to each card, send the replica to the printer, and print the cards.",
        tech: ["React.Js", "Node.js", "Express.js", "..."],
        hex: "#2647f3",
        status: "PRODUCTION",
    },
    {
        title: "Device Tester",
        description:
            "built using Electron (Vite + React) technology and was specifically developed for the company. It has the capability to create servers on available ports and establish a communication network with devices that support WebSocket technology.",
        tech: ["React.js", "Node.js", "Electron.js", "..."],
        hex: "#ef8310",
        status: "PRODUCTION",
    },
    {
        title: "Package Requesting Application",
        description:
            "The application was developed for Linex, a package delivery and logistics company, and is intended for its customers. The package pickup application was developed for Android using Capacitor. Customers can use their unique code to request and collect their packages. One of the application’s key advantages is its queue management functionality, which helps efficiently regulate and organize the customer flow.",
        tech: ["Capacitor", "React", "Node.js", "Express.js", "MariaDB", "..."],
        hex: "#fa3636",
        status: "PRODUCTION",
    },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Full-Stack Engineer",
        company: "Logical Systems Company",
        period: "2021 - 2025",
        desc: "At LSC, my work in web technologies spans multiple areas; however, I primarily develop software applications using JavaScript, ReactJS, NextJS, NodeJS, MySQL, MariaDB, MongoDB, and ElectronJS.",
        hex: "#00f5ff",
    },
    {
        role: "Javascript/ReactJs Lecturer",
        company: "Geolab",
        period: "2024 - 2025",
        desc: "At Geolab, my primary responsibility was teaching the fundamentals of JavaScript and React.js.",
        hex: "#00ff88",
    },
    {
        role: "Web-Technologies Lecturer",
        company: "Information Technology Academy (ITVET)",
        period: "2023 - 2024",
        desc: "At the Information Technology Academy (ITVET), my primary responsibility involved delivering lectures, where I explained the general aspects of web technologies and taught various fields of programming such as WordPress, AngularJS, JavaScript, CSS, HTML, and Bootstrap.",
        hex: "#8b00ff",
    },
    {
        role: "Web Developer",
        company: "Freelancer.com",
        period: "2020 - 2023",
        desc: "On Freelancer.com, my work focused on web development, specifically on orders based on WordPress/JavaScript/CSS/HTML. I created both static and dynamic websites, as well as customized WordPress templates.",
        hex: "#f32467",
    },
    {
        role: "Information Technologies Specialist",
        company: "ITPro",
        period: "2020 - 2022",
        desc: "At IT Pro, my role covered technical aspects of computer science, including operating system installation, software setup, network diagnostics, network setup, and installation of routers/modems/access points. I was also responsible for diagnosing personal computers and replacing/repairing damaged components.",
        hex: "#ffdb10",
    },
    {
        role: "Information Technologies Specialist, ASP .NET Developer, C# Form Apps Developer",
        company: "Georgian Aviation University",
        period: "2020 - 2022",
        desc: "Georgian Aviation University was not only my workplace but also the institution where I studied. My profession encompassed multiple areas—from IT technician duties to both web and desktop development.",
        hex: "#68a3ff",
    },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
    { label: "EMAIL", value: "i.natroshvili@ssu.edu.ge", hex: "#00f5ff" },
    { label: "GITHUB", value: "github.com/natroshviliio", hex: "#00ff88" },
    { label: "LINKEDIN", value: "linkedin.com/in/natroshviliio/", hex: "#0088ff" },
    { label: "LOCATION", value: "Remote / Hybrid / Global", hex: "#8b00ff" },
];
