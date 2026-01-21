const projectsData = {

    android: {
        freefireModeMenu: {
            title: "Free Fire Mod Menu",
            desc: "Advanced Android mod menu for Free Fire with premium features and anti-ban protection",
            src: ["/p7.png", "p1.png", "/p4.png", "/p5.png", "/p6.png", "/p2.png", "/p3.png"],
            version: "1.23.03",
            features: ["Aimbot", "Wallhack", "Unlimited Diamonds", "Auto Headshot", "No Recoil", "Speed Hack", "Anti-Ban"],
            size: "85 MB",
            downloads: "2.4M",
            rating: 4.8,
            requirements: ["Android 7.0+", "2GB+ RAM", "Root Not Required"],
            lastUpdated: "2 days ago",
            developer: "ModX Team",
            category: "Android",
            tags: ["Free Fire", "Android", "Gaming", "Mod"],
            downloadLink: "#",
            tutorialVideo: "#",
            featured: true,
            status: "Active",
            releaseDate: "2024-01-15"
        },
        
        espHack: {
            title: "ESP Hack Pro",
            desc: "ESP based Android hack with radar system and wall penetration",
            src: ["/projects/esp/1.jpg"],
            version: "2.1.0",
            features: ["Enemy ESP", "Item ESP", "Distance Calculator", "Radar System", "No Fog"],
            size: "45 MB",
            downloads: "1.8M",
            rating: 4.6,
            developer: "ESP Masters",
            featured: true,
            status: "Active"
        },
        autoClicker: {
            title: "Auto Clicker Pro",
            desc: "Advanced auto-clicker with gesture recording and macro support",
            src: ["/projects/clicker/1.png"],
            version: "3.5.2",
            features: ["Gesture Recording", "Macro Support", "Timing Control", "Multi-touch"],
            size: "12 MB",
            downloads: "5.2M",
            rating: 4.9,
            developer: "AutoTools Inc.",
            status: "Active"
        }
    },
    web: {
        portfolio: {
            title: "Modern Portfolio",
            desc: "Beautiful responsive portfolio website built with Next.js and Tailwind CSS",
            src: ["/projects/portfolio/1.png", "/projects/portfolio/2.png"],
            version: "2.0.0",
            features: ["Responsive Design", "Dark Mode", "SEO Optimized", "Fast Loading"],
            github: "https://github.com/username/portfolio",
            liveDemo: "https://portfolio.example.com",
            tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
            featured: true,
            status: "Live"
        },
        ecommerce: {
            title: "E-Commerce Platform",
            desc: "Full-featured e-commerce solution with admin dashboard",
            src: ["/projects/ecommerce/1.png"],
            features: ["Product Management", "Shopping Cart", "Payment Gateway", "User Authentication"],
            tech: ["MERN Stack", "Stripe", "Redux", "JWT"],
            github: "https://github.com/username/ecommerce",
            status: "In Development"
        },
        dashboard: {
            title: "Analytics Dashboard",
            desc: "Real-time analytics dashboard with interactive charts",
            src: ["/projects/dashboard/1.png"],
            features: ["Real-time Data", "Interactive Charts", "User Management", "Export Data"],
            tech: ["React", "Chart.js", "Node.js", "MongoDB"],
            liveDemo: "https://dashboard.example.com",
            status: "Live"
        }
    },
    ios: {
        jailbreakTool: {
            title: "Jailbreak Tool 2024",
            desc: "Latest iOS jailbreaking tool with Cydia integration and tweak support",
            src: ["/projects/jailbreak/1.png"],
            version: "15.0",
            features: ["Untethered Jailbreak", "Cydia Support", "Tweak Injection", "Safe Mode"],
            size: "65 MB",
            downloads: "1.2M",
            rating: 4.5,
            requirements: ["iOS 14-16", "Computer Required"],
            status: "Active",
            featured: true
        },
        tweakStore: {
            title: "Tweak Store",
            desc: "Centralized repository for iOS tweaks and modifications",
            src: ["/projects/tweakstore/1.png"],
            features: ["Tweak Browser", "One-click Install", "Update Notifications", "Community Reviews"],
            status: "Active"
        }
    },
    desktop: {
        gameTrainer: {
            title: "Universal Game Trainer",
            desc: "Windows game trainer with memory editing capabilities",
            src: ["/projects/trainer/1.png"],
            version: "4.0.1",
            features: ["Memory Editing", "Cheat Table", "Process Scanner", "Speed Hack"],
            size: "25 MB",
            downloads: "890K",
            rating: 4.7,
            requirements: ["Windows 10/11", "Admin Privileges"],
            status: "Active",
            featured: true
        },
        fileOrganizer: {
            title: "Smart File Organizer",
            desc: "Automated file organization tool with AI categorization",
            src: ["/projects/organizer/1.png"],
            features: ["AI Categorization", "Batch Processing", "Custom Rules", "Duplicate Finder"],
            github: "https://github.com/username/file-organizer",
            status: "Open Source"
        }
    }
};

// Helper functions
export const getProjectData = (category, projectId) => {
    const categoryData = projectsData[category?.toLowerCase()];
    return categoryData ? categoryData[projectId] : null;
};

export const getCategoryProjects = (category) => {
    const categoryData = projectsData[category?.toLowerCase()];
    if (!categoryData) return [];
    
    return Object.entries(categoryData).map(([id, data]) => ({
        id,
        category: category.toLowerCase(),
        ...data
    }));
};

export const getAllProjects = () => {
    const allProjects = [];
    Object.keys(projectsData).forEach(category => {
        const categoryProjects = getCategoryProjects(category);
        allProjects.push(...categoryProjects);
    });
    return allProjects;
};

export const getFeaturedProjects = () => {
    return getAllProjects().filter(project => project.featured);
};

export const getCategories = () => {
    return Object.keys(projectsData);
};

export default projectsData;