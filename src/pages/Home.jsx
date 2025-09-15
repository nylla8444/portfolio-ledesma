import { Download } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import Separator from "../components/Separator";

import techStackData from "../data/techStack.json";
import ColorSelect from "../components/ColorSelect";
import GitHubStats from "../components/GitHubStats";
import SocialLinks from "../components/SocialLinks";
import TechIcon from "../components/TechIcon";

import githubProfile from "../assets/github-profile.jpg";

export default function Home() {
    return (
        <div className="overflow-hidden p-4 pt-10">
            {/* Personal Info and Projects */}
            <section className=" flex flex-col lg:flex-row">

                <section className="flex-1">
                    <div className="flex flex-col xl:flex-row items-center justify-between flex-1 w-full">

                        <div className="flex items-center mb-5 xl:mb-0">
                            {/* GitHub Profile Picture */}
                            <a href="https://github.com/nylla8444" target="_blank" rel="noreferrer">
                                <img src={githubProfile}
                                    className="rounded-full size-20 hover:border-2 border-green-1 transition-colors duration-300 cursor-pointer"
                                    alt="my github profile" />
                            </a>

                            {/* Name and Twitter Handle */}
                            <div className="pl-4">
                                <h1 className="font-doto font-extrabold xl:font-extrabold tracking-wider text-2xl xl:text-3xl leading-8 text-white-faded">NYLLA</h1>
                                <a href="https://www.x.com/nylla8444/" target="_blank" rel="noreferrer">
                                    <p className="text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-pointer
                                                text-sm font-jetbrains-mono mt-1
                                    ">@nylla8444</p>
                                </a>

                            </div>
                        </div>


                        <div className="flex">
                            {/* Availability Status */}
                            <div className="flex items-center justify-center gap-2">
                                <div className="flex items-center bg-secondary-black border border-tertiary-black rounded-lg px-3 py-2 gap-2">
                                    <div className="relative">
                                        <div className="w-3 h-3 bg-green-1 rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 w-3 h-3 bg-green-1 rounded-full animate-ping opacity-75"></div>
                                    </div>
                                    <span className="text-white font-medium text-xs">Available for work</span>
                                </div>

                                {/* Download CV */}
                                <a href="/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-secondary-black border border-tertiary-black rounded-lg px-3 py-2 text-white font-medium text-xs gap-2
                                        shadow transition hover:border-green-1 focus:outline-none
                                        whitespace-nowrap">
                                    <Download size={16} />
                                    Download CV
                                </a>


                            </div>
                        </div>
                    </div>

                    {/* About Me */}
                    <div className="mt-6 md:mr-5 xl:mt-10 space-y-4 text-sm xl:text-base font-jetbrains-mono text-gray-400 leading-6 text-left font-normal">
                        <p>I&apos;m <b className="text-white">Nylla</b>, a junior developer from the Philippines who&apos;s always <b className="text-white">building</b>, <b className="text-white">experimenting</b>, and <b className="text-white">learning</b>.</p>
                        <p>I dive into code not just to make things work, but to <b className="text-white">make them meaningful.</b> </p>
                        <p>I&apos;m the kind of person who <b className="text-white">loves figuring out complex problems</b>, exploring different approaches, and pushing myself into new challenges.</p>
                        <p>I like <b className="text-white">structure</b>, but I don&apos;t shy away from <b className="text-white">creativity</b>. I enjoy shaping ideas into <b className="text-white">real projects</b> that are clear and useful.</p>
                        <p>Most days you&apos;ll find me <b className="text-white">learning</b>, <b className="text-white">tinkering</b>, and <b className="text-white">problem-solving</b>, always driven by curiosity and the belief there&apos;s a <b className="text-white">smarter way forward</b>.</p>
                    </div>


                    <Separator />
                    {/* Social Links */}
                    <SocialLinks className={"mt-6 md:mr-5 "} />
                    <Separator />
                </section >

                {/* Projects Section - Scrollable */}
                <section className="flex-1 ml-0 md:ml-5 mt-6 lg:mt-0 ">
                    <div className=" flex flex-col">
                        {/* Section Header */}
                        <div className="mb-2 flex">
                            <h2 className="text-white font-doto font-bold text-lg mr-5">Some things I've built</h2>
                            <p className="text-gray-400 text-sm font-jetbrains-mono mt-1">A showcase of my projects</p>
                        </div>

                        {/* Scrollable Projects Container */}
                        <div className="flex-1 overflow-y-auto max-h-50dvh md:max-h-460 space-y-4 pr-2 custom-scrollbar">
                            {projectsData.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>

                    </div>

                    {/* TEST- GitHubStats */}
                    <div className="mt-5">
                        <GitHubStats />

                    </div>
                </section>
                <Separator className={"block lg:hidden"} />
            </section>


            {/* Tech Stack Section */}
            <section>
                <div className="mt-4 lg:mt-0">
                    <p className="text-white font-doto font-bold text-lg mb-4">
                        Technologies I work with:
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {techStackData.map((tech) => (
                            <div
                                key={tech.id}
                                className="flex items-center gap-2 bg-secondary-black border border-tertiary-black rounded-lg px-3 py-2 text-white transition-all text-sm"
                                style={{
                                    boxShadow: `1px 1px 0px 0px var(--color-green-1)`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translate(1px, 1px)';
                                    e.currentTarget.style.boxShadow = '0px 0px 0px 0px var(--color-green-1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translate(0px, 0px)';
                                    e.currentTarget.style.boxShadow = '1px 1px 0px 0px var(--color-green-1)';
                                }}
                            >
                                <TechIcon id={tech.id} name={tech.name} />
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>



            </section >

            <div className="fixed top-6 right-4 z-50">
                <ColorSelect />
            </div>
        </div >

    );
}




// TODO: put click sfx on socials
// TODO: preview on hover on each projects
// TODO: make Technologies Draggable just for fun

