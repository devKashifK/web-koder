import { useEffect, } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import DarkMode from "./components/DarkMode/DarkMode";
import Protfolio from "./components/Protfolio/Protfolio";
import Resume from "./components/Resume/Resume";
import Services from "./components/Services/Services";
import Sidebar from "./components/sidebar/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css"

import Home from "./Pages/Home/Home";

function App() {
  const darkMode = useSelector((state) => state.dark.darkMode)
 


  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--body-color", "#000000ec");
      document.documentElement.style.setProperty("--title-color", "white");
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--container-color", "black");
      document.documentElement.style.setProperty("--shadow", "#ffff0064  0px 0px 4px");
      
    } else {
      document.documentElement.style.setProperty(
        "--body-color",
        "hsl(258, 60%, 98%)"
      )
      document.documentElement.style.setProperty(
        "--title-color",
        "hsl(244, 24%, 26%)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(244, 16%, 43%)"
      );
      document.documentElement.style.setProperty("--container-color", "#fff");
      document.documentElement.style.setProperty("--shadow", "0px 5px 20px 0px rgb(69 67 96 / 10%)");
    }
  }, [darkMode]);

  useEffect(() => {
    AOS.init({duration : 2000})
  })

  return (
    <>
      <Sidebar />
      <DarkMode  />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Protfolio />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
