import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import teamDataJson from "../data/teamData.json";

const getLiveTeamData = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('auisc_working_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Strict schema validation check:
        // Invalidate if facultyCoordinator is missing, not an array, or contains objects instead of string slugs
        const isInvalid = 
          !parsed.facultyCoordinator || 
          !Array.isArray(parsed.facultyCoordinator) || 
          parsed.facultyCoordinator.some(fc => typeof fc !== 'string');

        if (isInvalid) {
          localStorage.removeItem('auisc_working_data');
          return teamDataJson;
        }
        return parsed;
      } catch (e) {
        localStorage.removeItem('auisc_working_data');
        return teamDataJson;
      }
    }
  }
  return teamDataJson;
};

const Team = () => {
  const [teamData, setTeamData] = useState(getLiveTeamData);

  useEffect(() => {
    const handleStorageChange = () => {
      setTeamData(getLiveTeamData());
    };
    window.addEventListener("storage", handleStorageChange);
    // Custom event for same-tab updates
    window.addEventListener("auisc_data_updated", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("auisc_data_updated", handleStorageChange);
    };
  }, []);

  const scrollToTeam = (teamId) => {
    const element = document.getElementById(element => element.id === teamId) || document.getElementById(teamId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const facultyMembers = (Array.isArray(teamData.facultyCoordinator) ? teamData.facultyCoordinator : [])
    .map(id => teamData.membersPool.find(m => m.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen pt-20 pb-20 bg-light-blue-purple">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 text-dark-blue-purple"
        >
          Our Team
        </motion.h1>

        {/* Team Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-md rounded-lg mb-8 p-4"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {facultyMembers.length > 0 && (
              <motion.button
                onClick={() => scrollToTeam("faculty-coordinator")}
                className="px-4 py-2 bg-white hover:bg-light-blue-purple text-dark-blue-purple rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {teamData.facultyTitle || "Faculty Coordinator"}
              </motion.button>
            )}

            {teamData.teams.map((team) => (
              <motion.button
                key={team.id}
                onClick={() => scrollToTeam(team.teamName.toLowerCase().replace(/\s+/g, "-"))}
                className="px-4 py-2 bg-white hover:bg-light-blue-purple text-dark-blue-purple rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {team.teamName}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-16">
          {facultyMembers.length > 0 && (
            <motion.div
              id="faculty-coordinator"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 text-dark-blue-purple shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">{teamData.facultyTitle || "Faculty Coordinator"}</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {facultyMembers.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </motion.div>
          )}

          {teamData.teams.map((team, index) => {
            const teamLeads = team.leads.map(id => teamData.membersPool.find(m => m.id === id)).filter(Boolean);
            const teamMembers = team.members.map(id => teamData.membersPool.find(m => m.id === id)).filter(Boolean);

            return (
              <motion.div
                key={team.id}
                id={team.teamName.toLowerCase().replace(/\s+/g, "-")}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-dark-blue-purple shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-center">{team.teamName}</h2>
                
                {team.teamName === "Executive Board" ? (
                  <div className="flex flex-wrap justify-center gap-8">
                    {[...teamLeads, ...teamMembers].map((member) => (
                      <TeamCard key={member.id} member={member} />
                    ))}
                  </div>
                ) : (
                  <>
                    {/* Team Leads */}
                    {teamLeads.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-center text-dark-blue-purple">Team Lead</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                          {teamLeads.map((lead) => (
                            <TeamCard key={lead.id} member={lead} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Team Members */}
                    {teamMembers.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-center text-dark-blue-purple">Team Members</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                          {teamMembers.map((member) => (
                            <TeamCard key={member.id} member={member} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
