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
    <section className="w-full py-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-y-10 gap-x-8 px-6 md:px-12">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image} // ensure your API returns full image URL
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
