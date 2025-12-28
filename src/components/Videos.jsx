import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Add your YouTube video IDs here
const youtubeVideos = [
  {
    id: "w0Kvt65Z2Uk?si=XOnLvUhLMLWElqRy", // Replace with actual YouTube video ID
    title: "React.js Interview",
  },
  {
    id: "vweARwTPmg4?si=6NBOcZYhbnp1-e_R", // Replace with actual YouTube video ID
    title: "React.js Interview",
  },
];

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@nate_azevedo"; // Replace with your channel URL

const VideoCard = ({ video, index }) => {
  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <div className="bg-tertiary dark:bg-dark-tertiary border border-black dark:border-none p-5 rounded-2xl shadow-sm dark:shadow-card h-full">
        <div className="relative w-full h-[230px]">
          <iframe
            className="w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-5">
          <h3 className="text-text dark:text-dark-white-100 font-bold text-[20px]">
            {video.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Videos = () => {
  return (
    <div className="mt-12 bg-black-100 dark:bg-dark-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary dark:bg-dark-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.25 }}
          variants={textVariant()}
        >
          <p className={styles.sectionSubText}>My Content</p>
          <h2 className={styles.sectionHeadText}>Videos.</h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {youtubeVideos.map((video, index) => (
          <VideoCard key={`video-${index}`} video={video} index={index} />
        ))}
      </div>

      <div className={`${styles.paddingX} pb-14 flex justify-center`}>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tertiary dark:bg-dark-tertiary border border-black dark:border-none py-3 px-8 rounded-xl outline-none w-fit text-text dark:text-dark-white-100 font-bold shadow-md shadow-primary hover:bg-primary dark:hover:bg-dark-primary transition-colors duration-300"
        >
          Visit My YouTube Channel
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Videos, "videos");
