import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <>
            <h1>My Projects</h1>
            <p>Here are some of my projects.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}


