"use client";

import { useEffect, useRef, useState } from "react";
import projectdata from "../../Data/projects";
import "animate.css";

export default function AndroidPage() {
    const scrollRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        if (!scrollRef.current) return;

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const animation = el.dataset.animate;

                        el.classList.remove("opacity-0");
                        el.classList.add("opacity-100", animation);

                        observer.unobserve(el); // sirf 1 baar
                    }
                });
            },
            {
                root: scrollRef.current,
                threshold: 0.2,
            }
        );

        const elements =
            scrollRef.current.querySelectorAll("[data-animate]");
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [mounted]);

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
                 p-8 min-h-screen max-h-screen overflow-y-scroll overflow-x-hidden"
        >
            {/* heading */}
            <h1 className="text-center sm:text-6xl font-bold animate__animated animate__fadeInLeftBig">
                Android{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Projects
                </span>
            </h1>

            <p className="text-center text-[0.4rem] sm:text-xl mt-2 tracking-[4px] uppercase text-gray-700 animate__animated animate__fadeInRightBig">
                A collection of my Android{" "}
                <span className="bg-gradient-to-r from-pink-500 via-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Projects
                </span>
            </p>

            {/* stats cards */}
            <div className="mt-10 grid sm:grid-cols-3 grid-cols-2 gap-4">
                {/* Total Projects */}
                <div
                    data-animate="animate__fadeInLeftBig"
                    className="border-2 animate__animated opacity-0 border-gray-200
                     bg-gradient-to-br flex items-start justify-center flex-col
                     from-indigo-100 to-purple-100 shadow-sm rounded-2xl
                     h-30 p-4 pl-7"
                >
                    <h1 className="sm:text-4xl text-[1.2rem] font-bold">
                        {allProject.length}
                    </h1>
                    <p className="sm:text-sm text-[0.8rem] text-gray-500 mt-1">
                        Total projects
                    </p>
                </div>

                {/* Total Downloads */}
                <div
                    data-animate="animate__fadeIn"
                    className="border-2 animate__animated opacity-0 border-gray-200
                     bg-gradient-to-br flex items-start justify-center flex-col
                     from-indigo-100 to-purple-100 shadow-sm rounded-2xl
                     h-30 p-4 pl-7"
                >
                    <div className="sm:text-3xl text-[1.2rem] font-bold text-gray-900">
                        {Math.max(...allProject.map(p => p.downloads ? parseFloat(p.downloads) : 0)) / 1000}K+
                    </div>
                    <div className="text-gray-600 sm:text-sm mt-2 text-[0.8rem]">
                        Total Downloads
                    </div>
                </div>

                {/* Featured */}
                <div
                    data-animate="animate__fadeInRightBig"
                    className="border-2 animate__animated opacity-0 border-gray-200
                     bg-gradient-to-br flex items-start justify-center flex-col
                     from-indigo-100 to-purple-100 shadow-sm rounded-2xl
                     h-30 p-4 pl-7"
                >
                    <div className="sm:text-3xl text-[1.2rem] font-bold text-gray-900">
                        {allProject.filter(p => p.featured).length}
                    </div>
                    <div className="text-gray-600 sm:text-sm mt-2 text-[0.8rem]">
                        Featured
                    </div>
                </div>
            </div>

            {/*  */}
        </div>
    );
}
