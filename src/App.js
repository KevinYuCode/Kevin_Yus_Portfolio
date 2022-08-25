import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./views/LandingPage";
import Nav from "./views/Nav";
import About from "./views/About";
import Work from "./views/Work";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
