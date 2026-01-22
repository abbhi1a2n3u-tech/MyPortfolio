"use client";

import { useEffect, useRef, useState } from "react";
import projectdata from "../../Data/projects";
import "animate.css";

export default function AndroidPage() {
    const scrollRef = useRef(null);
    const [mounted, setMounted] = useState(false);
    const [animatedElements, setAnimatedElements] = useState(new Set());

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const el = entry.target;
                    const elementId = el.id || el.dataset.index;

                    if (entry.isIntersecting) {
                        if (!animatedElements.has(elementId)) {
                            const animation = el.dataset.animate;

                            // Remove initial opacity
                            el.classList.remove("opacity-0");
                            
                            // Add animation and visible class
                            el.classList.add("opacity-100", animation);

                            // Mark as animated
                            setAnimatedElements(prev => new Set([...prev, elementId]));

                            // Animation complete के बाद animate.css classes remove करें
                            setTimeout(() => {
                                el.classList.remove(...animation.split(" "));
                            }, 1000);
                        }
                    } else {
                        // Scroll up होने पर animation reset नहीं करेंगे
                        // सिर्फ opacity को maintain रखेंगे
                        if (animatedElements.has(elementId)) {
                            el.classList.remove("opacity-0");
                            el.classList.add("opacity-100");
                        }
                    }
                });
            },
            {
                root: null,
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        const elements = document.querySelectorAll("[data-animate]");
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [mounted, animatedElements]);

    if (!mounted) return null;

    const allProject = [];

    // Flatten only Android projects
    Object.keys(projectdata).forEach(category => {
        if (category.toLowerCase() !== "android") return;

        const categoryProjects = projectdata[category];
        Object.keys(categoryProjects).forEach(projectId => {
            allProject.push({
                id: projectId,
                category: category,
                ...categoryProjects[projectId],
            });
        });
    });

    return (
        <div
            ref={scrollRef}
            className="min-w-full bg-gradient-to-br from-red-100 to-indigo-200
                 p-4 sm:p-8 min-h-screen overflow-y-auto overflow-x-hidden"
        >
            {/* heading */}
            <div
                data-animate="animate__fadeInDown"
                className="opacity-0 animate__animated"
            >
                <h1 className="text-center sm:text-6xl text-3xl font-bold">
                    Android{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h1>

                <p className="text-center text-xs sm:text-xl mt-2 sm:tracking-[4px] uppercase text-gray-700">
                    A collection of my Android{" "}
                    <span className="bg-gradient-to-r from-pink-500 via-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </p>
            </div>

            {/* stats cards */}
            <div className="mt-8 sm:mt-10 grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-3">
                {/* Total Projects */}
                <div
                    data-animate="animate__fadeInLeft"
                    className="border-2 animate__animated opacity-0 border-gray-200
                     bg-gradient-to-br flex items-start justify-center flex-col
                     from-indigo-100 to-purple-100 shadow-sm rounded-2xl
                     sm:h-30 h-24 p-4 sm:pl-7"
                >
                    <h1 className="sm:text-4xl text-2xl font-bold">
                        {allProject.length}
                    </h1>
                    <p className="sm:text-sm text-xs text-gray-500 mt-1">
                        Total projects
                    </p>
                </div>

                {/* Total Downloads */}
                <div
                    data-animate="animate__fadeInUp"
                    className="border-2 animate__animated opacity-0 border-gray-200
                     bg-gradient-to-br flex items-start justify-center flex-col
                     from-indigo-100 to-purple-100 shadow-sm rounded-2xl
                     sm:h-30 h-24 p-4 sm:pl-7"
                >
                    <div className="sm:text-3xl text-2xl font-bold text-gray-900">
                        {(() => {
                            // Function to parse downloads string into number
                            const parseDownloads = (str) => {
                                if (!str) return 0;

                                const cleanStr = str.toString().replace(/,/g, '');
                                const match = cleanStr.match(/^(\d+(?:\.\d+)?)\s*(K|M|B)?/i);

                                if (!match) return 0;

                                let num = parseFloat(match[1]);
                                const unit = match[2] ? match[2].toUpperCase() : '';

                                switch (unit) {
                                    case 'K': return num * 1000;
                                    case 'M': return num * 1000000;
                                    case 'B': return num * 1000000000;
                                    default: return num;
                                }
                            };

                            // Calculate total
                            const total = allProject.reduce((sum, pro) => {
                                return sum + parseDownloads(pro.downloads);
                            }, 0);

                            // Format for display
                            const formatDownloads = (num) => {
                                if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B+`;
                                if (num >= 1000000) return `${(num / 1000000000).toFixed(1)}M+`;
                                if (num >= 1000) return `${(num / 1000).toFixed(1)}K+`;
                                return `${Math.round(num)}+`;
                            };

                            return formatDownloads(total);
                        })()}
                    </div>
                    <div className="text-gray-600 sm:text-sm text-xs mt-2">
                        Total Downloads
                    </div>
                </div>

                {/* Featured */}
                <div
                    data-animate="animate__fadeInRight"
                    className="border-2 animate__animated opacity-0 border-gray-200
                     bg-gradient-to-br flex items-start justify-center flex-col
                     from-indigo-100 to-purple-100 shadow-sm rounded-2xl
                     sm:h-30 h-24 p-4 sm:pl-7"
                >
                    <div className="sm:text-3xl text-2xl font-bold text-gray-900">
                        {allProject.filter(p => p.featured).length}
                    </div>
                    <div className="text-gray-600 sm:text-sm text-xs mt-2">
                        Featured
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            {
                allProject.length === 0 ? (
                    <p className="text-center mt-20 text-gray-500 sm:text-xl text-lg">
                        No Android projects found.
                    </p>
                ) : (
                    <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {allProject.map((pro, index) => (
                            <div
                                key={index}
                                data-index={index} // Unique identifier for tracking
                                data-animate={index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"}
                                className="group opacity-0 animate__animated p-4 sm:p-5 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 hover:shadow-xl rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Project Title */}
                                <h1 className="text-white sm:text-xl text-lg font-bold mb-4 text-shadow-sm">
                                    {pro.title}
                                </h1>

                                {/* Image Container */}
                                <div className="border-2 border-white/20 bg-white/10 backdrop-blur-sm rounded-2xl sm:p-3 p-2 h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={pro.src[0]}
                                        className="rounded-xl w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                                        alt={pro.title}
                                    />
                                </div>

                                {/* Additional Info (Optional) */}
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-white/80 text-sm">
                                        {pro.downloads ? `${pro.downloads}+ Downloads` : 'Available on Play Store'}
                                    </span>
                                    {pro.featured && (
                                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}