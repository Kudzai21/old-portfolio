import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Always navigate to home page
  };

  return (
    <button
      onClick={handleBackClick}
      className="fixed bottom-7 right-7 mx-5 lg:mx-10 bg-gradient-to-b from-stone-300/40 to-transparent p-[3px] rounded-[12px] transition-transform duration-300 group"
    >
      <div className="group-hover:scale-105 group-hover:shadow-sm p-[3px] rounded-[10px] bg-gradient-to-b from-white to-stone-200/30 shadow-[0_1px_2px_rgba(0,0,0,0.4)] active:shadow-[0,0px,1px,rgba(0,0,0,0.4)] active:scale-[0.98]">
        <div className="bg-gradient-to-b from-stone-200/30 to-white/70 rounded-[8px] px-2 py-2 group-hover:bg-gradient-to-t group-hover:from-gray-100 group-hover:to-gray-100">
          <div className="flex justify-center items-center gap-2 text-base text-customPrimary group-hover:text-customSecondary transition-colors duration-300">
            <FaArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default BackButton;
