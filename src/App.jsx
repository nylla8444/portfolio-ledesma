import { Link, Outlet } from "react-router";
import Footer from "./components/Footer";
import Background from "./utils/Background";

function App() {
  return (

    <Background>
      {/* Main Content */}
      <main className="relative z-10 text-white max-w-90dvw lg:max-w-80dvw mx-auto flex flex-col">
        <Outlet />
      </main>

      {/* Global Footer */}
      {/* <Footer /> */}
    </Background>

  );
}

export default App;
