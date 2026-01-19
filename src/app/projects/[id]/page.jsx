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
        }
    }
};

function getProjectData(category, projectId) {
    const categoryData = projectsData[category?.toLowerCase()];
    if (!categoryData) return null;
    return categoryData[projectId] || null;
}

export default async function ProjectPage({ params, searchParams }) {
    const { id } = await params;
    const { projectName } = await searchParams;

    const project = getProjectData(id, projectName);

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 text-center">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-3">Project Not Found</h1>
                        <p className="text-gray-600 mb-8">The requested project doesn't exist or has been removed.</p>
                        <a href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Return Home
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative">
                {/* Header Section */}
                <div className="relative overflow-hidden">
                    {/* Animated Gradient Header */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                        {/* Breadcrumb with Animation */}
                        <nav className="flex items-center gap-2 mb-6 md:mb-8">
                            <a href="/" className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">Home</span>
                            </a>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <a href={`/${id}`} className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium capitalize">{id}</span>
                            </a>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <div className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                                <span className="text-sm font-semibold text-gray-900 truncate max-w-[200px]">{project.title}</span>
                            </div>
                        </nav>

                        {/* Main Header Content */}
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 md:gap-8">
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                        {project.title}
                                    </h1>
                                    <div className="flex items-center gap-3">
                                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                                            v{project.version}
                                        </span>
                                        {project.category && (
                                            <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-semibold rounded-full border border-gray-200">
                                                {project.category}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl">
                                    {project.desc}
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-xl">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">{project.downloads}</div>
                                                <div className="text-xs text-gray-500">Downloads</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 flex items-center justify-center">
                                                <div className="flex items-center">
                                                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">{project.rating}</div>
                                                <div className="text-xs text-gray-500">Rating</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">{project.successRate || '99%'}</div>
                                                <div className="text-xs text-gray-500">Success</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">{project.support || '24/7'}</div>
                                                <div className="text-xs text-gray-500">Support</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Download CTA */}
                            <div className="lg:w-96">
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-6 border border-gray-200">
                                    <div className="text-center mb-6">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Get It Now</h3>
                                        <p className="text-gray-600 text-sm mt-1">Latest Version Available</p>
                                    </div>
                                    <a
                                        href={project.downloadLink || "#"}
                                        className="block w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mb-4"
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            <span>Download v{project.version}</span>
                                            <span className="text-sm opacity-90">({project.size})</span>
                                        </div>
                                    </a>
                                    <div className="text-center">
                                        <div className="text-xs text-gray-500 flex items-center justify-center gap-2">
                                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>Verified & Safe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Features Grid */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-900">✨ Premium Features</h2>
                                <div className="text-sm text-gray-500 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    {project.features.length} features
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <span className="text-xl">⚡</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg mb-1">{feature}</h3>
                                                <p className="text-gray-600 text-sm">Premium feature included</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Screenshots Gallery */}
                    {project.src && project.src.length > 0 && (
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-900">📸 Screenshots</h2>
                                <div className="text-sm text-gray-500 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    {project.src.length} images
                                </div>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {project.src.map((src, index) => (
                                        <div
                                            key={index}
                                            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                                        >
                                            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                                                <img
                                                    src={src}
                                                    alt={`Screenshot ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-3 left-3 right-3">
                                                    <div className="bg-black/80 text-white text-xs px-3 py-2 rounded-lg backdrop-blur-sm">
                                                        Screenshot {index + 1}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Developer & Technologies Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Developer Card */}
                        {project.developer && (
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                        <span className="text-2xl text-white">👨‍💻</span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Developer</h2>
                                        <p className="text-gray-600">Project Creator & Maintainer</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{project.developer.name}</h3>
                                        <p className="text-blue-600 font-medium">{project.developer.role}</p>
                                        <div className="flex items-center gap-2 mt-2 text-gray-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{project.developer.location}</span>
                                            <span className="mx-2">•</span>
                                            <span>{project.developer.experience} Experience</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Expertise</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.developer.skills?.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {project.developer.social && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Connect</h4>
                                            <div className="flex gap-3">
                                                {project.developer.social.github && (
                                                    <a
                                                        href={project.developer.social.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                                        title="GitHub"
                                                    >
                                                        <span className="text-xl">🐙</span>
                                                    </a>
                                                )}
                                                {project.developer.social.twitter && (
                                                    <a
                                                        href={project.developer.social.twitter}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                                                        title="Twitter"
                                                    >
                                                        <span className="text-xl">🐦</span>
                                                    </a>
                                                )}
                                                {project.developer.social.linkedin && (
                                                    <a
                                                        href={project.developer.social.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors"
                                                        title="LinkedIn"
                                                    >
                                                        <span className="text-xl">💼</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Technologies Card */}
                        {project.technologies && (
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center">
                                        <span className="text-2xl text-white">💻</span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Technologies</h2>
                                        <p className="text-gray-600">Built With Modern Stack</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Programming Languages */}
                                    {project.technologies.programmingLanguages && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Programming Languages</h4>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                                {project.technologies.programmingLanguages.map((lang, index) => (
                                                    <div
                                                        key={index}
                                                        className="bg-white rounded-xl p-4 border border-gray-200 text-center group hover:border-blue-400 transition-colors"
                                                    >
                                                        <div className="text-3xl mb-2">
                                                            {lang === 'Java' && '☕'}
                                                            {lang === 'C++' && '🔧'}
                                                            {lang === 'C' && '⚡'}
                                                            {lang === 'Kotlin' && '🎯'}
                                                        </div>
                                                        <div className="font-semibold text-gray-900">{lang}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tools & Frameworks */}
                                    <div className="space-y-4">
                                        {project.technologies.frameworks && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Frameworks</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.frameworks.map((framework, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-200"
                                                        >
                                                            {framework}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {project.technologies.tools && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Development Tools</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.tools.map((tool, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-lg border border-purple-200"
                                                        >
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Requirements & Safety Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Requirements Card */}
                        {project.requirements && (
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Requirements</h2>
                                        <p className="text-gray-600">System Specifications</p>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {project.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Safety & Build Info Card */}
                        <div className="space-y-8">
                            {/* Safety Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-6 border border-blue-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Safety Guaranteed</h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    {project.safetyInfo}
                                </p>
                                <div className="flex items-center gap-2 text-green-600 font-medium">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Virus Total Verified • No Data Collection</span>
                                </div>
                            </div>

                            {/* Build Info Summary */}
                            {project.buildInfo && (
                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                            <span className="text-xl text-white">⚙️</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">Build Information</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-sm text-gray-500">Architecture</div>
                                            <div className="font-semibold text-gray-900">{project.buildInfo.architecture}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">Min SDK</div>
                                            <div className="font-semibold text-gray-900">API {project.buildInfo.minSdk}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">Target SDK</div>
                                            <div className="font-semibold text-gray-900">API {project.buildInfo.targetSdk}</div>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">Build Tools</div>
                                            <div className="font-semibold text-gray-900">{project.buildInfo.buildTools}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Changelog Section */}
                    {project.changelog && (
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-900">📝 Version History</h2>
                                <div className="text-sm text-gray-500 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    {project.changelog.length} versions
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border border-gray-200">
                                <div className="space-y-8">
                                    {project.changelog.map((log, index) => (
                                        <div key={index} className="relative">
                                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                                <div className="md:w-32 flex-shrink-0">
                                                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl inline-block">
                                                        <div className="text-sm font-bold">v{log.version}</div>
                                                        <div className="text-xs opacity-90">{log.date}</div>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                                                        <ul className="space-y-2">
                                                            {log.changes.map((change, idx) => (
                                                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                                                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                    </div>
                                                                    <span>{change}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {index < project.changelog.length - 1 && (
                                                <div className="hidden md:block absolute left-16 top-14 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <p className="text-gray-600 text-sm">
                                    ⚠️ Disclaimer: This software is for educational purposes only. Use at your own risk.
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                    © {new Date().getFullYear()} {project.developer?.name || 'Shivam Yadav'}. All rights reserved.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href="#" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                                    Terms of Service
                                </a>
                                <a href="#" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="#" className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}