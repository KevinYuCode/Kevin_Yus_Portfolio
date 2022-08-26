import "./App.css";
import LandingPage from "./views/LandingPage";
import Nav from "./views/Nav";
import About from "./views/About";
import Work from "./views/Work";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import { animateScroll as scroll } from "react-scroll";
function App() {
  const scrollTo = (pageId) => {
    let page = document.getElementById(pageId);
    console.log(page.offsetTop);
    // window.scrollTo(0, page.offsetTop);
    scroll.scrollTo(page.offsetTop - 70);
  };

  return (
    <div className="App">
      <Nav scrollTo={scrollTo} />
      <LandingPage scrollTo={scrollTo} />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
