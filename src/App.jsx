import { Link, Outlet } from "react-router";
import Footer from "./components/Footer";
import Background from "./utils/Background";

function App() {
  return (
    <Background>
      {/* Main Content */}
      <main className="relative z-10 text-white max-w-90dvw lg:max-w-6xl mx-auto min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <Outlet />
        </div>
        {/* Global Footer - Always at bottom */}
        <Footer />
      </main>
    </Background>
  );
}

export default App;
