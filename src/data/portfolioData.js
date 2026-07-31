const portfolio = {
    personal: {
        name: "Anshul Kumar",
        role: "AI & Java Full Stack Developer",

        tagline:
            "Building intelligent, scalable web applications with Java, Spring Boot, React, and Generative AI.",

        description:
            "Final-year BCA student passionate about AI Engineering, Full Stack Development, and creating real-world solutions using modern technologies. Experienced in building AI-powered applications with Spring AI, React, and Large Language Models.",

        image: "/profile.png",

        resume: "anshul-resume.pdf",

        about: {
            title: "About Me",

            description: `I'm a final-year BCA student with a strong interest in Artificial Intelligence,
Java Full Stack Development, and backend engineering. I enjoy building scalable
web applications using Java, Spring Boot, React, and modern databases while
integrating Large Language Models to solve real-world problems.

My projects include AI-powered applications such as a Job Application Tracker
with resume analysis, cover letter generation, and skill gap analysis, along
with a Spring AI RAG application for intelligent document question answering.
I'm continuously learning new technologies and enjoy transforming ideas into
practical, user-focused software solutions.`,

            stats: [
                {
                    number: "2+",
                    title: "Projects"
                },
                {
                    number: "10+",
                    title: "Technologies"
                },
                {
                    number: "Jan-2027",
                    title: "Graduation"
                }
            ],

            currentlyLearning: [
                "AI Agents",
                "Docker",
                "AWS"
            ]
        },
    },

    social: {
        github: "https://github.com/anshul1512t",
        linkedin: "https://www.linkedin.com/in/anshul-kumar-8a6150426/",
        email: "anshul1512t@gmail.com",
    },

    navLinks: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ],

    skills: [
        {
            category: "Frontend",
            items: [
                "React",
                "JavaScript",
                "Vite",
                "Tailwind CSS",
                "Axios",
                "React Router"
            ]
        },

        {
            category: "Backend",
            items: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "JWT Authentication",
                "REST APIs",
                "JPA / Hibernate"
            ]
        },

        {
            category: "AI / LLM",
            items: [
                "Spring AI",
                "RAG",
                "Prompt Engineering",
                "OpenRouter",
                "Ollama",
                "Vector Databases"
            ]
        },

        {
            category: "Database & Tools",
            items: [
                "MySQL",
                "PostgreSQL",
                "Git",
                "GitHub",
                "Postman",
                "VS Code"
            ]
        }
    ],

    projects: [
        {
            id: 1,

            featured: true,

            title: "AI Job Application Tracker",

            deploymentOffline: true,

            video:"",

            shortDescription:
                "An AI-powered platform for managing job applications with resume analysis, cover letter generation and skill gap analysis.",

            description:
                "A full-stack web application that helps job seekers organize applications while leveraging LLMs for resume feedback, cover letter generation and personalized skill recommendations.",

            tech: [
                "React",
                "Tailwind CSS",
                "Spring Boot",
                "Spring Security",
                "JWT",
                "MySQL",
                "Spring AI",
                "OpenRouter"
            ],

            features: [
                "JWT Authentication",
                "Protected Routes",
                "Job Application Dashboard",
                "CRUD Operations",
                "Resume Upload",
                "Resume History",
                "AI Resume Feedback",
                "AI Cover Letter Generator",
                "Skill Gap Analysis",
                "Search & Filter"
            ],

            githubFrontend:
                "https://github.com/anshul1512t/ai-job-application-tracker",

            githubBackend:
                "https://github.com/anshul1512t/ai-job-tracker-backend",

            live: ""
        },

        {
            id: 2,

            featured: true,

            title: "Spring AI RAG PDF Assistant",

            deploymentOffline: false,

            video: "/rag-project.mp4",

            shortDescription:
                "Retrieval-Augmented Generation demo that answers questions from uploaded PDF documents.",

            description:
                "A Spring AI based RAG application that extracts PDF content, generates embeddings, stores vectors in PostgreSQL with PGVector and answers user queries using semantic retrieval.",

            tech: [
                "Java",
                "Spring Boot",
                "Spring AI",
                "PGVector",
                "PostgreSQL",
                "Apache Tika",
                "PDF Reader",
                "Ollama"
            ],

            features: [
                "PDF Upload",
                "PDF Parsing",
                "Apache Tika Integration",
                "Document Chunking",
                "Embeddings",
                "Semantic Search",
                "Vector Storage",
                "Retrieval-Augmented Generation",
                "Local LLM using Ollama"
            ],

            githubFrontend: "https://github.com/anshul1512t/rag-basic-frontend",

            githubBackend:
                "https://github.com/anshul1512t/rag-basic-backend",

            live: ""
        }
    ],

    education: [
        {
            degree: "Secondary School (10th)",
            institute: "Govt. Co-Ed Senior Secondary School",
            year: "2020",
            marks: "72%"
        },
        {
            degree: "Higher Secondary (12th)",
            institute: "Govt. Co-Ed Senior Secondary School",
            year: "2022",
            marks: "72%"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institute: "GLA University, Mathura (UP)",
            year: "Jan 2024 - Jan 2027",
            marks: "Final Semester"
        }
    ],

    contact: {
        phone: "+91 9899182504",
        email: "anshul1512t@gmail.com",
        location: "Delhi, India"
    },

    social: {
        github: "https://github.com/anshul1512t",
        linkedin: "https://www.linkedin.com/in/anshul-kumar-8a6150426/",
        leetcode: "https://leetcode.com/u/Anshul12345689/",
        naukri: "https://www.naukri.com/mnjuser/profile?id=&altresid",
    }
};

export default portfolio;