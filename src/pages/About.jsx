import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import techStackData from "../data/techStack.json";

const timeline = [
    {
        period: "2025 - Present",
        title: "Building Portfolio-Driven Projects",
        description: "Focused on shipping practical web and systems projects while improving architecture, UI quality, and maintainability.",
    },
    {
        period: "2024 - 2025",
        title: "Foundation and Deep Practice",
        description: "Strengthened core JavaScript and React skills, explored full-stack development, and built consistent implementation habits.",
    },
    {
        period: "2023 - 2024",
        title: "Early Development Exploration",
        description: "Started hands-on development with small applications and experiments to build confidence in problem solving and delivery.",
    },
];

export default function About() {
    const coreStack = techStackData.slice(0, 12);

    return (
        <section className="w-full max-w-4xl mx-auto mt-5 p-4">
            <header className="mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[var(--theme-primary)] transition-colors mb-6 text-sm"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <div className="bg-secondary-black/60 border border-tertiary-black rounded-xl p-6 md:p-7">
                    <p className="text-xs font-jetbrains-mono text-[var(--theme-primary)] mb-2">Developer Profile</p>
                    <h1 className="font-doto font-bold text-3xl md:text-4xl text-white mb-3">About Nylla</h1>
                    <p className="font-figtree text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
                        I build software with a balance of structure and curiosity, focusing on reliability, thoughtful architecture, and user-facing clarity.
                    </p>
                </div>
            </header>

            <div className="space-y-6">
                <section className="bg-secondary-black/60 border border-tertiary-black rounded-xl p-6">
                    <h2 className="font-doto font-bold text-xl text-white mb-4">Bio and Mission</h2>
                    <div className="space-y-3 text-gray-400 font-figtree text-sm md:text-base leading-relaxed">
                        <p>
                            I am Nylla, a junior developer from the Philippines working toward senior-level engineering discipline through consistent project delivery.
                        </p>
                        <p>
                            My mission is to build products that are not only functional, but also thoughtfully structured, maintainable, and easy to evolve.
                        </p>
                    </div>
                </section>

                <section className="bg-secondary-black/60 border border-tertiary-black rounded-xl p-6">
                    <h2 className="font-doto font-bold text-xl text-white mb-4">Experience Timeline</h2>
                    <div className="space-y-4">
                        {timeline.map((item) => (
                            <article key={item.title} className="bg-main-black border border-tertiary-black rounded-lg p-4">
                                <p className="text-xs font-jetbrains-mono text-[var(--theme-primary)] mb-2">{item.period}</p>
                                <h3 className="text-white font-jetbrains-mono font-semibold text-base mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="bg-secondary-black/60 border border-tertiary-black rounded-xl p-6">
                    <h2 className="font-doto font-bold text-xl text-white mb-4">Core Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {coreStack.map((tech) => (
                            <span
                                key={tech.id}
                                className="bg-main-black border border-tertiary-black rounded-lg px-3 py-2 text-white text-xs md:text-sm hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)] transition-colors"
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}