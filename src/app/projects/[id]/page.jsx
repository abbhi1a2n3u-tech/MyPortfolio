'use client';

import { useState, useEffect } from 'react';

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

export default function ProjectPage({ params, searchParams }) {
    const { id } = params;
    const { projectName } = searchParams;

    const [activeTab, setActiveTab] = useState('overview');
    const [selectedImage, setSelectedImage] = useState(0);

    const project = getProjectData(id, projectName);

    if (!project) {
        return (
            <section className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="text-center max-w-md mx-auto p-8 bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700">
                    <div className="w-20 h-20 mx-auto mb-6 bg-red-900/30 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-gray-400 mb-6">The requested project doesn't exist or has been removed.</p>
                    <a href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                        Return Home
                    </a>
                </div>
            </section>
        );
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: '📱' },
        { id: 'developer', label: 'Developer', icon: '👨‍💻' },
        { id: 'technologies', label: 'Technologies', icon: '💻' },
        { id: 'build', label: 'Build Info', icon: '⚙️' },
        { id: 'changelog', label: 'Changelog', icon: '📝' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative">
                {/* Header with Gradient */}
                <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 border-b border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        {/* Breadcrumb */}
                        <nav className="text-sm text-gray-400 mb-6 flex items-center flex-wrap gap-2">
                            <a href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Home
                            </a>
                            <span className="text-gray-600">/</span>
                            <a href={`/${id}`} className="hover:text-blue-400 transition-colors capitalize">
                                {id}
                            </a>
                            <span className="text-gray-600">/</span>
                            <span className="text-white font-medium">{project.title}</span>
                        </nav>

                        {/* Project Title & Badges */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div>
                                <div className="flex items-center flex-wrap gap-3 mb-3">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {project.title}
                                    </h1>
                                    <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full">
                                        v{project.version}
                                    </span>
                                </div>
                                <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Stats Badges */}
                            <div className="flex flex-wrap gap-3">
                                <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                                    <div className="text-2xl font-bold text-blue-400">{project.downloads}</div>
                                    <div className="text-xs text-gray-400">Downloads</div>
                                </div>
                                <div className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-xl font-bold">{project.rating}</span>
                                    </div>
                                    <div className="text-xs text-gray-400">Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-800 pb-4">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                    : 'bg-gray-800/30 text-gray-400 hover:text-white hover:bg-gray-800/50'
                                    }`}
                            >
                                <span>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content - 2/3 width */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Active Tab Content */}
                            {activeTab === 'overview' && (
                                <div className="space-y-8">
                                    {/* Hero Image with Gallery */}
                                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden">
                                        {project.src && project.src.length > 0 && (
                                            <>
                                                {/* Main Image */}
                                                <div className="relative h-96 overflow-hidden">
                                                    <img
                                                        src={project.src[selectedImage]}
                                                        alt={`${project.title} - Preview ${selectedImage + 1}`}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = `https://via.placeholder.com/800x400/1f2937/ffffff?text=${project.title}`;
                                                        }}
                                                    />
                                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                                        <div className="flex justify-between items-center">
                                                            <h3 className="text-xl font-bold">Preview Gallery</h3>
                                                            <div className="text-sm text-gray-300">
                                                                {selectedImage + 1} / {project.src.length}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Thumbnail Gallery */}
                                                <div className="p-6 bg-gray-900/50">
                                                    <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                                                        {project.src.map((src, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setSelectedImage(index)}
                                                                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index
                                                                    ? 'border-blue-500 scale-105'
                                                                    : 'border-gray-700 hover:border-gray-500'
                                                                    }`}
                                                            >
                                                                <img
                                                                    src={src}
                                                                    alt={`Thumbnail ${index + 1}`}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors" />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Features Grid */}
                                    {project.features && (
                                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Premium Features
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.features.map((feature, index) => (
                                                    <div
                                                        key={index}
                                                        className="p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors group"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                                                                <span className="text-lg">⚡</span>
                                                            </div>
                                                            <span className="font-medium text-lg">{feature}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        <div className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 rounded-2xl p-6 border border-blue-500/20">
                                            <div className="text-3xl font-bold text-blue-400">{project.size}</div>
                                            <div className="text-sm text-gray-400">App Size</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-900/30 to-green-700/20 rounded-2xl p-6 border border-green-500/20">
                                            <div className="text-3xl font-bold text-green-400">{project.successRate || '99%'}</div>
                                            <div className="text-sm text-gray-400">Success Rate</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-900/30 to-purple-700/20 rounded-2xl p-6 border border-purple-500/20">
                                            <div className="text-3xl font-bold text-purple-400">{project.support || '24/7'}</div>
                                            <div className="text-sm text-gray-400">Support</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-700/20 rounded-2xl p-6 border border-yellow-500/20">
                                            <div className="text-3xl font-bold text-yellow-400">{project.updateCycle || '30d'}</div>
                                            <div className="text-sm text-gray-400">Update Cycle</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'developer' && project.developer && (
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
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
                                            <h2 className="text-3xl font-bold mb-2">{project.developer.name}</h2>
                                            <div className="text-lg text-blue-400 mb-4">{project.developer.role}</div>

                                            {/* Developer Stats */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                                    <div className="text-2xl font-bold">{project.developer.experience}</div>
                                                    <div className="text-sm text-gray-400">Experience</div>
                                                </div>
                                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                                    <div className="text-2xl font-bold">50+</div>
                                                    <div className="text-sm text-gray-400">Projects</div>
                                                </div>
                                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                                    <div className="text-2xl font-bold">10M+</div>
                                                    <div className="text-sm text-gray-400">Downloads</div>
                                                </div>
                                                <div className="p-4 bg-gray-900/50 rounded-xl">
                                                    <div className="text-2xl font-bold">4.8</div>
                                                    <div className="text-sm text-gray-400">Rating</div>
                                                </div>
                                            </div>

                                            {/* Skills */}
                                            <div className="mb-6">
                                                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.developer.skills?.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-sm hover:border-blue-500 transition-colors"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Social Links */}
                                            {project.developer.social && (
                                                <div>
                                                    <h3 className="text-xl font-bold mb-3">Connect</h3>
                                                    <div className="flex gap-4">
                                                        {project.developer.social.github && (
                                                            <a
                                                                href={project.developer.social.github}
                                                                target="_blank"
                                                                className="p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-colors"
                                                            >
                                                                <span className="text-xl">🐙</span>
                                                            </a>
                                                        )}
                                                        {project.developer.social.twitter && (
                                                            <a
                                                                href={project.developer.social.twitter}
                                                                target="_blank"
                                                                className="p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-colors"
                                                            >
                                                                <span className="text-xl">🐦</span>
                                                            </a>
                                                        )}
                                                        {project.developer.social.linkedin && (
                                                            <a
                                                                href={project.developer.social.linkedin}
                                                                target="_blank"
                                                                className="p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-colors"
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
                            )}

                            {activeTab === 'technologies' && project.technologies && (
                                <div className="space-y-8">
                                    {/* Programming Languages */}
                                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                            <span className="text-2xl">💻</span>
                                            Programming Languages
                                        </h2>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {project.technologies.programmingLanguages?.map((lang, index) => (
                                                <div
                                                    key={index}
                                                    className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all hover:-translate-y-1 text-center"
                                                >
                                                    <div className="text-3xl mb-2">
                                                        {lang === 'Java' && '☕'}
                                                        {lang === 'C++' && '🔧'}
                                                        {lang === 'C' && '⚡'}
                                                        {lang === 'Kotlin' && '🎯'}
                                                        {lang === 'Assembly' && '🖥️'}
                                                    </div>
                                                    <div className="font-bold text-lg">{lang}</div>
                                                    <div className="text-sm text-gray-400 mt-2">
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
                                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                            <span className="text-2xl">🛠️</span>
                                            Frameworks & Tools
                                        </h2>
                                        <div className="space-y-4">
                                            {project.technologies.frameworks && (
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-3 text-blue-400">Frameworks</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.frameworks.map((framework, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-4 py-2 bg-blue-900/30 border border-blue-700/30 rounded-full"
                                                            >
                                                                {framework}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {project.technologies.tools && (
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Development Tools</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.tools.map((tool, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-4 py-2 bg-purple-900/30 border border-purple-700/30 rounded-full"
                                                            >
                                                                {tool}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {project.technologies.libraries && (
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-3 text-green-400">Libraries</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.libraries.map((library, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-4 py-2 bg-green-900/30 border border-green-700/30 rounded-full"
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
                            )}

                            {activeTab === 'build' && project.buildInfo && (
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <span className="text-2xl">⚙️</span>
                                        Build Information
                                    </h2>

                                    <div className="space-y-6">
                                        {/* Build Specifications */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
                                                <h3 className="text-lg font-semibold mb-4 text-blue-400">Architecture</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">Supported CPU</span>
                                                        <span className="font-medium">{project.buildInfo.architecture}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">Min SDK</span>
                                                        <span className="font-medium">API {project.buildInfo.minSdk}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">Target SDK</span>
                                                        <span className="font-medium">API {project.buildInfo.targetSdk}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">Build Tools</span>
                                                        <span className="font-medium">{project.buildInfo.buildTools}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
                                                <h3 className="text-lg font-semibold mb-4 text-green-400">Compilation</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">Compilation Type</span>
                                                        <span className="font-medium">{project.buildInfo.compilation}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">Obfuscation</span>
                                                        <span className="font-medium">{project.buildInfo.obfuscation}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-400">Signing</span>
                                                        <span className="font-medium">{project.buildInfo.signature}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Security Features */}
                                        {project.buildInfo.security && (
                                            <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700">
                                                <h3 className="text-lg font-semibold mb-4 text-yellow-400">Security Features</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {project.buildInfo.security.map((feature, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl"
                                                        >
                                                            <div className="w-8 h-8 rounded-full bg-yellow-900/30 flex items-center justify-center">
                                                                <span className="text-yellow-400">🛡️</span>
                                                            </div>
                                                            <span>{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'changelog' && project.changelog && (
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <span className="text-2xl">📝</span>
                                        Version History
                                    </h2>
                                    <div className="space-y-6">
                                        {project.changelog.map((log, index) => (
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

                                                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-xl font-bold">v{log.version}</span>
                                                            <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full">
                                                                {log.date}
                                                            </span>
                                                        </div>
                                                        <div className="text-sm text-gray-400 mt-2 md:mt-0">
                                                            {log.changes.length} changes
                                                        </div>
                                                    </div>

                                                    <ul className="space-y-2">
                                                        {log.changes.map((change, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <span className="text-green-400 mt-1">✓</span>
                                                                <span>{change}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar - 1/3 width */}
                        <div className="space-y-8">
                            {/* Download Card */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-8">
                                <h3 className="text-2xl font-bold mb-6 text-center">Download Now</h3>
                                <button className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="flex items-center justify-center gap-3">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        <span className="text-lg">Download v{project.version}</span>
                                    </div>
                                    <div className="text-sm opacity-80 mt-2">{project.size}</div>
                                </button>

                                {/* Requirements */}
                                {project.requirements && (
                                    <div className="mt-8 pt-8 border-t border-gray-700">
                                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Requirements
                                        </h4>
                                        <ul className="space-y-3">
                                            {project.requirements.map((req, index) => (
                                                <li key={index} className="flex items-center gap-3 text-sm">
                                                    <div className="w-6 h-6 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-gray-300">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Safety Card */}
                            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-3xl border border-blue-700/30 p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Safety Guaranteed
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.safetyInfo}
                                </p>
                                <div className="flex items-center gap-3 text-green-400 text-sm">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Virus Total Verified • No Data Collection
                                </div>
                            </div>

                            {/* Tags */}
                            {project.tags && (
                                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-6">
                                    <h3 className="text-xl font-bold mb-4">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 text-sm rounded-full hover:border-blue-500/50 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                        <p>⚠️ Disclaimer: This software is for educational purposes only. Use at your own risk.</p>
                        <p className="mt-2">© {new Date().getFullYear()} {project.developer?.name || 'Shivam Yadav'}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}