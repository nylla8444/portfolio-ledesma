import { Link } from "react-router";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import thumbnailMap from "../utils/ProjectThumbnails";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-main-black border border-tertiary-black rounded-lg p-4 hover:border-green-1 transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">

            {/* Project Image/Preview - Top on mobile, left on desktop */}
            <div className="w-full sm:w-24 h-32 sm:h-16 bg-secondary-black rounded-lg overflow-hidden flex-shrink-0">
                {project.id && thumbnailMap[project.id] ? (
                    <img
                        src={thumbnailMap[project.id]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                        Preview
                    </div>
                )}
            </div>

            {/* Project Info - Middle section */}
            <div className="flex-1 w-full">
                <div className="flex items-start justify-between">
                    <Link to={`/projects/${project.id}`} className="block">
                        <h3 className="text-white font-jetbrains-mono font-semibold text-base hover:text-green-1 transition-colors mb-1">
                            {project.title}
                        </h3>
                    </Link>

                    {/* Action Links - Right on desktop, moved in mobile */}
                    <div className="flex items-center gap-2 sm:hidden">
                        {project.sourceCodeUrl && (
                            <a
                                href={project.sourceCodeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-gray-400 hover:text-green-1 transition-colors"
                                aria-label="View source code"
                            >
                                <Github size={18} />
                            </a>
                        )}

                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 text-gray-400 hover:text-green-1 transition-colors"
                                aria-label="View live project"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Limited description with ellipsis */}
                <p className="text-gray-400 text-sm font-figtree leading-relaxed mb-2 line-clamp-2 overflow-hidden"
                    title={project.description}>
                    {project.description}
                </p>

                {/* Mobile-only View Details button */}
                <div className="sm:hidden mt-2">
                    <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-xs text-green-1 hover:underline"
                    >
                        View details <ArrowRight size={12} />
                    </Link>
                </div>
            </div>

            {/* Action Links - Only visible on desktop */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                {project.sourceCodeUrl && (
                    <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-green-1 transition-colors"
                        aria-label="View source code"
                    >
                        <Github size={18} />
                    </a>
                )}

                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-green-1 transition-colors"
                        aria-label="View live project"
                    >
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>

        </div>
    );
}