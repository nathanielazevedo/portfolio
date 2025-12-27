import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full border border-black dark:border-none p-[1px] rounded-[20px] shadow-sm dark:shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary dark:bg-dark-tertiary rounded-[20px]  px-12 min-h-[100px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-text dark:text-dark-white-100 text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

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
        modern software systems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
