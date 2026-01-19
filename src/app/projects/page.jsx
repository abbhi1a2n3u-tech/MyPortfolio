import Link from 'next/link';
import projectsData from '../../Data/projects';

export const dynamic = "force-dynamic";

export default function ProjectsPage() {
    const allProjects = [];
    
    // Flatten all projects from all categories
    Object.keys(projectsData).forEach(category => {
        const categoryProjects = projectsData[category];
        Object.keys(categoryProjects).forEach(projectId => {
            allProjects.push({
                id: projectId,
                category: category,
                ...categoryProjects[projectId]
            });
        });
    });

    const categories = Object.keys(projectsData);

    console.log(categories);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        A collection of my work across different technologies and domains
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg">
                            All Projects
                        </button>
                        {categories.map(category => (
                            <button 
                                key={category}
                                className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-bold text-gray-900">{allProjects.length}</div>
                            <div className="text-gray-600 text-sm mt-2">Total Projects</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-bold text-gray-900">{categories.length}</div>
                            <div className="text-gray-600 text-sm mt-2">Categories</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-bold text-gray-900">
                                {Math.max(...allProjects.map(p => p.downloads ? parseFloat(p.downloads) : 0)) / 1000}K+
                            </div>
                            <div className="text-gray-600 text-sm mt-2">Total Downloads</div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-bold text-gray-900">
                                {allProjects.filter(p => p.featured).length}
                            </div>
                            <div className="text-gray-600 text-sm mt-2">Featured</div>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.category}?projectName=${project.id}`}
                            className="group block"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                                {/* Project Image */}
                                <div className="h-48 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 relative overflow-hidden">
                                    {project.src && project.src.length > 0 ? (
                                        <img 
                                            src={project.src[0]} 
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-6xl opacity-20">
                                                {project.category === 'android' ? '📱' : 
                                                 project.category === 'web' ? '💻' : 
                                                 project.category === 'ios' ? '🍎' : '⚡'}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold rounded-full">
                                            {project.category.toUpperCase()}
                                        </span>
                                    </div>
                                    
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {project.desc}
                                    </p>
                                    
                                    {/* Stats */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            {project.downloads || "10K+"}
                                        </div>
                                        {project.version && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                v{project.version}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.features?.slice(0, 3).map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {project.features && project.features.length > 3 && (
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                +{project.features.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {allProjects.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Yet</h3>
                        <p className="text-gray-600">Check back soon for new projects!</p>
                    </div>
                )}

                {/* Back to Home */}
                <div className="text-center mt-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}