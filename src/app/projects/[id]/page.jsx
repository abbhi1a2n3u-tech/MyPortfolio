import style from "./page.module.css";

const projectsData = {
    android: {
        freefireModeMenu: {
            title: "Free Fire Mod Menu",
            desc: "Android mod menu for Free Fire with premium features",
            src: ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png", "/p6.png", "/p7.png"],
            version: "1.23.03",
            features: ["Aimbot", "Wallhack", "Unlimited Diamonds", "Auto Headshot", "No Recoil"],
            size: "85 MB",
            downloads: "2.4M",
            rating: 4.8
        },
        espHack: {
            title: "ESP Hack",
            desc: "ESP based Android hack with radar system",
        },
    },
};

export default async function ProjectPage({ params, searchParams }) {
    const { id } = await params;
    const { projectName } = await searchParams;

    const typeKey = id.toLowerCase();
    const project = projectsData[typeKey]?.[projectName];

    if (!project) {
        return (
            <section className="min-h-screen w-full flex items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-700 mb-4">Project Not Found</h1>
                    <p className="text-gray-500">The requested project doesn't exist or has been removed.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen w-full p-4 md:p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Main Content Card */}
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <nav className="text-sm text-gray-500 mb-4">
                        <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
                        <span className="mx-2">/</span>
                        <a href={`/${id}`} className="hover:text-blue-500 transition-colors capitalize">{id}</a>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700 font-medium">{project.title}</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                        {project.title}
                    </h1>
                    <p className="text-gray-600 text-lg">{project.desc}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Preview & Download */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Main Preview Card */}
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-3xl">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    {/* App Icon */}
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
                                        <img 
                                            src={project?.src?.[project.src.length - 1]} 
                                            className="relative w-48 h-48 rounded-2xl shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-300 border-4 border-white"
                                            alt={project.title}
                                        />
                                    </div>
                                    
                                    {/* Info Section */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full">
                                                v{project?.version}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-gray-700 font-semibold">{project.rating}</span>
                                                <span className="text-gray-500 text-sm">({project.downloads}+ downloads)</span>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-4 mb-6">
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-500 mb-2">FEATURES</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.features?.map((feature, index) => (
                                                        <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all duration-200">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-6 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    <span className="text-gray-600">{project.size}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-gray-600">Updated 2 days ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Download Button */}
                                        <button className="group relative w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative flex items-center justify-center gap-3">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                <span className="text-lg">Download Now</span>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Screenshots Gallery */}
                        {project.src && project.src.length > 0 && (
                            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Screenshots</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {project.src.map((src, index) => (
                                        <div key={index} className="relative group cursor-pointer">
                                            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                                                <img 
                                                    src={src} 
                                                    alt={`Screenshot ${index + 1}`}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-8">
                        {/* Requirements Card */}
                        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">System Requirements</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Android 7.0+</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">2GB+ RAM</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Root Not Required</span>
                                </li>
                            </ul>
                        </div>

                        {/* Safety Info */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-6 border border-blue-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                Safety Guaranteed
                            </h3>
                            <p className="text-gray-600 text-sm">
                                This mod is 100% safe and tested. No viruses or malware. Regular updates ensure compatibility.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Statistics</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                                    <div className="text-2xl font-bold text-blue-600">{project.downloads}</div>
                                    <div className="text-sm text-gray-500">Downloads</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                                    <div className="text-2xl font-bold text-green-600">99%</div>
                                    <div className="text-sm text-gray-500">Success Rate</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                                    <div className="text-sm text-gray-500">Support</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                                    <div className="text-2xl font-bold text-yellow-600">30d</div>
                                    <div className="text-sm text-gray-500">Update Cycle</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}