import { Mail, Twitter, Github, Linkedin, Facebook } from "lucide-react";
import socialsData from "../data/socials.json";

const iconMap = {
    Mail,
    Twitter,
    Github,
    Linkedin,
    Facebook
};

export default function SocialLinks({ className }) {
    return (
        <div className={`${className}`}>
            <p className="text-white font-doto font-bold text-lg mb-4">
                Here&apos;s where you can find me <span className="text-gray-400">(digitally)</span>
            </p>

            <div className="flex flex-wrap gap-3">
                {socialsData.map((social) => {
                    const IconComponent = iconMap[social.icon];
                    return (
                        <a
                            key={social.id}
                            href={social.url}
                            target={social.id === "email" ? "_self" : "_blank"}
                            rel={social.id === "email" ? undefined : "noreferrer"}
                            className="theme-accent-button flex items-center gap-2 bg-secondary-black border rounded-lg px-3 py-2 text-white text-sm"
                        >
                            <IconComponent size={16} />
                            {social.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}