import style from './page.module.css';
import ImageData from '../Data/a.js';
import "animate.css"
import Link from 'next/link';

export const dynamic = "force-dynamic";

export default function HomePage() {
    const skills = [
        "java", "js", "c", "cpp", "androidstudio", "blender",
        "nodejs", "express", "react", "html", "css", "git",
        "mongodb", "unity", "nextjs", "tailwind", "firebase"
    ];

    const projects = [
        {
            title: "Free Fire Mod Menu",
            description: "Advanced Android mod menu with premium features",
            category: "Android Development",
            link: "/projects/Android?projectName=freefireModeMenu",
            tags: ["Android", "Game", "Modding"],
            src: ["/p7.png"],
            featured: true
        },
        {
            title: "Portfolio Website",
            description: "Modern responsive portfolio with Next.js",
            category: "Web Development",
            link: "/projects/Web",
            tags: ["Next.js", "React", "Tailwind"],
            featured: true
        },
        {
            title: "AI Chat Assistant",
            description: "Intelligent chatbot with natural language processing",
            category: "AI/ML",
            link: "/projects/AI",
            tags: ["Python", "NLP", "OpenAI"],
            featured: false
        },
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution",
            category: "Full Stack",
            link: "/projects/Web",
            tags: ["MERN", "Payment", "Auth"],
            featured: false
        }
    ];

    const stats = [
        { label: "Projects Completed", value: "24+" },
        { label: "Years Experience", value: "3+" },
        { label: "Happy Clients", value: "18+" },
        { label: "GitHub Repos", value: "47+" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Profile Header */}
                    <div className="text-center">
                        <div className="relative inline-block mb-8">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                            <div className="relative">
                                <img
                                    className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl object-cover mx-auto"
                                    src={ImageData.imgSrc}
                                    alt="Shivam Yadav"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    Dev
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            Hi, I'm <div className="bg-gradient-to-r inline-block from-blue-600 to-purple-600 bg-clip-text text-transparent animate__animated animate__bounce animate__infinite">Shivam Yadav</div>
                        </h1>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-xl md:text-2xl text-gray-600 mb-8">
                                Passionate Developer • Tech Enthusiast • Problem Solver
                            </p>

                            {/* Social Links */}
                            <div className="flex justify-center space-x-6 mb-12">
                                {[
                                    {
                                        href: "https://twitter.com/abbhi1a2n3u_tech",
                                        label: "Twitter",
                                        color: "hover:bg-blue-100"
                                    },
                                    {
                                        href: "https://www.linkedin.com/in/shivam-yadav-2626aa338/",
                                        label: "LinkedIn",
                                        color: "hover:bg-blue-100"
                                    },
                                    {
                                        href: "https://www.instagram.com/_a.a.abhi/",
                                        label: "Instagram",
                                        color: "hover:bg-pink-100"
                                    },
                                    {
                                        href: "https://github.com/yourusername",
                                        label: "GitHub",
                                        color: "hover:bg-gray-100"
                                    }
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm ${social.color} transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
                                        aria-label={social.label}
                                    >
                                        <span className="sr-only">{social.label}</span>
                                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            {social.label === 'Twitter' && (
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            )}
                                            {social.label === 'LinkedIn' && (
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            )}
                                            {social.label === 'Instagram' && (
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            )}
                                            {social.label === 'GitHub' && (
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                            )}
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 text-sm md:text-base mt-2">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-10 blur-xl"></div>
                            <img
                                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                                src={ImageData.imgSrc}
                                alt="About Me"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-2xl shadow-xl">
                                <div className="text-sm font-bold">Available for work</div>
                            </div>
                        </div>

                        {/* Right Column - Info */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: "🌱",
                                        title: "Currently Learning",
                                        content: "Exploring cutting-edge technologies and frameworks to stay ahead in the tech landscape"
                                    },
                                    {
                                        icon: "⚡",
                                        title: "About Me",
                                        content: "Passionate Developer | Tech Enthusiast | Creative Problem Solver | Lifelong Learner"
                                    },
                                    {
                                        icon: "💎",
                                        title: "Core Values",
                                        content: "Integrity, Innovation, Collaboration, and Continuous Growth"
                                    },
                                    {
                                        icon: "📈",
                                        title: "Technical Expertise",
                                        content: "Java, C#, C++, JavaScript, Node.js, MongoDB, OOP, Git, DevOps, Cloud Computing"
                                    },
                                    {
                                        icon: "📍",
                                        title: "Location",
                                        content: "Based in India, working with clients worldwide"
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
                                    >
                                        <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Contact */}
                                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Get In Touch
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Let's discuss your project or just say hello!
                                    </p>
                                    <a
                                        href="mailto:shivamyadav12345@gmail.com"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        shivamyadav12345@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Skills
                            </span> & Technologies
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Technologies and tools I work with to bring ideas to life
                        </p>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                                <img
                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                    alt={skill}
                                    className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="mt-3 text-center">
                                    <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-700 font-medium">
                                Always learning new technologies
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            A showcase of my recent work and contributions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Link
                                key={index}
                                href={project.link}
                                className={`group block ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                                    {/* Project Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-6xl opacity-20">
                                                {
                                                    project?.src ? <img src={project.src[0]} alt="" /> :
                                                    index % 3 === 0 ? "📱" : index % 3 === 1 ? "💻" : "🤖"
                                                }
                                            </div>
                                        </div>
                                        {project.featured && (
                                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                Featured
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                                {project.category}
                                            </span>
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            View All Projects
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gradient-to-r from-gray-900 to-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex justify-center space-x-6 mb-6">
                            {['twitter', 'linkedin', 'instagram', 'github'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                                >
                                    <span className="sr-only">{social}</span>
                                </a>
                            ))}
                        </div>

                        <p className="text-gray-400 text-sm mb-4">
                            © {new Date().getFullYear()} Shivam Yadav. All rights reserved.
                        </p>

                        <p className="text-gray-500 text-xs">
                            Made with ❤️ using Next.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}