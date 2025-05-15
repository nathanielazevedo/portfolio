import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="w-full py-20 mx-auto bg-primary text-text dark:bg-dark-primary dark:text-dark-white-100">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex items-start gap-8 pt-48`}
      >
        {/* Side bar gradient */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-30 bg-gradient-to-b from-[#915eff] to-transparent" />
        </div>

        {/* Hero text */}
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm{" "}
            <span className="text-[#995eff] dark:text-purple-700">Nate</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I develop performant&nbsp;
            <br className="sm:block hidden" />
            and attractive web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
