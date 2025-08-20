import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard.jsx";
import { fetchTeam } from "../../../api/api.js";

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetchTeam()
      .then((res) => setTeamMembers(res.data))
      .catch((err) => console.error("Failed to load team members:", err));
  }, []);

  return (
    <section
      className="w-full py-16 px-4 sm:px-8 lg:px-16"
      style={{
        textShadow:
          "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 text-center">
        Meet Our Team
      </h2>

      {/* Grid Layout */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-y-10 gap-x-8
          justify-items-center
        "
      >
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image} // make sure your API returns a valid URL
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
