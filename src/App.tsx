import "./App.css";
import LandingPage from "./views/LandingPage";
import Nav from "./views/Nav";
import About from "./views/About";
import Work from "./views/Work";
import Projects from "./views/Hackathons";
import Contact from "./views/Contact";
// import LoadingPage from "./views/LoadingPage";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import React from "react";
function App() {
  const isIpad = useMediaQuery({ query: "(max-width: 900px)" });

  const scrollTo = (pageId: any) => {
    let page = document.getElementById(pageId);
    if (!page) return;
    
    scroll.scrollTo(page?.offsetTop - (isIpad ? 50 : 70));
    if (isIpad) setNavOn(false);
  };
  const [navOn, setNavOn] = useState(false);
  useEffect(() => {
    if (!isIpad) setNavOn(true);
  }, [isIpad]);
  return (
    <div className="App">
      {/* <LoadingPage /> */}
      <Nav
        scrollTo={scrollTo}
        toggleNav={setNavOn}
        navOn={navOn}
        isIpad={isIpad}
      />
      <LandingPage scrollTo={scrollTo} />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
