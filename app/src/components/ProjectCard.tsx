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
        <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] shadow-2xl">
            <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="p-8 relative z-20">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/30 transition-all duration-300 hover:rotate-12 border border-white/10"
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
                <p className="text-white/60 mb-8 leading-relaxed font-light">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold bg-white/5 text-white/80 rounded-full border border-white/10 backdrop-blur-sm"
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
