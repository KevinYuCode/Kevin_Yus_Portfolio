import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "../components/Container";
import { motion } from "framer-motion";
function LandingPage() {
  const btnVariants = {
    hidden: {
      opacity: 0,
      originX:0,
      scaleX:0,
    },
    visible: {
      originX:0,
      opacity: 1,
      scaleX:1,
      transition: {
        delay:1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container classProp="">
      <div className="landing-page-container col-c-c">
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
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          speed={1}
        ></TypeAnimation>
        <h3>Computer Engineer & Full-Stack Developer</h3>
        <motion.a href="" variants={btnVariants} initial={"hidden"} animate={"visible"}>
          Learn More
        </motion.a>
      </div>
    </Container>
  );
}

export default LandingPage;
