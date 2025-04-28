import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMobileAlt, FaDesktop, FaTabletAlt, FaChartLine, FaReact, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import caseStudiesData from "../../data/home.json";

import Tile1 from "../../assets/tiles/Tile1.jpg";
import Tile2 from "../../assets/tiles/Tile2.jpg";
import Tile3 from "../../assets/tiles/Tile3.jpg";
import Tile4 from "../../assets/tiles/Tile4.jpg";
import Tile5 from "../../assets/tiles/Tile5.jpg";
import Tile6 from "../../assets/tiles/Tile6.jpg";

const Card = ({ imageSrc, title, description, buttonText, githubLink, showGithub, navigateTo, previewLink, index }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    navigate(navigateTo); // Navigate to the specific case study page
  };

  const handleGithubClick = () => {
    window.open(githubLink, "_blank"); // Open GitHub link in a new tab
  };

  const handlePreviewClick = () => {
    window.open(previewLink, "_blank"); // Open Preview link in a new tab
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Delay based on the index
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="max-w-sm w-full bg-gradient-to-b from-stone-300/40 to-transparent p-[3px] rounded-[12px]"
      custom={index}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="p-[2px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
        <div className="bg-gradient-to-b from-stone-200/30 to-white/70">
          <img className="w-full h-60 object-cover p-3" src={imageSrc} alt={title} />
          <div className="p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="mb-4 flex gap-2 flex-wrap text-sm text-customSecondary py-2">
              {description.map((tag, index) => (
                <div key={index} className="flex items-center space-x-1 mx-1 p-1 text-gray-500 bg-gray-100 border border-gray-500 rounded-md">
                  {tag.icon === "iconMobileApp" && <FaMobileAlt />}
                  {tag.icon === "iconWebsite" && <FaDesktop />}
                  {tag.icon === "iconWebApp" && <FaTabletAlt />}
                  {tag.icon === "iconDashboard" && <FaChartLine />}
                  {tag.icon === "iconReact" && <FaReact />}
                  {tag.icon === "iconTailwindCss" && <RiTailwindCssFill />}
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-4">
              {navigateTo && (
                <motion.button
                  onClick={handleButtonClick}
                  className="group p-[2px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[0,0px,1px,rgba(0,0,0,0.4)] transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f3f3" }}
                >
                  <div className="bg-gradient-to-b from-stone-200/30 to-white/70 rounded-[8px] px-3 py-2">
                    <div className="flex font-medium justify-center items-center px-2 text-customPrimary group-hover:text-customSecondary transition-colors duration-300">
                      {buttonText}
                    </div>
                  </div>
                </motion.button>
              )}
              {previewLink && (
                <motion.button
                  onClick={handlePreviewClick}
                  className="group p-[2px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[0,0px,1px,rgba(0,0,0,0.4)] transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f3f3" }}
                >
                  <div className="bg-gradient-to-b from-stone-200/30 to-white/70 rounded-[8px] px-3 py-2">
                    <div className="flex font-medium justify-center items-center px-2 text-customPrimary group-hover:text-customSecondary transition-colors duration-300">
                      Preview
                    </div>
                  </div>
                </motion.button>
              )}
              {showGithub && (
                <motion.button
                  onClick={handleGithubClick}
                  className="group p-[2px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[0,0px,1px,rgba(0,0,0,0.4)] transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "#f3f3f3" }}
                >
                  <div className="bg-gradient-to-b from-stone-200/30 to-white/70 rounded-[8px] px-3 py-2">
                    <div className="flex font-medium justify-center items-center px-2 text-customPrimary group-hover:text-customSecondary transition-colors duration-300">
                      Github
                    </div>
                  </div>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Casestudies = () => {
  const [selected, setSelected] = useState("design");
  const [cards, setCards] = useState([]);

  // Map static imports to JSON data
  const imageMap = {
    "Tile1.jpg": Tile1,
    "Tile2.jpg": Tile2,
    "Tile3.jpg": Tile3,
    "Tile4.jpg": Tile4,
    "Tile5.jpg": Tile5,
    "Tile6.jpg": Tile6,
  };

  useEffect(() => {
    if (caseStudiesData.caseStudiesData[selected]) {
      const updatedCards = caseStudiesData.caseStudiesData[selected].map((card) => ({
        ...card,
        imageSrc: imageMap[card.imageSrc], // Map JSON filenames to imported images
      }));
      setCards(updatedCards);
    } else {
      setCards([]);
    }
  }, [selected]);

  return (
    <>
      <motion.h1 className="text-center text-5xl lg:text-7xl mt-20 pb-10 font-six-caps">
        {["Case", "Study", "Projects"].map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            {word.split("").map((char, charIndex) => (
              <motion.span key={charIndex} className="inline-block hover-stretch-letter font-six-caps">
                {char}
              </motion.span>
            ))}
            {wordIndex < 2 && <span className="inline-block w-4"></span>} {/* Adds space between words */}
          </React.Fragment>
        ))}
      </motion.h1>

      <div className="relative w-full flex justify-center pb-10">
        <div className="flex space-x-5 border-b-[1px] border-customSecondary w-max">
          <motion.button
            className={`relative text-lg font-semibold pb-[6px] ${
              selected === "design"
                ? "text-customPrimary after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-customPrimary"
                : "text-customSecondary"
            }`}
            onClick={() => setSelected("design")}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Design
          </motion.button>
          <motion.button
            className={`relative text-lg font-semibold pb-[6px] ${
              selected === "code"
                ? "text-customPrimary after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-customPrimary"
                : "text-customSecondary"
            }`}
            onClick={() => setSelected("code")}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Coding
          </motion.button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-10 px-8 md:px-16">
        {cards.length > 0 ? (
          cards.map((card, index) => {
            let navigateTo = "";
            if (selected === "design") {
              if (index === 0) navigateTo = "/casestudy";
              if (index === 1) navigateTo = "/casestudy2";
              if (index === 2) navigateTo = "/casestudy3";
            }

            return (
              <Card
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                githubLink={card.githubLink}
                showGithub={selected === "code"}
                navigateTo={navigateTo}
                previewLink={card.previewLink}
                index={index}
              />
            );
          })
        ) : (
          <p>No case studies available for this category.</p>
        )}
      </div>
    </>
  );
};

export default Casestudies;