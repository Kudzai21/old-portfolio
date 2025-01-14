import React, { useEffect, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import motion from framer-motion
import contactData from "../../data/home.json";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(contactData.contact); 
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-16 px-4 sm:px-8 bg-background mt-20">
      <motion.div
        className="text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: "some" }} // This will trigger every time it enters the viewport
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: "some" }} // Trigger animation every time it comes into view
        >
          {data.title}
        </motion.h1>
        <motion.p
          className="text-gray-500 text-lg font-medium mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: "some" }} // Trigger animation every time it comes into view
        >
          {data.description}
        </motion.p>
      </motion.div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: "some" }} // Trigger animation every time it comes into view
      >
        <a
          href={`mailto:${data.email}`}
          className="bg-gradient-to-b from-stone-300/40 to-transparent p-[1px] rounded-[12px] group transition-transform duration-300"
        >
          <motion.button
            className="group-hover:scale-105 group-hover:shadow-lg p-[3px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            whileHover={{ scale: 1.05, backgroundColor: "#f3f3f3" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: "some" }} // Trigger animation every time it comes into view
          >
            <div className="bg-gradient-to-b from-stone-200/30 to-white/70 rounded-[8px] px-3 py-3 group-hover:bg-gradient-to-t group-hover:from-gray-100 group-hover:to-gray-100">
              <div className="flex justify-center items-center gap-2 text-lg text-customPrimary group-hover:text-customSecondary transition-colors duration-300">
                <FaRegEnvelope />
                <span className="font-medium">{data.buttonText}</span>
              </div>
            </div>
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
