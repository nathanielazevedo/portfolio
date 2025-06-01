import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => window.open(live_link, "_blank")}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary dark:bg-dark-tertiary border border-black dark:border-none p-5 rounded-2xl cursor-pointer shadow-sm dark:shadow-card h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="bg-dark-black-200 border border-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-text dark:text-dark-white-100 font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-text dark:text-dark-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color} dark:text-dark-white-100`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-left"
      >
        <p
          className={`${styles.sectionSubText} text-tertiary dark:text-dark-secondary`}
        >
          My projects
        </p>
        <p
          className={`${styles.sectionHeadText} text-text dark:text-dark-white-100`}
        >
          Projects
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-4 text-text dark:text-dark-white-100 text-[17px] max-w-3xl leading-[30px] text-left"
      >
        The following projects showcase my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos. They reflect my ability to
        solve complex problems, work with different technologies, and manage
        projects effectively.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-7 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
