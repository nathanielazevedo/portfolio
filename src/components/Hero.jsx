import React from "react";
import { styles } from "../styles";
import { headshot } from "../assets/index.js";

const Hero = () => {
  return (
    <section className="w-full py-20 bg-primary text-text dark:bg-dark-primary dark:text-dark-white-100">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10 pt-28 sm:pt-48`}
      >
        {/* Side bar gradient */}
        <div className="hidden sm:flex flex-col justify-center items-center mt-8">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-b from-[#915eff] to-transparent" />
        </div>

        {/* Hero text + image */}
        <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-10 items-center justify-between w-full text-center sm:text-left">
          {/* Text */}
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm{" "}
              <span className="text-[#995eff] dark:text-purple-700">Nate</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4`}>
              Software Engineer | Lab Automation & IoT
              <br className="sm:block hidden" />
              Full-Stack Systems for Scientific Research
            </p>
          </div>

          {/* Headshot */}
          <img
            src={headshot}
            alt="Nate Azevedo headshot"
            className="w-48 h-48 sm:w-80 sm:h-80 rounded-full object-cover border-2 border-black dark:border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
