import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const ProjectCard = ({ title, description, image, link, tags }: ProjectCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 transition-all duration-500 hover:bg-white/25 hover:border-white/35 hover:scale-[1.02] shadow-2xl">
            <div className="aspect-[16/10] md:aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-center transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="p-3 md:p-8 relative z-20">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-bold text-white tracking-tight">{title}</h3>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 md:p-2.5 rounded-full bg-white/25 text-white hover:bg-white/50 transition-all duration-300 hover:rotate-12 border border-white/25"
                    >
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                </div>
                <p className="text-white/80 mb-3 md:mb-8 text-xs md:text-base leading-relaxed font-light line-clamp-3 md:line-clamp-none">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold bg-white/15 text-white/95 rounded-full border border-white/25 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
