import React from "react";
import { styles } from "../styles";
import me from "../assets/me.png"

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} max-w-7x1 mx-auto flex items-start gap-5 pt-32`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#995eff]">Nate</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop performant
            <br className="sm:block hidden" />
            and attractive web applications.
          </p>
        </div>
        <img src={me} height="200px" width="200px" className="ml-auto lg:mr-40 rounded-full"/>
      </div>
      <div className=" w-full flex justify-center items-center xs:max-sm:pt-20">
        <ul className={`flex flex-col justify-center items-start [&>li]:mt-3 ${styles.paddingX} ${styles.heroSubText}`}>
            <li>&#8226; I'm looking for positions as a Front-End / Full-Stack developer.</li>
            <li>&#8226; I like React, Express and anything Python.</li>
            <li>&#8226; I have experience with both SQL and NoSQL databases.</li>
            <li>&#8226; I'm familiar with devops like AWS and Docker but I need to study more.</li>
            <li>&#8226; I want to work for a product based company.</li>
            <li>&#8226; I've programmed in both very large and very small groups.</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
