import reactIcon from "../assets/svg-icons/reactjs.svg";
import nodeIcon from "../assets/svg-icons/nodejs.svg";
import gitIcon from "../assets/svg-icons/git.svg";
import githubIcon from "../assets/svg-icons/github.svg";
import vscodeIcon from "../assets/svg-icons/vscode.svg";
import htmlIcon from "../assets/svg-icons/html.svg";
import cssIcon from "../assets/svg-icons/css.svg";
import jsIcon from "../assets/svg-icons/js.svg";
import typescriptIcon from "../assets/svg-icons/typescript.svg";
import nextjsIcon from "../assets/svg-icons/nextjs.svg";
import tailwindcssIcon from "../assets/svg-icons/tailwindcss.svg";
import expressIcon from "../assets/svg-icons/express.svg";
import mongodbIcon from "../assets/svg-icons/mongodb.svg";
import postmanIcon from "../assets/svg-icons/postman.svg";
import vercelIcon from "../assets/svg-icons/vercel.svg";

// Map of tech IDs to their imported icons
const iconMap = {
    react: reactIcon,
    nodejs: nodeIcon,
    git: gitIcon,
    github: githubIcon,
    vscode: vscodeIcon,
    html: htmlIcon,
    css: cssIcon,
    javascript: jsIcon,
    typescript: typescriptIcon,
    nextjs: nextjsIcon,
    tailwindcss: tailwindcssIcon,
    expressjs: expressIcon,
    mongodb: mongodbIcon,
    postman: postmanIcon,
    vercel: vercelIcon,
    // Add a default icon as fallback
    default: githubIcon,
};

export default function TechIcon({ id, name }) {
    // Get the icon from the map or use default
    const iconSrc = iconMap[id] || iconMap.default;

    return (
        <img
            src={iconSrc}
            alt={name}
            className="w-4 h-4"
        />
    );
}