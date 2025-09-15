import { useParams, Link } from "react-router";
import { Github, ExternalLink, ArrowLeft, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import projects from "../data/projects.json";
import ColorSelect from "./ColorSelect";
import thumbnailMap from "../utils/ProjectThumbnails";

const statusConfig = {
    completed: { icon: CheckCircle, color: 'text-green-1', bg: 'bg-green-1/10' },
    'in-progress': { icon: Clock, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    paused: { icon: AlertCircle, color: 'text-orange-400', bg: 'bg-orange-400/10' }
};

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-60vh text-center">
                <h2 className="text-2xl font-doto font-bold text-white mb-4">Project not found</h2>
                <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
                <Link
                    to="/"
                    className="flex items-center gap-2 bg-secondary-black border border-green-1 rounded-lg px-4 py-2 text-white transition-all text-sm
                    shadow-[2px_2px_0px_0px_var(--color-green-1)] hover:shadow-[1px_1px_0px_0px_var(--color-green-1)] 
                    hover:translate-x-[1px] hover:translate-y-[1px] hover:text-green-1"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>
        );
    }

    const StatusIcon = statusConfig[project.status]?.icon || CheckCircle;

    const thumbnailSrc = project.id && thumbnailMap[project.id]
        ? thumbnailMap[project.id]
        : null;

    return (
        <div className="max-w-4xl mx-auto mt-5">
            {/* Header Section */}
            <div className="mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-green-1 transition-colors mb-6 text-sm"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <div className="mb-6">
                    <h1 className="text-3xl xl:text-4xl font-doto font-bold text-white mb-4">
                        {project.title}
                    </h1>

                    {/* Project Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar size={16} />
                            {project.date}
                        </div>

                        <div className={`flex items-center gap-2 px-3 py-1 rounded-lg text-sm ${statusConfig[project.status]?.bg || 'bg-gray-400/10'}`}>
                            <StatusIcon size={16} className={statusConfig[project.status]?.color || 'text-gray-400'} />
                            <span className={statusConfig[project.status]?.color || 'text-gray-400'}>
                                {project.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        {project.sourceCodeUrl && (
                            <a
                                href={project.sourceCodeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-secondary-black border border-tertiary-black rounded-lg px-4 py-2 text-white transition-all text-sm
                                shadow-[2px_2px_0px_0px_var(--color-tertiary-black)] hover:shadow-[1px_1px_0px_0px_var(--color-green-1)] 
                                hover:translate-x-[1px] hover:translate-y-[1px] hover:text-green-1 hover:border-green-1"
                            >
                                <Github size={16} />
                                View Source Code
                            </a>
                        )}

                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-secondary-black border border-green-1 rounded-lg px-4 py-2 text-white transition-all text-sm
                                shadow-[2px_2px_0px_0px_var(--color-green-1)] hover:shadow-[1px_1px_0px_0px_var(--color-green-1)] 
                                hover:translate-x-[1px] hover:translate-y-[1px] hover:text-green-1"
                            >
                                <ExternalLink size={16} />
                                View Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Image */}
            {thumbnailSrc && (
                <div className="mb-8">
                    <div className="bg-secondary-black border border-tertiary-black rounded-lg overflow-hidden">
                        <div className="relative aspect-video w-full">
                            <img
                                src={thumbnailSrc}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-contain"
                                onError={(e) => {
                                    console.error("Failed to load image:", thumbnailSrc);
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Description */}
                    <section>
                        <h2 className="text-xl font-doto font-bold text-white mb-4">About this project</h2>
                        <p className="text-gray-400 font-figtree leading-relaxed">
                            {project.description}
                        </p>
                    </section>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <section>
                            <h2 className="text-xl font-doto font-bold text-white mb-4">Key Features</h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-400 font-figtree">
                                        <div className="w-1.5 h-1.5 bg-green-1 rounded-full mt-2 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                        <section>
                            <h3 className="text-lg font-doto font-bold text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-secondary-black border border-tertiary-black rounded-lg px-3 py-2 text-white text-sm
                                        shadow-[1px_1px_0px_0px_var(--color-tertiary-black)] hover:shadow-[1px_1px_0px_0px_var(--color-green-1)] 
                                        hover:text-green-1 transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                        <section>
                            <h3 className="text-lg font-doto font-bold text-white mb-4">Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-green-1/10 border border-green-1/30 text-green-1 px-3 py-1 rounded-lg text-xs font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Color Select - Fixed Position */}
            <div className="fixed top-6 right-4 z-50">
                <ColorSelect />
            </div>
        </div>
    );
}

export default ProjectDetail;