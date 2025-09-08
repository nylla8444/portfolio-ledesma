import { useParams } from "react-router";
import projects from "../data/projects.json";

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <h2 className="text-xl font-bold">Project not found</h2>;
    }

    return (
        <div className="p-4">
            <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-60 object-cover rounded"
            />
            <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
            <span>{project.date} - {project.status}</span>
            <p>{project.description}</p>

            <div className="flex space-x-4 mt-4">
                <a href={project.githubLink} className="text-blue-500 hover:underline">
                    View Source Code
                </a>

                <a href={project.demoLink} className="text-blue-500 hover:underline">
                    View Live Demo
                </a>
            </div>

            <div className="mt-4">
                <p className="text-gray-700">Tech stack:</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                        <li
                            key={tech}
                            className="bg-gray-200 px-2 py-1 rounded text-sm"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div>
                <h2>Features</h2>
                <ul className="list-disc list-inside">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectDetail;
