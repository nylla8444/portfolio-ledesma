import { Link } from "react-router";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <div className="bg-main-black border border-tertiary-black rounded-lg p-4 hover:border-green-1 transition-all duration-300 group flex items-center gap-4">

            {/* Project Image/Preview - Left side, smaller */}
            <div className="w-24 h-16 bg-secondary-black rounded-lg overflow-hidden flex-shrink-0">
                {project.thumbnail ? (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                        Preview
                    </div>
                )}
            </div>

            {/* Project Info - Center, takes most space */}
            <div className="flex-1">
                <Link to={`/projects/${project.id}`}>
                    <h3 className="text-white font-jetbrains-mono font-semibold text-base hover:text-green-1 transition-colors mb-1">
                        {project.title}
                    </h3>
                </Link>

                <p className="text-gray-400 text-sm font-figtree leading-relaxed">
                    {project.description}
                </p>
            </div>

            {/* Action Links - Right side */}
            <div className="flex items-center gap-2 flex-shrink-0">
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