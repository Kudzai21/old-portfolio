import React from "react";
import { motion } from "framer-motion";
import data from "../../../data/caseStudies.json";

const Hero = () => {
  // Find the case study with id 1
  const caseStudy = data.caseStudies.find((cs) => cs.id === 3);

  if (!caseStudy) {
    return <div>Loading...</div>; // You can show a loading message or handle missing data
  }

  const { hero } = caseStudy;

  // Variants for animation
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations for child elements
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-background h-screen w-full flex flex-col justify-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Heading and Description */}
        <motion.div
          className="flex flex-col items-start"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[12rem] mx-5 font-medium sm:w-1/2 flex flex-wrap">
          {"Driveable".split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              {Array.from(word).map((char, index) => (
                <span
                  key={index}
                  className={`inline-block hover-stretch-letter font-six-caps ${
                    char === " " ? "w-2" : ""
                  }`}
                >
                  {char}
                </span>
              ))}
              {wordIndex < 1 && <span className="inline-block w-4"></span>} {/* Space between words */}
            </span>
          ))}
        </h1>

          <motion.p
            className="sm:text-left pt-10 lg:text-xl font-medium mx-5"
            variants={childVariants}
          >
            {hero.description}
          </motion.p>
        </motion.div>

        {/* Bottom Section: Client Info */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mx-5 sm:mr-96 mt-10 text-sm"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-5 sm:mb-0" variants={childVariants}>
            <p className="mb-2 font-bold text-customSecondary">Client</p>
            <p className="font-medium">{hero.client}</p>
          </motion.div>
          <motion.div className="mb-5 sm:mb-0" variants={childVariants}>
            <p className="mb-2 font-bold text-customSecondary">Role</p>
            <p className="font-medium">{hero.role}</p>
          </motion.div>
          <motion.div className="mb-5 sm:mb-0" variants={childVariants}>
            <p className="mb-2 font-bold text-customSecondary">Duration</p>
            <p className="font-medium">{hero.duration}</p>
          </motion.div>
          <motion.div variants={childVariants}>
            <p className="font-bold text-customSecondary">Platform URL</p>
            <a
              href={hero.platformURL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-500 underline"
            >
              {hero.platformURL}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
