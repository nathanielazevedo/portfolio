import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-tertiary dark:text-dark-secondary`}
        >
          Introduction
        </p>
        <p
          className={`${styles.sectionHeadText} text-text dark:text-dark-white-100`}
        >
          Overview
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-text dark:text-dark-white-100 text-[17px] max-w-3xl leading-[30px]"
      >
        Software engineer and lab automation specialist building full-stack
        systems, laboratory automation software, and IoT tools. Experienced with
        React, TypeScript, Python, Django, FastAPI, cloud infrastructure, and
        integrating laboratory machines like Hamilton, Tecan, and Biomek into
        modern software systems. Check out my new course at{" "}
        <a
          href="https://course.nateazevedo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary dark:text-dark-secondary underline underline-offset-4"
        >
          course.nateazevedo.com
        </a>
        .
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
