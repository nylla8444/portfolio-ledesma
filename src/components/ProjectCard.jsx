import { Link } from "react-router";

export default function ProjectDetails({ project }) {
    return (
        <Link to={`/projects/${project.id}`}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">

            <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
            <div className="mt-2">
                <p className="text-sm text-gray-600">Tech stack:</p>
                <ul className="flex flex-wrap gap-2 mt-1">
                    {project.techStack.map((tech) => (
                        <li
                            key={tech}
                            className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </Link>
    );
}
