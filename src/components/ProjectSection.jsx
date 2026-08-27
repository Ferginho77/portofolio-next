"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        image: "/pdam.png",
        alt: "PDAM Project",
        title: "PDAM Dashboard",
        description: "Office car rental website at PDAM Tirta Raharja company, with Laravel 11 technology",
        categories: ["ERP"],
        titleColor: "text-blue-700",
        imageBorder: "border-blue-300",
    },
    {
        image: "/spbu.png",
        alt: "SPBU Project",
        title: "SPBU Pertamina Management",
        description: "Pertamina gas station management website spread across 8 regions in West Java, the system includes attendance with fingerprint machines to fuel sales calculations",
        categories: ["ERP", "Finance", "Energy"],
        titleColor: "text-red-700",
        imageBorder: "border-blue-300",
    },
    {
        image: "/perkin.png",
        alt: "Perkin Project",
        title: "Perkin App",
        description: "PT. Perkin Indonesia's Web-Based Dog Racing Scoring System Supported by Arduino Device Sensor Technology",
        categories: ["IoT"],
        titleColor: "text-blue-700",
        imageBorder: "border-blue-300",
    },
    {
        image: "/richmusic.png",
        alt: "RichMusic Project",
        title: "RichMusic",
        description: "Rich Music company profile, to cover the latest news about music and concert ticket info",
        categories: ["Landing page"],
        titleColor: "text-gray-700",
        imageBorder: "border-gray-300",
    },
    {
        image: "/tumbura.png",
        alt: "Tumbura App Project",
        title: "Tumbura App",
        description: "Tumbura App is a Agricultural Application for GreenHouse and Farmer. System prediction for optimal crop yield and resource management.",
        categories: ["AI Agriculture", "ML"],
        titleColor: "text-gray-700",
        imageBorder: "border-gray-300",
        width: 300,
        height: 260,
    },
];

const categories = ["All", "ERP", "Finance", "Energy", "IoT", "Landing page", "AI Agriculture", "ML"];

export default function ProjectSection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(selectedCategory));

    return (
        <div className="bg-white rounded-none shadow-xl p-4 sm:p-8 flex flex-col items-center justify-center w-full">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-4 text-center">Projects</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8" role="group" aria-label="Filter project categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        aria-pressed={selectedCategory === category}
                        className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${selectedCategory === category
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="overflow-x-auto w-full">
                <div className="flex flex-row gap-4 sm:gap-8 w-max">
                    {filteredProjects.map((project) => (
                        <div key={project.title} className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center min-w-[260px] sm:min-w-[340px] max-w-xs sm:max-w-sm h-[340px] sm:h-[400px] justify-center">
                            <Image
                                src={project.image}
                                alt={project.alt}
                                width={project.width || 200}
                                height={project.height || 120}
                                className={`rounded-2xl border-4 ${project.imageBorder} shadow-md object-cover bg-white mb-2 sm:mb-4`}
                                priority
                            />
                            <h2 className={`font-bold ${project.titleColor} text-lg sm:text-xl mb-1 sm:mb-2`}>{project.title}</h2>
                            <div className="flex flex-wrap justify-center gap-1 mb-2">
                                {project.categories.map((category) => (
                                    <span key={category} className="rounded-full bg-white/80 px-2 py-1 text-xs font-semibold text-gray-700">{category}</span>
                                ))}
                            </div>
                            <p className="text-xs sm:text-base text-gray-700 text-center">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}