export default function ProjectDetails({ project }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{project.title}</h2>
            <p>{project.description}</p>
        </div>
    );
}
