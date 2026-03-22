import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="w-full max-w-6xl mx-auto p-4 pt-10">
            <div className="min-h-70dvh flex items-center justify-center">
                <div className="w-full max-w-2xl bg-secondary-black/60 border border-tertiary-black rounded-xl p-6 md:p-8 text-center">
                    <p className="text-xs md:text-sm font-jetbrains-mono text-gray-500 mb-3">Error 404</p>
                    <h1 className="font-doto font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
                        This route does not exist
                    </h1>
                    <p className="font-figtree text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                        The page you are looking for may have been moved, renamed, or never existed in this build.
                    </p>

                    <div className="flex justify-center">
                        <Link
                            to="/"
                            className="theme-accent-button inline-flex items-center justify-center bg-secondary-black border rounded-lg px-4 py-2 text-white font-medium text-sm"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
