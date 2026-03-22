import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <section className="w-full max-w-6xl mx-auto p-4 pt-10">
            <header className="mb-6 md:mb-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--theme-primary)] transition-colors mb-6 text-sm"
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </Link>
                        <h1 className="font-doto font-bold text-3xl md:text-4xl text-white">Projects</h1>
                        <p className="font-figtree text-gray-400 text-sm md:text-base mt-2">
                            A full list of shipped and in-progress work.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-secondary-black border border-tertiary-black rounded-lg px-3 py-2 text-sm text-gray-300 w-fit">
                        <span className="w-2 h-2 rounded-full bg-[var(--theme-primary)]" />
                        {projects.length} projects
                    </div>
                </div>
            </header>

            <div className="bg-main-black/50 border border-tertiary-black rounded-xl p-3 md:p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}


