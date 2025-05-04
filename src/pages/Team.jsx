import { motion } from "framer-motion";

const teams = [
  {
    title: "Executive Board",
    leads: [
      {
        name: "Aishwarya Alichella",
        role: "President",
        image: "src/assets/team_pics/aishwarya.webp",
      },
      {
        name: "Eshwar",
        role: "Vice President",
        image: "src/assets/team_pics/eshwar.webp",
      },
    ],
    members: [
      {
        name: "Sandhya",
        role: "General Secretary",
        image: "src/assets/team_pics/",
      },
      {
        name: "Ankitha",
        role: "Joint Secretary",
        image: "src/assets/team_pics/",
      },
      {
        name: "Kaif Shaik",
        role: "Treasurer",
        image: "src/assets/team_pics/",
      },
      {
        name: "Vigneshwar",
        role: "Organising Lead",
        image: "src/assets/team_pics/",
      },
      {
        name: "Eshika",
        role: "Senior Executive Board",
        image: "src/assets/team_pics/",
      },
      {
        name: "Bindu Priya",
        role: "Senior Executive Board",
        image: "src/assets/team_pics/",
      },
      {
        name: "Raaga Samanvitha",
        role: "Ethics & Operations Head",
        image: "src/assets/team_pics/",
      },
      {
        name: "Vaishnavi V",
        role: "Sustainable Operations Head",
        image: "src/assets/team_pics/",
      },
      {
        name: "Jerusha",
        role: "Alumni Relations",
        image: "src/assets/team_pics/",
      },
    ],
  },
  {
    title: "Research And Development Team",
    leads: [
      {
        name: "Srujan M",
        role: "Research And Development Team Head",
        image: "src/assets/team_pics/",
      },
    ],
    members: [
      {
        name: "Pranav",
        image: "",
      },
      {
        name: "Police Sreeja",
        image: "src/assets/team_pics/",
      },
      {
        name: "K Rekha",
        image: "src/assets/team_pics/rekha.webp",
      },
      {
        name: "Anji Reddy B",
        image: "src/assets/team_pics/anji.webp",
      },
    ],
  },
  {
    title: "Technical Team",
    leads: [
      {
        name: "Amrutha Sri",
        role: "Technical Lead",
        image: "src/assets/team_pics/amrutha.webp",
      },
    ],
    members: [
      {
        name: "Pavan Kumar",
        image: "src/assets/team_pics/pavan.webp",
      },
      {
        name: "Deekshitha Reddy",
        image: "src/assets/team_pics/deekshitha.webp",
      },
    ],
  },
  {
    title: "Design Team",
    leads: [
      {
        name: "Poornima Guda",
        role: "Design Team Head",
        image: "src/assets/team_pics/poornima.webp",
      },
    ],
    members: [
      {
        name: "Kavya Sri",
        image: "https://via.placeholder.com/200",
      },
      {
        name: "Pranathi",
        image: "src/assets/team_pics/pranathi.webp",
      },
      {
        name: "Uma Sri",
        image: "https://via.placeholder.com/200",
      },
      {
        name: "Tella Vaishnavi",
        image: "src/assets/team_pics/vaishnavi.webp",
      },
      {
        name: "Vamshi Krishna",
        image: "src/assets/team_pics/vamshi_design.webp",
      },
    ],
  },
  {
    title: "Marketing Team",
    leads: [
      {
        name: "Akshitha T",
        role: "Marketing Team Head",
        image: "src/assets/team_pics/akshitha.webp",
      },
    ],
    members: [
      {
        name: "Abhiram",
        image: "src/assets/team_pics/abhiram.webp",
      },
      {
        name: "Sahithi",
        image: "src/assets/team_pics/sahithi.webp",
      },
    ],
  },
  {
    title: "Content Team",
    leads: [
      {
        name: "Sonal G",
        role: "Content Team Head",
        image: "https://via.placeholder.com/200",
      },
    ],
    members: [
      {
        name: "Thanughna D",
        image: "src/assets/team_pics/thanughana.webp",
      },
      {
        name: "Sukruth B",
        image: "src/assets/team_pics/sukruth.webp",
      },
      {
        name: "S. F. Cecilia",
        image: "src/assets/team_pics/",
      },
      {
        name: "Keerthana",
        image: "src/assets/team_pics/",
      },
    ],
  },
  {
    title: "Public Relations Team",
    leads: [
      {
        name: "Shyamala",
        role: "Public Relations Team Head",
        image: "https://via.placeholder.com/200",
      },
    ],
    members: [
      {
        name: "Sumad",
        image: "src/assets/team_pics/sumad.webp",
      },
      {
        name: "Jahnavi",
        image: "https://via.placeholder.com/200",
      },
      {
        name: "Agrathi Sheela",
        image: "src/assets/team_pics/agrathi.webp",
      },
      {
        name: "Sri Charan Raj",
        image: "https://via.placeholder.com/200",
      },
    ],
  },
  {
    title: "Social Media Team",
    leads: [
      {
        name: "Abhay",
        role: "Social Media Team Head",
        image: "src/assets/team_pics/abhay.webp",
      },
    ],
    members: [
      {
        name: "Ayesha Shaik",
        image: "src/assets/team_pics/",
      },
      {
        name: "Vyshali Katta",
        image: "src/assets/team_pics/",
      },
      {
        name: "Shiva Sai",
        image: "src/assets/team_pics/",
      },
      {
        name: "Ram Swaroop",
        image: "src/assets/team_pics/ram",
      },
      {
        name: "Siri Chandana Reddy",
        image: "src/assets/team_pics/siriChandana.webp",
      },
    ],
  },
];

const TeamCard = ({ member }) => (
  <div className="bg-white shadow-lg rounded-xl p-4 text-center w-60 hover:bg-blue-950 hover:text-white transition duration-500 hover:scale-105">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-60 object-cover rounded-lg mb-4"
    />
    <h3 className="text-lg font-semibold">{member.name}</h3>
    <p className="text-sm text-gray-500">{member.role}</p>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Team
        </motion.h1>

        {teams.map((team, index) => (
          <div key={index} className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-center mb-10"
            >
              {team.title}
            </motion.h2>

            {/* Lead */}
            <div className="flex justify-center mb-12 gap-8">
              {team.leads.map((lead, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                >
                  <TeamCard member={lead} />
                </motion.div>
              ))}
            </div>

            {/* Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
              {team.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.6 }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
