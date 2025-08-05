import React from "react";

const TeamCard = ({ image, name, title }) => {
  return (
    <div className="relative  w-full max-w-[90vw] md:w-[20vw] h-[60vh] bg-gray-100 rounded-3xl overflow-hidden shadow-md mx-auto">
      {/* Background image */}
      <img src={image} alt={name} className="w-full h-full object-cover" />

      {/* Bottom capsules (stacked) */}
      <div className="absolute bottom-14 left-0 w-full px-4">
        <div className="bg-purple-400/60 backdrop-blur-sm text-white rounded-full shadow text-lg font-semibold text-center py-2">
          {name}
        </div>
      </div>

      <div className="absolute bottom-3 left-0 w-full px-4">
        <div className="bg-blue-400/60 backdrop-blur-lg text-white rounded-full shadow text-base font-medium text-center py-2">
          {title}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
