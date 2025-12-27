import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import gallery images
import baby from "../assets/gallery/baby.png";
import china from "../assets/gallery/china.png";
import china2 from "../assets/gallery/china2.png";
import fish from "../assets/gallery/fish.png";
import flowers from "../assets/gallery/flowers.png";
import newyork from "../assets/gallery/newyork.png";
import pig from "../assets/gallery/pig.png";
import pretty from "../assets/gallery/pretty.png";
import puertoRico from "../assets/gallery/puerto_rico.png";
import puertoRi from "../assets/gallery/pureto_ri.png";
import snow from "../assets/gallery/snow.png";
import img0214 from "../assets/gallery/IMG_0214.png";
import img2963 from "../assets/gallery/IMG_2963.JPG";

const galleryImages = [
  { src: baby, alt: "Baby" },
  { src: china, alt: "China" },
  { src: china2, alt: "China 2" },
  { src: fish, alt: "Fish" },
  { src: flowers, alt: "Flowers" },
  { src: newyork, alt: "New York" },
  { src: pig, alt: "Pig" },
  { src: pretty, alt: "Pretty" },
  { src: puertoRico, alt: "Puerto Rico" },
  { src: puertoRi, alt: "Puerto Rico 2" },
  { src: snow, alt: "Snow" },
  { src: img0214, alt: "Image 0214" },
  { src: img2963, alt: "Image 2963" },
];

const GalleryCard = ({ image, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn("up", "spring", index * 0.1, 0.75)}
        className="relative group cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative overflow-hidden rounded-lg aspect-square bg-black">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 brightness-100"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      </motion.div>

      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setIsExpanded(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
              onClick={() => setIsExpanded(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Gallery = () => {
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
          <p className={styles.sectionSubText}>My Memories</p>
          <h2 className={styles.sectionHeadText}>Gallery.</h2>
        </motion.div>
      </div>

      <div
        className={`${styles.paddingX} -mt-20 pb-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
      >
        {galleryImages.map((image, index) => (
          <GalleryCard key={`gallery-${index}`} image={image} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Gallery, "gallery");
