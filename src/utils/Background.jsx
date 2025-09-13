export default function Background({ children }) {
    return (
        <div className="min-h-screen w-full relative">
            {/* Emerald Void */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 50%, #072607 100%)",
                }}
            />
            {children}
        </div>
    );
}


