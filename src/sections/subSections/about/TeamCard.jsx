import React from "react";

const TeamCard = ({ image, name, title }) => {
  return (
    <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden group">
      {/* Main card */}
      <div className="relative w-full h-full rounded-3xl bg-black/30 backdrop-blur-md shadow-xl  brightness-80 flex flex-col justify-end p-[5%] overflow-hidden group-hover:shadow-2xl group-hover:brightness-100 transition-all duration-700">
        
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-center bg-cover group-hover:scale-110 transition-transform duration-700"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top",   // or "top", "bottom", "left center"
            
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-around gap-[6%] z-10">
          {/* Name capsule */}
          <div className="text-white/70 font-bold rounded-3xl shadow-lg text-center  px-[12px] text-[clamp(2rem,1.5vw,1.1rem)] group-hover:font-extrabold group-hover:text-white group-hover:brightness-110  transition-all duration-300">
            {name}
          </div>

          {/* Title capsule */}
          <div className="text-white/70 rounded-3xl shadow-md text-center py-[4px] px-[10px] text-[clamp(1rem,1vw,1rem)] group-hover:font-bold group-hover:text-white transition-all duration-500">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
