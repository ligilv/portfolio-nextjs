'use client';

import { useEffect, useState } from 'react';
import { hyperspeedPresets } from "../hyperspeedPreset"
import TextType from '../../../../components/TextType';
import ProjectCard from '../ProjectCard';
import { LampContainer } from '@/components/ui/lamp';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

const projects = [
    {
        title: "StreamTV",
        description: "An ad-free, subscription-free video streaming platform. Browse and play M3U playlists directly in your browser with a sleek, minimalist interface.",
        image: "/projects/streamtv.png",
        link: "https://streamiobeta.netlify.app/",
        tags: ["React", "HLS", "Streaming"]
    },
    {
        title: "Hadana",
        description: "The premier CRM designed specifically for modern travel agents. Streamline lead management, bookings, and payments in one unified dashboard.",
        image: "/projects/hadana.png",
        link: "https://www.hadana.co/",
        tags: ["SaaS", "CRM", "Productivity"]
    },
    {
        title: "Gvty",
        description: "A professional branding tool and 'one-link' showcase. Create a high-end virtual resume and profile to stand out to recruiters and peers.",
        image: "/projects/gvty.png",
        link: "https://mygrvtylink.netlify.app/",
        tags: ["UX/UI", "Branding", "Minimalism"]
    },
    {
        title: "ContinueCV",
        description: "The ultimate tool for developers. Manage your base LaTeX CV, instantly customize it for any job link, and track your application status in one place.",
        image: "/projects/continue-cv.png",
        link: "https://continous-cv.netlify.app/",
        tags: ["LaTeX", "Automation", "DevTools"]
    }
];

export const Home = () => {
    const [showShowcase, setShowShowcase] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowShowcase(true);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-purple-500/30">
            {/* Fixed Background - Hyperspeed effect stays fixed while content scrolls */}

            {!showShowcase ?
                <div className="fixed inset-0 z-0">
                    <LampContainer><div></div></LampContainer>
                </div>

                :
                <div className="fixed inset-0" >

                    <BackgroundBeamsWithCollision className="bg-black/50 w-full h-full" ><div></div></BackgroundBeamsWithCollision>
                </div>

            }

            {/* Ambient Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full z-0 pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full z-0 pointer-events-none" />

            {/* Scrollable Content Layer */}

            <div className="relative z-10">
                {/* Hero Section - Pointer events none allowed mouse to pass through to background effect */}
                {!showShowcase && (
                    <section className="h-screen flex flex-col justify-center items-center pointer-events-none">
                        <TextType
                            text={["Building", "Crafting", "Executing"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-6xl md:text-9xl font-black text-white px-4 text-center tracking-tighter"
                            startOnVisible={true}

                        />
                        <div className="mt-12 flex flex-col items-center opacity-40 animate-pulse">
                            {/* <p className="text-white text-xs tracking-[0.3em] uppercase mb-4">Scroll to discover</p> */}
                            <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
                        </div>
                    </section>

                )}

                {/* Showcase Section - Re-enable pointer events for interaction */}
                {showShowcase && (
                    <section className="min-h-screen flex flex-col justify-start md:justify-center max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-0 pointer-events-auto animate-flip-emerge overflow-y-auto
                    ">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-20 gap-3 md:gap-6">
                            <div>
                                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-6 tracking-tight">Showcase</h2>
                                <p className="text-white/40 text-xs md:text-lg max-w-xl font-light hidden md:block">A curated collection of digital experiences focusing on utility, efficiency, and premium design.</p>
                            </div>
                            <div className="h-px flex-grow bg-white/10 mx-10 hidden md:block" />
                            <div className="text-white/20 text-xs md:text-sm font-mono uppercase tracking-widest bg-white/5 px-3 md:px-4 py-1.5 md:py-2 border border-white/10 rounded-full">
                                {projects.length} Selected Works
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " style={{ padding: '28px' }}>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Footer Section */}
                {/* <footer className="mt-32 py-20 border-t border-white/5 bg-black/50 backdrop-blur-sm pointer-events-auto">
                    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-2xl font-bold text-white mb-2">liiigi</h3>
                            <p className="text-white/30 text-sm">Building the future of the web.</p>
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="text-white/40 hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors">GitHub</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors">LinkedIn</a>
                        </div>
                        <p className="text-white/20 text-xs font-mono">
                            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
                        </p>
                    </div>
                </footer> */}
            </div>
        </div>
    )
}