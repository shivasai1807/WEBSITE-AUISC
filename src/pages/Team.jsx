import { motion } from "framer-motion";
import { useState } from "react";
import TeamCard from "../components/TeamCard";
import { teams } from "../data/team";

const Team = () => {
  const [activeTab, setActiveTab] = useState("all");

  const facultyCoordinator = {
    id: "faculty-coordinator",
    title: "Faculty Coordinator",
    content: {
      members: [{
        name: "Dr.Narender Singh",
        role: "Faculty Coordinator",
        image: "/team_pics/ns_sir.webp",
        linkedin: "https://www.linkedin.com/in/dr-narendhar-singh-ba7188178/"
      }]
    }
  };

  const allTabs = [
    {
      id: "all",
      title: "All Teams"
    },
    facultyCoordinator,
    ...teams.map(team => ({
      id: team.title.toLowerCase().replace(/\s+/g, "-"),
      title: team.title,
      content: team
    }))
  ];

  const renderTeamMembers = (team) => {
    // Combine leads and members, with leads appearing first
    const allMembers = [];
    
    // Add leads first if they exist
    if (team.content?.leads) {
      allMembers.push(...team.content.leads);
    }
    
    // Add regular members
    if (team.content?.members) {
      allMembers.push(...team.content.members);
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center">
        {allMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    );
  };

  const renderTeamSection = (team, showTitle = true) => (
    <div className="mb-12">
      {showTitle && (
        <h2 className="text-2xl font-bold mb-6 text-center text-dark-blue-purple">
          {team.title}
        </h2>
      )}
      {renderTeamMembers(team)}
    </div>
  );

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

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {allTabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-dark-blue-purple text-white shadow-lg"
                    : "bg-white hover:bg-light-blue-purple text-dark-blue-purple"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          layout
          className="bg-white rounded-xl p-4 md:p-8 shadow-lg"
        >
          {activeTab === "all" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderTeamSection(facultyCoordinator)}
              {teams.map((team) => (
                <motion.div key={team.title}>
                  {renderTeamSection({
                    id: team.title.toLowerCase().replace(/\s+/g, "-"),
                    title: team.title,
                    content: team
                  })}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            allTabs.map((tab) => (
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {renderTeamSection(tab, false)}
                </motion.div>
              )
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
