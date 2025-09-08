import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-6">Oops! The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Go Home
            </Link>
        </div>
    );
}
