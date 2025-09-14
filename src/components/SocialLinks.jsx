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
                            className="flex items-center gap-2 bg-secondary-black border border-green-1 rounded-lg px-3 py-2 text-white transition-all text-sm"
                            style={{
                                boxShadow: `2px 2px 0px 0px var(--color-green-1)`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-green-1)';
                                e.currentTarget.style.boxShadow = '1px 1px 0px 0px var(--color-green-1)';
                                e.currentTarget.style.transform = 'translate(2px, 2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.boxShadow = '2px 2px 0px 0px var(--color-green-1)';
                                e.currentTarget.style.transform = 'translate(0px, 0px)';
                            }}
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