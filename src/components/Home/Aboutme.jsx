import React from "react";
import { LuPenTool } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import aboutMeData from "../../data/home.json";
import { motion } from "framer-motion";

import FigmaLogo from "../../assets/Figma.svg";
import FramerLogo from "../../assets/Framer.svg";
import MiroLogo from "../../assets/Miro.svg";
import LottieLogo from "../../assets/Lottie.svg";
import BalsamiqLogo from "../../assets/Balsamiq.svg";
import MazeLogo from "../../assets/Maze.svg";
import StorybookLogo from "../../assets/Storybook.svg";
import ReactLogo from "../../assets/React.svg";
import HtmlLogo from "../../assets/Html.svg";
import CssLogo from "../../assets/Css.svg";
import JavascriptLogo from "../../assets/Javascript.svg";
import TailwindLogo from "../../assets/Tailwind.svg";
import MotionLogo from "../../assets/Motion.svg";
import GithubLogo from "../../assets/Github.svg";

// Icon mapping
const ICONS = {
  LuPenTool,
  FaCode,
  FaRegUserCircle,
};

// Logo mapping
const LOGOS = {
  Figma: FigmaLogo,
  Framer: FramerLogo,
  Miro: MiroLogo,
  Lottie: LottieLogo,
  Balsamiq: BalsamiqLogo,
  Maze: MazeLogo,
  Storybook: StorybookLogo,
  HTML: HtmlLogo,
  CSS: CssLogo,
  JavaScript: JavascriptLogo,
  React: ReactLogo,
  "Tailwind CSS": TailwindLogo,
  Motion: MotionLogo,
  Github: GithubLogo,
};

// Card Component with Framer Motion animation triggered every time it's in view
const Card = ({ icon: Icon, title, description, children, skills }) => (
  <motion.div
    className="max-w-full overflow-hidden bg-gradient-to-b from-stone-300/40 to-transparent p-[3px] rounded-[12px]"
    initial={{ opacity: 0, scale: 0.8 }} // Start hidden and scaled down
    whileInView={{ opacity: 1, scale: 1 }} // Animate to full opacity and normal size when in view
    viewport={{ amount: 0.2 }} // Trigger animation when 20% of the element is in view
    transition={{ duration: 0.6 }} // Duration for smooth animation
  >
    <div className="p-[2px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
      <div className="bg-gradient-to-b from-stone-200/30 to-white/70 p-6">
        <div className="w-14 mb-5 h-auto group:shadow-sm p-[3px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
          <div className="bg-gradient-to-b from-stone-200/30 to-white/70 rounded-[8px] px-3 py-3 flex justify-center items-center">
            <Icon className="text-customSecondary text-2xl" />
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {Array.isArray(description) ? (
          description.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-2">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-gray-600">{description}</p>
        )}
        {skills && (
          <div className="flex flex-wrap justify-start gap-4 mt-4">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={LOGOS[skill.name] || skill.logo}
                alt={`${skill.name} Logo`}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            ))}
          </div>
        )}
        {children && <div className="mt-4 text-customPrimary text-2xl font-semibold">{children}</div>}
      </div>
    </div>
  </motion.div>
);

const AboutMe = () => {
  const { title, subtitle, sections } = aboutMeData;
  const aboutMeDescription = aboutMeData.aboutMe.description; // Pulling dynamic paragraphs

  return (
    <>
      {/* Title */}
      <section className="text-center mt-20 pb-5">
      <motion.h2
          className="text-base lg:text-lg pb-5 font-base mt-20 text-customSecondary"
          initial={{ opacity: 0, y: -50 }} // Start off-screen and hidden
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
          viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% is in view
          transition={{ duration: 0.6 }} // Duration for smooth animation
        >
          {subtitle}
        </motion.h2>
        <motion.h1 className="text-center text-5xl lg:text-7xl pb-10 font-six-caps">
          {["Get", "To", "Know", "Me"].map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block hover-stretch-letter font-six-caps"
                >
                  {char}
                </motion.span>
              ))}
              {wordIndex < 3 && <span className="inline-block w-4"></span>} {/* Adds space between words */}
            </React.Fragment>
          ))}
        </motion.h1>

        
      </section>

      {/* Cards */}
      <div className="flex flex-col items-center space-y-6 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
          {sections.map((section, index) => {
            const IconComponent = ICONS[section.icon];
            return (
              <Card
                key={index}
                icon={IconComponent}
                title={section.title}
                description={section.description}
                skills={section.skills}
                children={section.children}
              />
            );
          })}
        </div>

        {/* Wider About Me Card */}
        <div className="w-full max-w-6xl mt-6">
          <Card
            icon={FaRegUserCircle}
            title="About Me"
            description={aboutMeDescription}
          >
            Kudzai Mapuranga
          </Card>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
