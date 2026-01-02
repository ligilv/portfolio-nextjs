'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Folder, Briefcase, Wrench, Edit, Github, Twitter, Dribbble, Youtube } from 'lucide-react';

const projects = [
    {
        title: "StreamTV",
        subtitle: "Video Streaming Platform",
        image: "/projects/streamtv.png",
        link: "https://streamiobeta.netlify.app/",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Hadana",
        subtitle: "Travel CRM SaaS",
        image: "/projects/hadana.png",
        link: "https://www.hadana.co/",
        color: "from-lime-400 to-green-500"
    },
    {
        title: "Gvty",
        subtitle: "Personal Branding Tool",
        image: "/projects/gvty.png",
        link: "https://mygrvtylink.netlify.app/",
        color: "from-blue-500 to-purple-500"
    },
    {
        title: "ContinueCV",
        subtitle: "LaTeX CV Manager",
        image: "/projects/continue-cv.png",
        link: "https://continous-cv.netlify.app/",
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "wwwdot Profile",
        subtitle: "Verify your Online presence",
        image: "/projects/wwwdot.png",
        link: "https://wwwdot.io",
        color: "from-pink-500 to-rose-500"
    }
];

const experience = [
    {
        company: "Freelance",
        role: "Working on a travel based startup as a web and app engineer",
        period: "Oct 2025 - Present"
    },
    {
        company: "Headout",
        role: "Worked on Mobile App and Web App Development. React native and Next js",
        period: "Jun 2022 - Oct 2025"
    },
    {
        company: "Veersa Tech",
        role: "Worked on React native and Django",
        period: "Nov 2021 - Jun 2022"
    },
    {
        company: "Dignitech Solutions",
        role: "Developed multiple web and react native applications from ",
        period: "April 2021 - June 2021"
    }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center gap-8">
                    <Link href="#home" className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <Home size={20} />
                    </Link>
                    <Link href="#projects" className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <Folder size={20} />
                    </Link>
                    <Link href="#experience" className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <Briefcase size={20} />
                    </Link>
                    <Link href="#tools" className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <Wrench size={20} />
                    </Link>
                    <Link href="#contact" className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                        <Edit size={20} />
                    </Link>
                </div>
            </nav>

            <div className="pt-16 flex flex-col lg:flex-row min-h-screen">
                {/* Left Sidebar - Profile Card */}
                <aside className="lg:w-[400px] lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] p-6 lg:p-8 flex items-center justify-center">
                    <div className="bg-white text-black rounded-3xl p-8 w-full max-w-sm relative overflow-hidden">
                        {/* Decorative dashed line */}
                        <div className="absolute top-8 right-8 w-32 h-32 border-2 border-dashed border-orange-500 rounded-tl-3xl opacity-50"></div>

                        {/* Profile Image */}
                        <div className="relative mb-6">
                            <div className="w-full aspect-square bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl overflow-hidden relative">
                                {/* Skeleton/Fallback */}
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-6xl font-bold">
                                    LJ
                                </div>
                                {/* Actual Image */}
                                <img
                                    src="/portfolio.jpeg"
                                    alt="Ligil V James"
                                    // className="absolute inset-0 w-full h-full object-cover"
                                    className="absolute object-contain rounded-2xl"

                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Name */}
                        <h2 className="text-3xl font-bold mb-6 text-center">Ligil</h2>

                        {/* Fire icon with dashed line */}
                        <div className="flex items-center justify-center mb-6 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-12 border-l-2 border-dashed border-orange-500 opacity-50"></div>
                            <div className="bg-orange-500 text-white p-3 rounded-full relative z-10">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-center text-gray-600 mb-8 text-sm leading-relaxed">
                            A Software Engineer who has developed countless innovative solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4">
                            {/* <a href="#" className="p-3 text-orange-500 hover:bg-orange-50 rounded-full transition-colors">
                                <Dribbble size={20} />
                            </a> */}
                            <a target="_blank" href="https://twitter.com/ligilvjames" className="p-3 text-orange-500 hover:bg-orange-50 rounded-full transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a target="_blank" href="https://github.com/ligilv" className="p-3 text-orange-500 hover:bg-orange-50 rounded-full transition-colors">
                                <Github size={20} />
                            </a>
                            <a target="_blank" href="https://www.youtube.com/@ligilvj" className="p-3 text-orange-500 hover:bg-orange-50 rounded-full transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-6 lg:p-12 space-y-12">
                    {/* Hero Section */}
                    <section id="home" className="space-y-8">
                        <div>
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6">
                                SOFTWARE<br />
                                <span className="text-gray-600">ENGINEER</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                                Passionate about creating intuitive and engaging user experiences.
                                Specialize in transforming ideas into beautifully crafted products.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
                            <div className="space-y-2">
                                <div className="text-5xl font-bold">+4</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">
                                    Years of<br />Experience
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-5xl font-bold">+8</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">
                                    Projects<br />Completed
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-5xl font-bold">+2</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">
                                    Worldwide<br />Clients
                                </div>
                            </div>
                        </div>

                        {/* Colorful Tech Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                                    {/* <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg> */}
                                </div>
                                <div className="relative z-10">
                                    <div className="text-4xl mb-4">💻</div>
                                    <h3 className="text-2xl font-bold mb-2">App Development,<br />Web Development</h3>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-lime-400 to-lime-500 rounded-3xl p-8 text-black relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    {/* <div className="absolute top-0 right-0 w-full h-full" style={{
                                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 37px)',
                                    }}></div> */}
                                </div>
                                <div className="relative z-10">
                                    <div className="text-4xl mb-4">👨‍💻</div>
                                    <h3 className="text-2xl font-bold mb-2">React native, Next js, Django</h3>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="space-y-8">
                        <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500">Recent Projects</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    className="group block bg-[#252525] rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
                                >
                                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                                        {project.image && (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                        <p className="text-sm text-gray-500">{project.subtitle}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Experience Section */}
                    <section id="experience" className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold">
                            4 Years of<br />Experience
                        </h2>

                        <div className="space-y-8 max-w-3xl">
                            {experience.map((exp, index) => (
                                <div key={index} className="border-t border-white/10 pt-6">
                                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                                            <p className="text-gray-400">{exp.role}</p>
                                        </div>
                                        <div className="text-sm text-gray-500">{exp.period}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-20">
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 md:p-20 text-center max-w-4xl">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">
                                Let's Work<br />Together
                            </h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                                Have a project in mind? Let's create something extraordinary together.
                            </p>
                            <a
                                href="mailto:contact@example.com"
                                className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </section>
                </main>
            </div>

            {/* Video Tutorial Button */}
            {/* <div className="fixed bottom-6 left-6 z-50">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg">
                    <Youtube size={20} />
                    Video Tutorial
                </button>
            </div> */}
        </div>
    );
}
