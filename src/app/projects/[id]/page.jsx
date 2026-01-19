import style from "./page.module.css";

const projectsData = {
    android: {
        freefireModeMenu: {
            title: "Free Fire Mod Menu",
            desc: "Advanced Android mod menu for Free Fire with premium features and anti-ban protection",
            src: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png", "/p6.png", "/p7.png"],
            version: "1.23.03",
            features: ["Aimbot", "Wallhack", "Unlimited Diamonds", "Auto Headshot", "No Recoil", "Speed Hack", "Anti-Ban"],
            size: "85 MB",
            downloads: "2.4M",
            rating: 4.8,
            developer: {
                name: "Shivam Yadav",
                role: "Lead Developer & Security Expert",
                experience: "3+ Years",
                email: "shivamyadav12345@gmail.com",
                location: "India",
                skills: ["Android Development", "Reverse Engineering", "Game Hacking", "Security Analysis"],
                social: {
                    github: "https://github.com/abbhi1a2n3u-tech",
                    twitter: "https://twitter.com/abbhi1a2n3u_tech",
                    linkedin: "https://linkedin.com/in/shivam-yadav-2626aa338"
                }
            },
            technologies: {
                programmingLanguages: ["Java", "C++", "C", "Kotlin"],
                frameworks: ["Android SDK", "NDK", "OpenGL ES"],
                tools: ["Android Studio", "IDA Pro", "Frida", "Apktool", "JADX"],
                libraries: ["LibGDX", "Unity (for UI)", "Native Development Kit"]
            },
            buildInfo: {
                architecture: "ARMv7, ARM64",
                minSdk: 24,
                targetSdk: 33,
                buildTools: "33.0.0",
                compilation: "AOT (Ahead-of-Time)",
                obfuscation: "ProGuard + Custom Obfuscation",
                signature: "Custom Signing Certificate",
                security: ["Root Detection", "Tamper Protection", "Anti-Debug", "Code Obfuscation"]
            },
            requirements: [
                "Android 7.0+ (API 24)",
                "2GB+ RAM",
                "500MB Free Storage",
                "Root Not Required",
                "Active Internet Connection",
                "OpenGL ES 3.0+"
            ],
            safetyInfo: "This mod is 100% safe and tested. No viruses, malware, or data collection. Regular security audits ensure maximum protection.",
            lastUpdated: "2 days ago",
            updateCycle: "30d",
            successRate: "99%",
            support: "24/7",
            category: "Android Game Mod",
            tags: ["Free Fire", "Mod Menu", "Game Hack", "Android", "Premium"],
            downloadLink: "#",
            tutorialVideo: "#",
            changelog: [
                { version: "1.23.03", date: "2024-01-15", changes: ["Fixed crash issues", "Added new anti-ban system", "Improved performance by 40%"] },
                { version: "1.22.12", date: "2023-12-20", changes: ["Improved stability", "Bug fixes", "Added new features"] }
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
            developer: {
                name: "ESP Masters Team",
                role: "Game Hacking Specialists",
                experience: "2+ Years",
                skills: ["Game Hacking", "Memory Editing", "Reverse Engineering"]
            },
            technologies: {
                programmingLanguages: ["C++", "Java", "Assembly"],
                frameworks: ["Android NDK", "OpenGL ES"],
                tools: ["IDA Pro", "Cheat Engine", "Memory Editors"]
            }
        }
    }
};

// Helper function to get project data
function getProjectData(category, projectId) {
    const categoryData = projectsData[category?.toLowerCase()];
    if (!categoryData) return null;
    return categoryData[projectId] || null;
}

// Component for Developer Section
function DeveloperSection({ developer }) {
    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Developer Avatar */}
                <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
                    <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <span className="text-4xl">👨‍💻</span>
                    </div>
                </div>

                {/* Developer Info */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{developer.name}</h2>
                    <div className="text-lg text-blue-600 mb-4">{developer.role}</div>

                    {/* Developer Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="text-2xl font-bold text-gray-900">{developer.experience}</div>
                            <div className="text-sm text-gray-500">Experience</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="text-2xl font-bold text-gray-900">50+</div>
                            <div className="text-sm text-gray-500">Projects</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="text-2xl font-bold text-gray-900">10M+</div>
                            <div className="text-sm text-gray-500">Downloads</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <div className="text-2xl font-bold text-gray-900">4.8</div>
                            <div className="text-sm text-gray-500">Rating</div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {developer.skills?.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm hover:border-blue-500 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    {developer.social && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
                            <div className="flex gap-4">
                                {developer.social.github && (
                                    <a
                                        href={developer.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-xl">🐙</span>
                                    </a>
                                )}
                                {developer.social.twitter && (
                                    <a
                                        href={developer.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-xl">🐦</span>
                                    </a>
                                )}
                                {developer.social.linkedin && (
                                    <a
                                        href={developer.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-xl">💼</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Component for Technologies Section
function TechnologiesSection({ technologies }) {
    return (
        <div className="space-y-8">
            {/* Programming Languages */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-2xl">💻</span>
                    Programming Languages
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {technologies.programmingLanguages?.map((lang, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all text-center"
                        >
                            <div className="text-3xl mb-2">
                                {lang === 'Java' && '☕'}
                                {lang === 'C++' && '🔧'}
                                {lang === 'C' && '⚡'}
                                {lang === 'Kotlin' && '🎯'}
                                {lang === 'Assembly' && '🖥️'}
                            </div>
                            <div className="font-bold text-lg text-gray-900">{lang}</div>
                            <div className="text-sm text-gray-600 mt-2">
                                {lang === 'Java' && 'Primary Language'}
                                {lang === 'C++' && 'Performance Critical'}
                                {lang === 'C' && 'Low Level Operations'}
                                {lang === 'Kotlin' && 'Modern Android'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-2xl">🛠️</span>
                    Frameworks & Tools
                </h2>
                <div className="space-y-4">
                    {technologies.frameworks && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-blue-600">Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.frameworks.map((framework, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-full"
                                    >
                                        {framework}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {technologies.tools && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-purple-600">Development Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-full"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {technologies.libraries && (
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-green-600">Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.libraries.map((library, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-green-50 border border-green-200 text-green-700 rounded-full"
                                    >
                                        {library}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Component for Build Info Section
function BuildInfoSection({ buildInfo }) {
    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Build Information
            </h2>

            <div className="space-y-6">
                {/* Build Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-blue-600">Architecture</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Supported CPU</span>
                                <span className="font-medium text-gray-900">{buildInfo.architecture}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Min SDK</span>
                                <span className="font-medium text-gray-900">API {buildInfo.minSdk}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Target SDK</span>
                                <span className="font-medium text-gray-900">API {buildInfo.targetSdk}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Build Tools</span>
                                <span className="font-medium text-gray-900">{buildInfo.buildTools}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-green-600">Compilation</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Compilation Type</span>
                                <span className="font-medium text-gray-900">{buildInfo.compilation}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Obfuscation</span>
                                <span className="font-medium text-gray-900">{buildInfo.obfuscation}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Signing</span>
                                <span className="font-medium text-gray-900">{buildInfo.signature}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Features */}
                {buildInfo.security && (
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-yellow-600">Security Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {buildInfo.security.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200"
                                >
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <span className="text-yellow-600">🛡️</span>
                                    </div>
                                    <span className="text-gray-900">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Component for Changelog Section
function ChangelogSection({ changelog }) {
    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                Version History
            </h2>
            <div className="space-y-6">
                {changelog.map((log, index) => (
                    <div
                        key={index}
                        className="relative pl-8 pb-6 last:pb-0"
                    >
                        {/* Timeline line */}
                        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                        {/* Version circle */}
                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl font-bold text-gray-900">v{log.version}</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                        {log.date}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-500 mt-2 md:mt-0">
                                    {log.changes.length} changes
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {log.changes.map((change, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-green-600 mt-1">✓</span>
                                        <span>{change}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default async function ProjectPage({ params, searchParams }) {
    const { id } = await params;
    const { projectName } = await searchParams;

    const project = getProjectData(id, projectName);

    if (!project) {
        return (
            <section className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="text-center max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
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
                                <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full">
                                    v{project.version}
                                </span>
                            </div>
                            <p className="text-gray-600 text-lg max-w-3xl">{project.desc}</p>
                        </div>

                        {/* Stats Badges */}
                        <div className="flex flex-wrap gap-3">
                            <div className="px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                                <div className="text-2xl font-bold text-blue-600">{project.downloads}</div>
                                <div className="text-xs text-gray-500">Downloads</div>
                            </div>
                            <div className="px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-xl font-bold">{project.rating}</span>
                                </div>
                                <div className="text-xs text-gray-500">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Project Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8">
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
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                        v{project.version || "1.0.0"}
                                    </div>
                                </div>

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Key Features</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.features.map((feature, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-medium rounded-xl border border-gray-200"
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
                                <a
                                    href={project.downloadLink || "#"}
                                    className="inline-block group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 text-center"
                                >
                                    <div className="relative flex items-center justify-center gap-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        <span className="text-lg">Download Now</span>
                                        {project.size && (
                                            <span className="text-sm opacity-80">({project.size})</span>
                                        )}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Screenshots Gallery */}
                {project.src && project.src.length > 0 && (
                    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Screenshots</h3>
                            <span className="text-sm text-gray-500">
                                {project.src.length} {project.src.length === 1 ? 'image' : 'images'}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.src.map((src, index) => (
                                <div key={index} className="relative group">
                                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                                        <img
                                            src={src}
                                            alt={`${project.title} - Screenshot ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                        {index + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Developer Section */}
                {project.developer && (
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Developer Details</h2>
                        <DeveloperSection developer={project.developer} />
                    </div>
                )}

                {/* Technologies Section */}
                {project.technologies && (
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
                        <TechnologiesSection technologies={project.technologies} />
                    </div>
                )}

                {/* Build Info Section */}
                {project.buildInfo && (
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Build Information</h2>
                        <BuildInfoSection buildInfo={project.buildInfo} />
                    </div>
                )}

                {/* Changelog Section */}
                {project.changelog && (
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Version History</h2>
                        <ChangelogSection changelog={project.changelog} />
                    </div>
                )}

                {/* Requirements Section */}
                {project.requirements && project.requirements.length > 0 && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        {/* Requirements Card */}
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
                        {project.tags && (
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center text-gray-500 text-sm">
                        <p>⚠️ Disclaimer: This software is for educational purposes only. Use at your own risk.</p>
                        <p className="mt-2">© {new Date().getFullYear()} {project.developer?.name || 'Shivam Yadav'}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}