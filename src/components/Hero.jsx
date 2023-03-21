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
            I develop performant &nbsp;
            <br className="sm:block hidden" />
            and attractive web applications.
          </p>
        </div>
        <img src={me} height="200px" width="200px" className="ml-auto lg:mr-40 rounded-full"/>
      </div>
      <div className="w-full flex justify-center items-center xs:max-sm:pt-20">
        <ul className={`flex flex-col justify-center items-start md:text-xl [&>li]:mt-3 ${styles.paddingX}`}>
            <li>&#8226; I'm looking for positions as a Front-End / Full-Stack developer.</li>
            <li>&#8226; Passionate about building web applications using TypeScript, React and Python.</li>
            <li>&#8226; Skilled in building responsive and user-friendly interfaces using HTML, CSS, and JavaScript</li>
            <li>&#8226; Experienced in developing and maintaining databases using SQL and NoSQL.</li>
            <li>&#8226; I worry a lot about wasting company money.</li>
            <li>&#8226; I want to work on a  product I truly care about.</li>
            <li>&#8226; I'm really nice to people and dogs.</li>
        </ul>
      </div>
    </section>
  );
};

 const text ="Passionate about building web applications using React and Python, with experience developing both front-end and back-end components of web applications. Skilled in designing responsive and user-friendly interfaces using HTML, CSS, and JavaScript, and have experience building scalable APIs using Flask or Django frameworks in Python. Experienced in developing and maintaining databases using SQL, with a strong understanding of database design principles and ability to optimize queries for high performance. Strong problem-solving skills and ability to work collaboratively with cross-functional teams, including product managers, designers, and other developers, to deliver high-quality web applications. Dedicated to continuous learning and keeping up-to-date with the latest web development trends and best practices, with a passion for building efficient and scalable web applications that solve real-world problems."

export default Hero;
