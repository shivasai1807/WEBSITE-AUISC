import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import { teams } from "../data/team";

const Team = () => {
  const scrollToTeam = (teamId) => {
    const element = document.getElementById(teamId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <motion.button
              onClick={() => scrollToTeam("faculty-coordinator")}
              className="px-4 py-2 bg-white hover:bg-light-blue-purple text-dark-blue-purple rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Faculty Coordinator
            </motion.button>
            {teams.map((team) => (
              <motion.button
                key={team.title}
                onClick={() => scrollToTeam(team.title.toLowerCase().replace(/\s+/g, "-"))}
                className="px-4 py-2 bg-white hover:bg-light-blue-purple text-dark-blue-purple rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {team.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-16">
          {/* Faculty Coordinator Section */}
          <motion.div
            id="faculty-coordinator"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 text-dark-blue-purple shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Faculty Coordinator</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <TeamCard
                member={{
                  name: "DR.Narendhar Singh",
                  role: "Faculty Coordinator",
                  image: "/team_pics/ns_sir.webp",
                  linkedin: "https://www.linkedin.com/in/dr-narendhar-singh-ba7188178/"
                }}
              />
            </div>
          </motion.div>

          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              id={team.title.toLowerCase().replace(/\s+/g, "-")}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 text-dark-blue-purple shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">{team.title}</h2>
              
              {team.title === "Executive Board" ? (
                <div className="flex flex-wrap justify-center gap-8">
                  {[...team.leads, ...team.members].map((member) => (
                    <TeamCard key={member.name} member={member} />
                  ))}
                </div>
              ) : (
                <>
                  {/* Team Leads */}
                  {team.leads && team.leads.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-center text-dark-blue-purple">Team Lead</h3>
                      <div className="flex flex-wrap justify-center gap-8">
                        {team.leads.map((lead) => (
                          <TeamCard key={lead.name} member={lead} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Team Members */}
                  {team.members && team.members.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-center text-dark-blue-purple">Team Members</h3>
                      <div className="flex flex-wrap justify-center gap-8">
                        {team.members.map((member) => (
                          <TeamCard key={member.name} member={member} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
