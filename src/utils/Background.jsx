import { useTheme } from '../context/useTheme.jsx';

export default function Background({ children }) {
    const { theme } = useTheme();

    return (
        <div className="min-h-screen w-full relative">
            {/* Dynamic Background */}
            <div
                className="absolute inset-0 z-0 transition-all duration-500"
                style={{
                    background: theme.background,
                }}
            />
            {children}
        </div>
    );
}