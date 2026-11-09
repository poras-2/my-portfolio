export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: "Completed" | "Ongoing" | "In Development";
  statusNote?: string;
  githubUrl?: string | null;
  demoUrl?: string | null;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    badgeColor?: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  status: string;
  description: string;
  verificationAvailable: boolean;
  certificateUrl?: string;
  skills?: string[];
  recipientName?: string;
  credentialType?: string;
  verificationNote?: string;
}

export interface ResearchInterestItem {
  title: string;
  description: string;
  focusAreas: string[];
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Poras",
    title: "Computer Science Engineering Student | Aspiring Cybersecurity Researcher",
    typingTitles: [
      "Computer Science Engineering Student",
      "Aspiring Cybersecurity Researcher",
      "Systems & Linux Security Enthusiast",
      "Problem Solver & C++ Programmer",
    ],
    institution: "BK Birla Institute of Engineering and Technology (BKBIET), Pilani",
    currentYear: "Second Year",
    cgpa: "8.01 / 10",
    location: "Pilani, Rajasthan, India",
    email: "porasjhajhria2@gmail.com",
    phone: "+91 6367298733",
    githubUrl: "https://github.com/poras-2",
    linkedinUrl: "https://www.linkedin.com/in/poras-900323392/",
    resumePath: "/Poras_Resume.pdf",
    heroIntro:
      "I'm a Computer Science Engineering student passionate about technology, cybersecurity, software development, and understanding how digital systems work. I enjoy exploring new technologies, building software projects, and continuously improving my technical skills.",
    aboutBio:
      "I am a second-year Computer Science Engineering student at BK Birla Institute of Engineering and Technology, Pilani, with a CGPA of 8.01. My current technical interests include cybersecurity, network security, Linux systems, programming, and secure software development. I have experience exploring AI-assisted web development through personal website projects. I am currently strengthening my programming and computer science fundamentals while exploring the field of cybersecurity research. My long-term goal is to develop strong technical and research skills and contribute to solving real-world security challenges.",
  },

  quickFacts: [
    { label: "Degree", value: "B.Tech CSE" },
    { label: "Current Year", value: "Second Year" },
    { label: "CGPA", value: "8.01 / 10" },
    { label: "Institution", value: "BKBIET Pilani" },
    { label: "Location", value: "Rajasthan, India" },
  ],

  skillCategories: [
    {
      title: "Programming",
      iconName: "Code2",
      description: "Core languages used for problem solving and software foundations.",
      skills: [
        { name: "C++", level: "Intermediate", badgeColor: "blue" },
        { name: "Python", level: "Beginner", badgeColor: "cyan" },
        { name: "C", level: "Basic Fundamentals", badgeColor: "slate" },
      ],
    },
    {
      title: "Operating Systems & Environments",
      iconName: "Terminal",
      description: "System administration and terminal-based navigation.",
      skills: [
        { name: "Linux", level: "Basic Practical Knowledge", badgeColor: "blue" },
        { name: "Ubuntu", level: "Primary Distro", badgeColor: "cyan" },
        { name: "Command Line / Shell", level: "Daily Workflow", badgeColor: "slate" },
      ],
    },
    {
      title: "Cybersecurity (Foundations & Exploration)",
      iconName: "ShieldAlert",
      description: "Active academic study and practical exploration of digital defense.",
      skills: [
        { name: "Cybersecurity Fundamentals", level: "Beginner", badgeColor: "cyan" },
        { name: "Network Security", level: "Active Study & Interest", badgeColor: "blue" },
        { name: "Vulnerability Analysis", level: "Active Exploration", badgeColor: "slate" },
        { name: "Secure Software Development", level: "Foundations & Interest", badgeColor: "blue" },
      ],
    },
    {
      title: "Development & Tooling",
      iconName: "Cpu",
      description: "Version control, code management, and modern developer workflows.",
      skills: [
        { name: "Git", level: "Version Control", badgeColor: "blue" },
        { name: "GitHub", level: "Collaboration & Repos", badgeColor: "cyan" },
        { name: "AI-Assisted Tools", level: "Enhanced Productivity", badgeColor: "slate" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "food-ordering-web",
      title: "Food Ordering Website",
      category: "Web Application",
      description:
        "An AI-assisted web development project focused on building an intuitive food ordering website with menu exploration, item configuration, and streamlined ordering flows.",
      highlights: [
        "Web application development & architecture",
        "Structured, responsive application layout",
        "User-facing ordering functionality & workflow",
        "Hands-on experience with AI-assisted software construction",
      ],
      technologies: ["React / Web Tech", "JavaScript", "Responsive UI", "AI-Assisted Development"],
      status: "Completed",
      githubUrl: null,
    },
    {
      id: "merchandise-ecommerce",
      title: "Merchandise E-Commerce Website",
      category: "E-Commerce Web Application",
      description:
        "An AI-assisted e-commerce website development project designed for product browsing, brand merchandise presentation, and interactive shopping experiences.",
      highlights: [
        "Product browsing and structured presentation",
        "Interactive shopping workflow and cart states",
        "Frontend component development",
        "Software development utilizing AI-assisted developer tools",
      ],
      technologies: ["Frontend Architecture", "UI Components", "State Handling", "AI-Assisted Tooling"],
      status: "Completed",
      githubUrl: null,
    },
    {
      id: "voyagehack-4",
      title: "VOYAGEHACK 4.0",
      category: "Hackathon Participation",
      description:
        "Currently participating in the VOYAGEHACK 4.0 hackathon, applying computer science concepts and rapid problem solving to real-world technical prompts.",
      highlights: [
        "Active Hackathon Participation",
        "Technical problem-solving under time constraints",
        "Collaborative software engineering",
      ],
      technologies: ["Hackathon Project", "Technical Problem Solving", "Software Engineering"],
      status: "Ongoing",
      statusNote: "Project details to be updated after completion",
      githubUrl: null,
    },
  ] as ProjectItem[],

  certifications: [
    {
      id: "bkbiet-c-python-internship",
      title: "15 Days Internship on C & Python Programming",
      organization: "B.K. Birla Institute of Engineering & Technology, Pilani",
      date: "06–18 July 2026",
      status: "Verified Credential",
      recipientName: "Poras (Roll no: 25EBKCS080, Branch: CS)",
      credentialType: "Institutional Technical Internship",
      description:
        "15-day intensive technical internship focused on core C and Python programming fundamentals, algorithm implementation, structured problem solving, and software modularization organized at BKBIET Pilani.",
      skills: ["C Programming", "Python", "Data Structures", "Modular Design"],
      verificationAvailable: true,
      certificateUrl: "/certificates/BKBIET_C_Python_Internship_Certificate.pdf",
      verificationNote:
        "Verified Institutional Certificate signed by Coordinator/TPO Mr. Reetesh Gautam, Principal Prof. A K Sharma, and Director Prof. B K Rout.",
    },
    {
      id: "ai-for-techies-python-workshop",
      title: "Python Using AI Workshop",
      organization: "AI FOR TECHIES",
      date: "June 7th, 2026",
      status: "Verified Credential",
      recipientName: "Poras",
      credentialType: "Technical Workshop Certificate",
      description:
        "Hands-on workshop on leveraging AI for rapid Python development, interactive data visualization generation in minutes, and AI-accelerated code debugging.",
      skills: ["Python", "AI-Assisted Coding", "Data Visualizations", "AI Code Debugging"],
      verificationAvailable: true,
      certificateUrl: "/certificates/AI_For_Techies_Python_AI_Certificate.pdf",
      verificationNote:
        "Conducted and verified by AI FOR TECHIES, signed by Aditya Kachave. Features official digital verification QR code.",
    },
    {
      id: "be10x-ai-tools-claude-workshop",
      title: "AI Tools & Claude Workshop",
      organization: "be10x",
      date: "June 21st, 2026",
      status: "Verified Credential",
      recipientName: "Poras",
      credentialType: "AI Engineering & Productivity Workshop",
      description:
        "Certificate of completion for mastering advanced AI tools and Claude workflows: coding and debugging using AI in under 10 minutes, rapid data analysis, and professional presentations.",
      skills: ["Claude AI", "AI Productivity Tools", "Rapid Code & Debug", "AI Data Analysis"],
      verificationAvailable: true,
      certificateUrl: "/certificates/be10x_AI_Tools_Claude_Certificate.pdf",
      verificationNote:
        "Verified certification issued by be10x, co-signed by Aditya Goenka and Aditya Kachave with official QR code verification.",
    },
  ] as CertificationItem[],

  education: {
    degree: "Bachelor of Technology (B.Tech) – Computer Science Engineering",
    institution: "BK Birla Institute of Engineering and Technology (BKBIET), Pilani",
    currentYear: "Second Year (Sophomore)",
    cgpa: "8.01 / 10",
    expectedGraduation: "To be updated",
    location: "Pilani, Rajasthan, India",
    relevantCoursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming in C++",
      "Operating Systems Concepts",
      "Computer Networks Fundamentals",
      "Computer Organization and Architecture",
      "Database Management Systems",
    ],
  },

  researchInterests: [
    {
      title: "Cybersecurity Research",
      description:
        "Understanding emerging attack surfaces, threat modeling methodologies, and defensive mechanisms across distributed systems.",
      focusAreas: ["Threat Modeling", "Adversarial Tactics", "Defense-in-Depth"],
      icon: "Shield",
    },
    {
      title: "Network Security",
      description:
        "Exploring TCP/IP packet transmission, network protocol security, firewall rules, and detection of malicious traffic.",
      focusAreas: ["Packet Analysis", "Protocol Integrity", "Traffic Inspection"],
      icon: "Network",
    },
    {
      title: "Vulnerability Analysis",
      description:
        "Investigating static/dynamic vulnerability discovery, memory safety principles, common CVE patterns, and remediation strategies.",
      focusAreas: ["Memory Safety", "Common Weakness Enumeration", "Static Analysis"],
      icon: "Bug",
    },
    {
      title: "Linux Systems",
      description:
        "Deepening practical knowledge of the Linux environment, process hierarchies, file permissions, shell automation, and kernel security models.",
      focusAreas: ["POSIX Standards", "File System Permissions", "Process Isolation"],
      icon: "Terminal",
    },
    {
      title: "Secure Software Development",
      description:
        "Building resilient software by applying defensive programming practices, input validation, cryptographic primitives, and secure coding standards.",
      focusAreas: ["Input Sanitization", "Least Privilege", "Secure Design Patterns"],
      icon: "Lock",
    },
    {
      title: "Computer Systems",
      description:
        "Studying the interaction between hardware and software, CPU architecture, memory management, and system-level performance bottlenecks.",
      focusAreas: ["Memory Management", "System Calls", "Hardware-Software Interface"],
      icon: "Cpu",
    },
  ] as ResearchInterestItem[],
};
