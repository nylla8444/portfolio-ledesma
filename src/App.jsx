import { Link, Outlet } from "react-router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Global Navigation */}
      <nav className="p-4 bg-gray-800 text-white">
        <div className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  )
}

export default App
