import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import { teams } from "../data/team";

const Team = () => {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Our Team
        </motion.h1>

        <div className="space-y-16">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8"
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
                      <h3 className="text-xl font-semibold mb-4 text-center">Team Lead</h3>
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
                      <h3 className="text-xl font-semibold mb-4 text-center">Team Members</h3>
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
