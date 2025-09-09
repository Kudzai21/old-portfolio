import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/Kudzai.jpg";
import data from "../../data/home.json";
import { FaArrowRightLong } from "react-icons/fa6";
import "./../../Hero.css";

const Hero = () => {
    const { hero } = data; // Destructure hero data from the JSON file

    // Create an array of skills with color mappings
    const skillsWithColors = hero.skills.map((skill, index) => ({
        name: skill.name,
        color: skill.color || getRandomColor(index), // If no color in JSON, generate a random color
    }));

    // Function to generate random colors
    const getRandomColor = (index) => {
        const colors = ["#38BDF8", "#F87171", "#4ADE80", "#FBBF24", "#9333EA"];
        return colors[index % colors.length]; // Cycle through colors if there are more skills than colors
    };

    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [typedSkill, setTypedSkill] = useState("");

    // Function to cycle through skills with typing effect
    useEffect(() => {
        const interval = setInterval(() => {
            const currentSkill = skillsWithColors[currentSkillIndex];
            let skillName = currentSkill.name;

            // Typing effect logic
            setTypedSkill((prev) => prev + skillName[prev.length]);

            if (typedSkill === skillName) {
                setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skillsWithColors.length);
                setTypedSkill(""); // Reset typing effect
            }
        }, 300); // Adjust speed for typing effect

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [typedSkill, currentSkillIndex, skillsWithColors]);

    // Variants for animation
    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5, // Stagger animations for child elements
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, scale: 0. },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
    };

    return (
        <section className="bg-background h-screen w-full flex items-center justify-center">
            <div className="text-center max-w-sm md:max-w-xl lg:max-w-6xl">
                <div className="inline-flex pb-5 bg-gradient-to-b from-stone-300/40 to-transparent rounded-full">
                    <div className="group p-[2px] rounded-full bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                        <label className="inline-flex items-center space-x-2 bg-gradient-to-b from-stone-200/30 to-white/70 rounded-full py-2 px-3">
                            <img
                                src={profileImage} 
                                alt={hero.profileAlt} 
                                className="w-7 h-7 rounded-full"
                            />
                            <span className="text-customSecondary font-medium">{hero.name}</span>
                        </label>
                    </div>
                </div>
                <div className="pt-10">
                    {/* Animate the h1 and tags */}
                    <motion.div
                        variants={parentVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Main heading with smooth pop effect */}
                        <motion.h1
                            variants={childVariants}
                            className="text-xl md:text-2xl lg:text-3xl mx-5"
                        >
                            <h1 className="font-semibold text-5xl lg:text-[12rem] tracking-widest pb-5">
                                {["PRODUCT", "DESIGNER"].map((word, wordIndex) => (
                                    <React.Fragment key={wordIndex}>
                                    {word.split("").map((char, index) => (
                                        <motion.span
                                        key={index}
                                        className="inline-block hover-stretch-letter font-six-caps"
                                        >
                                        {char}
                                        </motion.span>
                                    ))} 
                                    {wordIndex < 1 && <span className="inline-block w-2"></span>} {/* Adds space between words */}
                                    </React.Fragment>
                                ))}
                            </h1>
                            <span className="text-customPrimary font-normal">Designer who codes and AI enthusiast</span>. 
                            <span className="text-customSecondary"> I craft user-friendly </span> 
                            <span className="text-customPrimary font-normal"> designs and responsive front-end solutions</span> 
                            <span className="text-customSecondary"> , blending creativity with functionality, while actively</span> 
                            <span className="text-customPrimary font-normal"> implementing AI </span>
                            <span className="text-customSecondary"> to enhance workflows and </span>
                            <span className="text-customPrimary font-normal"> design outcomes. </span>


                        </motion.h1>

                        {/* Skill animation with stagger */}
                        <motion.p
                            variants={childVariants}
                            className="text-center pt-10 font-medium text-base md:text-xl"
                        >
                            I'm good with{" "}
                            <span className="font-bold">
                                <span style={{ color: skillsWithColors[currentSkillIndex].color }}>
                                    {typedSkill}
                                </span>
                            </span>
                        </motion.p>

                        {/* Call-to-action message */}
                        <motion.p
                            variants={childVariants}
                            className="text-center pt-20 text-3xl font-plus-jakarta-sans  text-customSecondary"
                        >
                            Zero <FaArrowRightLong className="inline-block mx-2 text-base text-customSecondary" /> One
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
