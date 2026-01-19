import style from "./page.module.css";

// Complete projects database
const projectsData = {
    android: {
        freefireModeMenu: {
            title: "Free Fire Mod Menu",
            desc: "Android mod menu for Free Fire with premium features",
            src: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png", "/p6.png", "/p7.png"],
            version: "1.23.03",
            features: ["Aimbot", "Wallhack", "Unlimited Diamonds", "Auto Headshot", "No Recoil", "Speed Hack", "Anti-Ban"],
            size: "85 MB",
            downloads: "2.4M",
            rating: 4.8,
            requirements: [
                "Android 7.0+",
                "2GB+ RAM",
                "Root Not Required",
                "500MB Free Space",
                "Active Internet Connection"
            ],
            safetyInfo: "This mod is 100% safe and tested. No viruses or malware. Regular updates ensure compatibility with the latest game version.",
            lastUpdated: "2 days ago",
            updateCycle: "30d",
            successRate: "99%",
            support: "24/7",
            developer: "ModX Team",
            category: "Android",
            tags: ["Free Fire", "Mod Menu", "Hack", "Android"],
            downloadLink: "https://download.example.com/freefire-mod.apk",
            tutorialVideo: "https://youtube.com/watch?v=example",
            changelog: [
                { version: "1.23.03", date: "2024-01-15", changes: ["Fixed crash issues", "Added new features"] },
                { version: "1.22.12", date: "2023-12-20", changes: ["Improved stability", "Bug fixes"] }
            ]
        },
        espHack: {
            title: "ESP Hack Pro",
            desc: "ESP based Android hack with radar system and wall penetration",
            src: ["/esp1.jpg", "/esp2.jpg", "/esp3.jpg"],
            version: "2.1.0",
            features: ["Enemy ESP", "Item ESP", "Distance Calculator", "Radar System", "No Fog"],
            size: "45 MB",
            downloads: "1.8M",
            rating: 4.6,
            requirements: [
                "Android 8.0+",
                "3GB+ RAM",
                "Root Not Required",
                "GPU Support"
            ],
            safetyInfo: "Tested on multiple devices. No data collection or personal information tracking.",
            lastUpdated: "1 week ago",
            updateCycle: "15d",
            successRate: "95%",
            support: "24/7",
            developer: "ESP Masters",
            category: "ESP Tool",
            tags: ["ESP", "Radar", "Visual Hack"],
            downloadLink: "https://download.example.com/esp-hack.apk",
            tutorialVideo: "https://youtube.com/watch?v=esp-tutorial"
        },
        autoClicker: {
            title: "Auto Clicker Pro",
            desc: "Advanced auto-clicker with gesture recording and macro support",
            src: ["/clicker1.png", "/clicker2.png"],
            version: "3.5.2",
            features: ["Gesture Recording", "Macro Support", "Timing Control", "Multi-touch", "Root Not Required"],
            size: "12 MB",
            downloads: "5.2M",
            rating: 4.9,
            requirements: [
                "Android 6.0+",
                "1GB RAM",
                "No Special Permissions"
            ],
            lastUpdated: "3 days ago",
            developer: "AutoTools Inc."
        }
    },
    windows: {
        gameTrainer: {
            title: "Universal Game Trainer",
            desc: "Windows game trainer with memory editing capabilities",
            src: ["/trainer1.png"],
            version: "4.0.1",
            features: ["Memory Editing", "Cheat Table", "Process Scanner", "Speed Hack"],
            size: "25 MB",
            downloads: "890K",
            rating: 4.7,
            requirements: [
                "Windows 10/11",
                "4GB RAM",
                "Admin Privileges"
            ],
            category: "PC Trainer",
            developer: "PC Mods Team"
        },
        botAssistant: {
            title: "AI Bot Assistant",
            desc: "Automated bot for various tasks and game assistance",
            src: ["/bot1.png"],
            version: "1.0.0",
            features: ["AI Integration", "Task Automation", "Pattern Recognition"],
            size: "150 MB",
            downloads: "320K",
            rating: 4.3
        }
    },
    ios: {
        jailbreakTool: {
            title: "Jailbreak Tool 2024",
            desc: "Latest iOS jailbreaking tool with Cydia integration",
            src: ["/jb1.png"],
            version: "15.0",
            features: ["Untethered Jailbreak", "Cydia Support", "Tweak Injection", "Safe Mode"],
            size: "65 MB",
            downloads: "1.2M",
            rating: 4.5,
            requirements: [
                "iOS 14-16",
                "Specific iPhone Models",
                "Computer Required"
            ]
        }
    }
};

// Helper function to get all project data dynamically
function getProjectData(category, projectId) {
    const categoryData = projectsData[category?.toLowerCase()];
    if (!categoryData) return null;

    return categoryData[projectId] || null;
}

// Helper function to get related projects
function getRelatedProjects(category, currentProjectId) {
    const categoryData = projectsData[category?.toLowerCase()];
    if (!categoryData) return [];

    return Object.entries(categoryData)
        .filter(([id]) => id !== currentProjectId)
        .slice(0, 3)
        .map(([id, data]) => ({ id, ...data }));
}

