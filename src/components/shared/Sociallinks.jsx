import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaMedium,
  FaBehance,
  FaDribbble,
} from "react-icons/fa6";

const Sociallinks = () => {
  const Sociallink = [
    { id: 1, href: "https://www.linkedin.com/in/kudzai-oswell-mapuranga-bb30b475/", icon: <FaLinkedinIn /> },
    { id: 2, href: "https://github.com/Kudzai21", icon: <FaGithub /> },
    { id: 3, href: "https://medium.com/@mapurangako", icon: <FaMedium /> },
    { id: 4, href: "https://www.behance.net/komapuranga", icon: <FaBehance /> },
    { id: 5, href: "https://dribbble.com/Kudzai_Oz", icon: <FaDribbble /> },
  ];

  return (
    <div className="fixed top-2 sm:top-1/2 left-1/2 sm:left-auto transform -translate-x-1/2 sm:translate-x-0 sm:-translate-y-1/2 py-4 mx-0 sm:mx-32 z-10 flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4">
      {Sociallink.map(({ id, href, icon }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-b from-stone-300/40 to-transparent p-[3px] rounded-[12px] transition-transform duration-300 group"
        >
          <button className="group-hover:scale-105 group-hover:shadow-sm p-[3px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[0,0px,1px,rgba(0,0,0,0.4)] active:scale-[0.98]">
            <div className="bg-gradient-to-b from-stone-200/30 to-white/70 rounded-[8px] px-3 py-3 group-hover:bg-gradient-to-t group-hover:from-gray-100 group-hover:to-gray-100">
              <div className="flex justify-center items-center gap-2 text-lg text-customPrimary group-hover:text-customSecondary transition-colors duration-300">
                {icon}
              </div>
            </div>
          </button>
        </a>
      ))}
    </div>
  );
};

export default Sociallinks;
