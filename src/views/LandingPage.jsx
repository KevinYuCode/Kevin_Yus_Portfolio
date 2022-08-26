import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "../components/Container";
import { motion } from "framer-motion";
function LandingPage({ scrollTo }) {
  const btnVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
      originX: 0,
      scaleX: 0,
    },
    visible: {
      opacity: 1,
      x: "0",
      scaleX: 1,
      transition: {
        opacity: { delay: 5.5, duration: 1.5 },
        delay: 5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container classProp="">
      <div id="landingPage" className="landing-page-container col-c-c">
        <TypeAnimation
          sequence={[
            2000,
            "Kevin-Yu", // Types 'One'
            500, // Waits 1s
            "Kevin", // Types 'One'
            1000, // Waits 1s
            "Kevin Yu", // Types 'One'
            30000,
            "",
            1000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          speed={1}
        ></TypeAnimation>
        <h3>Computer Engineer & Full-Stack Developer</h3>
        <motion.button
          onClick={() => {
            scrollTo("about");
          }}
          variants={btnVariants}
          initial={"visible"}
          animate={"visible"}
        >
          Learn More
        </motion.button>
      </div>
    </Container>
  );
}

export default LandingPage;