export default async function ProjectPage({ params, searchParams }) {
    const { id } = await params;
    const { projectName } = await searchParams;

    const project = getProjectData(id, projectName);
    const relatedProjects = getRelatedProjects(id, projectName);

    if (!project) {
        return (
            <section className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="text-center max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl">
                    <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-6">The requested project doesn't exist or has been removed.</p>
                    <a href="/" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                        Return Home
                    </a>
                </div>
            </section>
        );
    }

    console.log(project)

    return (
        <section className="min-h-screen w-full p-4 md:p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb & Header */}
                <div className="mb-8">
                    <nav className="text-sm text-gray-500 mb-4 flex items-center flex-wrap gap-2">
                        <a href="/" className="hover:text-blue-500 transition-colors flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Home
                        </a>
                        <span className="mx-1">/</span>
                        <a href={`/${id}`} className="hover:text-blue-500 transition-colors capitalize flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {id}
                        </a>
                        <span className="mx-1">/</span>
                        <span className="text-gray-700 font-medium truncate">{project.title}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                    {project.title}
                                </h1>
                                {project.category && (
                                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                                        {project.category}
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 text-lg max-w-3xl">{project.desc}</p>
                        </div>

                        {project.developer && (
                            <div className="flex items-center gap-2 text-gray-500">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-sm">By {project.developer}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Project Card */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    {/* Project Image */}
                                    <div className="relative group flex-shrink-0">
                                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                                        <img
                                            src={project?.src?.[0] || "/default.png"}
                                            className="relative w-48 h-48 rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-300 border-4 border-white"
                                            alt={project.title}
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="flex-1">
                                        {/* Version & Rating */}
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                                </svg>
                                                v{project.version || "1.0.0"}
                                            </div>

                                            {project.rating && (
                                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                className={`w-5 h-5 ${i < Math.floor(project.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span className="text-gray-700 font-semibold">{project.rating}</span>
                                                    {project.downloads && (
                                                        <span className="text-gray-500 text-sm">({project.downloads})</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Features */}
                                        {project.features && project.features.length > 0 && (
                                            <div className="mb-6">
                                                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Key Features</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.features.map((feature, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-200 border border-gray-200"
                                                        >
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Technical Details */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                            {project.size && (
                                                <div className="bg-gray-50 p-3 rounded-xl">
                                                    <div className="text-xs text-gray-500 mb-1">Size</div>
                                                    <div className="font-semibold text-gray-800">{project.size}</div>
                                                </div>
                                            )}
                                            {project.lastUpdated && (
                                                <div className="bg-gray-50 p-3 rounded-xl">
                                                    <div className="text-xs text-gray-500 mb-1">Updated</div>
                                                    <div className="font-semibold text-gray-800">{project.lastUpdated}</div>
                                                </div>
                                            )}
                                            {project.successRate && (
                                                <div className="bg-gray-50 p-3 rounded-xl">
                                                    <div className="text-xs text-gray-500 mb-1">Success Rate</div>
                                                    <div className="font-semibold text-green-600">{project.successRate}</div>
                                                </div>
                                            )}
                                            {project.support && (
                                                <div className="bg-gray-50 p-3 rounded-xl">
                                                    <div className="text-xs text-gray-500 mb-1">Support</div>
                                                    <div className="font-semibold text-purple-600">{project.support}</div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Download Button */}
                                        <button
                                            className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl shadow-lg"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative flex items-center justify-center gap-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                <span className="text-lg">Download Now</span>
                                                {project.size && (
                                                    <span className="text-sm opacity-80">({project.size})</span>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Screenshots Gallery */}
                        {project.src && project.src.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">Screenshots</h3>
                                    <span className="text-sm text-gray-500">{project.src.length} images</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {project.src.map((src, index) => (
                                        <div key={index} className="relative group cursor-pointer">
                                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                                                <img
                                                    src={src}
                                                    alt={`${project.title} - Screenshot ${index + 1}`}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Changelog */}
                        {project.changelog && (
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Changelog</h3>
                                <div className="space-y-4">
                                    {project.changelog.map((log, index) => (
                                        <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-semibold text-gray-800">Version {log.version}</span>
                                                <span className="text-sm text-gray-500">{log.date}</span>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                                {log.changes.map((change, idx) => (
                                                    <li key={idx} className="text-sm">{change}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Requirements */}
                        {project.requirements && project.requirements.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    System Requirements
                                </h3>
                                <ul className="space-y-3">
                                    {project.requirements.map((req, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Safety Info */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-6 border border-blue-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Safety Information
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {project.safetyInfo || "This software is tested and verified to be safe. Always download from trusted sources."}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Virus Total Verified
                            </div>
                        </div>

                        {/* Tags */}
                        {project.tags && project.tags.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tutorial Video */}
                        {project.tutorialVideo && (
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-xl p-6 border border-purple-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Video Tutorial
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">Learn how to install and use this software</p>
                                <button
                                    className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    </svg>
                                    Watch Tutorial
                                </button>
                            </div>
                        )}

                        {/* Related Projects */}
                        {relatedProjects.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Projects</h3>
                                <div className="space-y-4">
                                    {relatedProjects.map((related, index) => (
                                        <a
                                            key={index}
                                            href={`/project/${id}?projectName=${related.id}`}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                    {related.title}
                                                </h4>
                                                {related.rating && (
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <span className="text-yellow-500 text-sm">★</span>
                                                        <span className="text-xs text-gray-500">{related.rating}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quick Actions */}
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors flex items-center justify-between group">
                                    <span>Report Issue</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors flex items-center justify-between group">
                                    <span>Request Feature</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:opacity-90 transition-opacity font-semibold">
                                    Donate to Developer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center text-gray-500 text-sm">
                        <p>⚠️ Disclaimer: This software is for educational purposes only. Use at your own risk.</p>
                        <p className="mt-2">© {new Date().getFullYear()} ModHub. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}