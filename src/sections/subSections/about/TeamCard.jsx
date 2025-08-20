import React from "react";

const TeamCard = ({ image, name, title }) => {
  return (
    <div className="relative w-full max-w-[90vw] md:w-[20vw] aspect-[4/6] bg-gradient-to-t from-black/40 to-white/50 backdrop-blur rounded-3xl overflow-hidden shadow-md mx-auto group">
      {/* Person image */}
      <img
        src={image}
        alt={name}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-[90%] object-contain"
      />

      {/* Name capsule */}
      <div className="absolute bottom-14 left-0 w-full px-4">
        <div className="bg-purple-400/60 backdrop-blur-sm text-white rounded-full shadow text-lg font-semibold text-center py-2">
          {name}
        </div>
      </div>

      {/* Title capsule */}
      <div className="absolute bottom-3 left-0 w-full px-4">
        <div className="bg-blue-400/60 backdrop-blur-lg text-white rounded-full shadow text-base font-medium text-center py-2">
          {title}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
