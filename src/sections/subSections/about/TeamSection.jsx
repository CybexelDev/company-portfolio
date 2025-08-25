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
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 relative">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 text-center">
        Meet Our Team
      </h2>

      {/* Grid of All Members */}
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
