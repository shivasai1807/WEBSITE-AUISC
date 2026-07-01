import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./src/data/teamData.json', 'utf8'));

// Helper to preserve image and linkedin
const poolMap = new Map();
data.membersPool.forEach(m => poolMap.set(m.id, m));

const newPoolMap = new Map(); // We'll build a fresh pool

function findExisting(name) {
  // Explicit mappings
  const explicit = {
    "sukruth baikan": "sukruth",
    "thanughna dhatrika": "thanughana",
    "jahnavi dora": "jahnavi",
    "sumad": "sumad",
    "sri charan raj": "sri_charan",
    "ayesha shaik": "ayesha",
    "agrati sheela": "agrathi",
    "pranav kothapalli": "pranav",
    "shiva sai": "shiva",
    "police sreeja": "sreeja_p",
    "uma sri": "uma",
    "vyshali katta": "vyshali",
    "anji reddy boda": "anji",
    "prasanna": "prasanna",
    "saketh (rd)": "Gsaketh", // Handle dup
    "greshmi ratna": "greshmi",
    "chinmayi": "chinmai",
    "sruthi": "sruthi",
    "korubothu rekha": "rekha",
    "s f cecilia": "cecilia",
    "nakshatra": "nakshatra",
    "yashaswini": "yashaswini",
    "noel": "noel",
    "pavan kumar": "pavan",
    "deekshitha": "deekshitha",
    "sriya sushil": "sriya",
    "yagneshwar": "yagnesh",
    "sneha": "sneha",
    "garlapati sidhu": "siddu",
    "vaishnavi chowdary": "vaishnavi",
    "kavya sri": "kavya_sri",
    "vamshi krishna": "vamshi_design",
    "pranathi": "pranathi",
    "anwesha sahu": "anwesha",
    "harshitha": "harshita",
    "vijayalakshmi": "vijaya",
    "pradeepa": "pradeepa",
    "akhil": "akhil",
    "siri chandana reddy": "siriChandana",
    "abhiram (sm)": "JR_abhiram", // Handle dup
    "sayyad": "sayyad",
    "lakshyatha": "lakshyatha",
    "shiva vardhan": "shiva_vardhan",
    "rajith": "rajith",
    "neeraj": "neeraj",
    "abhiram (pr)": "abhiram", // Handle dup
    "chethana reddy": "chetana",
    "rishi": "rishi",
    "saketh (pr)": "PRsaketh", // Handle dup
    "inderneel": "neel",
    "theerdha": "theerdha",
    "trisha": "trisha",
    "ramswaroop dara": "ram",
    "amulya": "amulya",
    "aishwarya (mkt)": "JR_aishwarya", // Handle dup
    "dharun": "dharun",
    "sri varsha": "Srivarsha",
    "ashritha": "Ashritha",
    "durga prasad": "durga"
  };

  const lowered = name.toLowerCase().trim();
  if (explicit[lowered]) return explicit[lowered];

  // Fallback to fuzzy
  const found = data.membersPool.find(m => m.name.toLowerCase().includes(lowered) || lowered.includes(m.name.toLowerCase()));
  if (found) return found.id;
  
  return null;
}

function processMember(name, role, specialId = null) {
  const existingId = findExisting(specialId ? specialId : name);
  let id = existingId;
  let image = "";
  let linkedin = "";
  if (!id) {
    id = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  } else {
    const existing = poolMap.get(id);
    if (existing) {
      image = existing.image || "";
      linkedin = existing.linkedin || "";
    }
  }

  // Add to new pool
  if (!newPoolMap.has(id)) {
    newPoolMap.set(id, {
      id,
      name,
      image,
      role: role || "",
      linkedin
    });
  } else {
    // If we process again and now we have a role, update it
    if (role && !newPoolMap.get(id).role) {
      newPoolMap.get(id).role = role;
    }
  }

  return id;
}

const teamsConfig = [
  {
    teamName: "Executive Board",
    leads: [],
    members: [
      { name: "Sukruth Baikan", role: "President" },
      { name: "Thanughna Dhatrika", role: "Vice-president" },
      { name: "Jahnavi Dora", role: "General secretary" },
      { name: "Sumad", role: "Joint Secretary" },
      { name: "Sri Charan Raj", role: "Treasurer" },
      { name: "Ayesha Shaik", role: "Student Ambassador" },
      { name: "Agrati Sheela", role: "Organising lead" },
      { name: "Pranav kothapalli", role: "Epics lead" },
      { name: "Shiva Sai", role: "Projects & Publications director" },
      { name: "Police Sreeja", role: "Projects & Publications director" },
      { name: "Uma sri", role: "Creative Director" },
      { name: "Vyshali katta", role: "Creative Director" }
    ]
  },
  {
    teamName: "Research And Development Team",
    leads: [ { name: "Anji Reddy Boda", role: "Research And Development Team Lead" } ],
    members: [
      { name: "Prasanna" },
      { name: "Saketh", specialId: "saketh (rd)" },
      { name: "Greshmi Ratna" },
      { name: "Chinmayi" },
      { name: "Sruthi" }
    ]
  },
  {
    teamName: "Content Team",
    leads: [ { name: "Korubothu Rekha", role: "Content Team Lead" }, { name: "S F Cecilia", role: "Content Team Co-Lead" } ],
    members: [
      { name: "Nakshatra" },
      { name: "Yashaswini" },
      { name: "Noel" }
    ]
  },
  {
    teamName: "Technical Team",
    leads: [ { name: "Pavan Kumar", role: "Technical Team Lead" } ],
    members: [
      { name: "Deekshitha", role: "Senior Member" },
      { name: "Sriya Sushil" },
      { name: "Yagneshwar" },
      { name: "Sneha" },
      { name: "Garlapati Sidhu" }
    ]
  },
  {
    teamName: "Design Team",
    leads: [ { name: "Vaishnavi Chowdary", role: "Design Team Lead" }, { name: "Kavya Sri", role: "Design Team Co-Lead" } ],
    members: [
      { name: "Vamshi Krishna", role: "Senior Member" },
      { name: "Pranathi", role: "Senior Member" },
      { name: "Anwesha Sahu" },
      { name: "Harshitha" },
      { name: "Vijayalakshmi" },
      { name: "Pradeepa" }
    ]
  },
  {
    teamName: "Social Media Team",
    leads: [ { name: "Akhil", role: "Social Media Team Lead" } ],
    members: [
      { name: "Siri Chandana Reddy", role: "Senior Member" },
      { name: "Abhiram", specialId: "abhiram (sm)" },
      { name: "Sayyad" },
      { name: "Lakshyatha" },
      { name: "Shiva Vardhan" },
      { name: "Rajith" },
      { name: "Neeraj" }
    ]
  },
  {
    teamName: "Public Relations Team",
    leads: [ { name: "Abhiram", specialId: "abhiram (pr)", role: "Public Relations Team Lead" } ],
    members: [
      { name: "Chethana Reddy" },
      { name: "Rishi" },
      { name: "Saketh", specialId: "saketh (pr)" },
      { name: "Inderneel" },
      { name: "Theerdha" },
      { name: "Trisha" }
    ]
  },
  {
    teamName: "Marketing Team",
    leads: [ { name: "Ramswaroop Dara", role: "Marketing Team Lead" } ],
    members: [
      { name: "Amulya" },
      { name: "Aishwarya", specialId: "aishwarya (mkt)" },
      { name: "Dharun" },
      { name: "Sri Varsha" },
      { name: "Ashritha" },
      { name: "Durga Prasad" }
    ]
  }
];

const finalTeams = [];

teamsConfig.forEach((tc, i) => {
  const team = {
    id: `t${i+1}`,
    teamName: tc.teamName,
    leads: tc.leads.map(l => processMember(l.name, l.role, l.specialId)),
    members: tc.members.map(m => processMember(m.name, m.role, m.specialId))
  };
  finalTeams.push(team);
});

// Any missing people from old pool that should be preserved?
// "if the names are already existing ones use their image only , for new members from this data no pic"
// We probably want to keep the old pool too just in case they want to add them back later,
// OR we just build the exact pool from the current team plus faculty.
data.membersPool.forEach(m => {
  if (!newPoolMap.has(m.id)) {
    // preserve old members who are not assigned to teams currently
    newPoolMap.set(m.id, m);
  }
});

const finalData = {
  ...data,
  membersPool: Array.from(newPoolMap.values()),
  teams: finalTeams
};

fs.writeFileSync('./src/data/teamData.json', JSON.stringify(finalData, null, 2));
console.log("Updated teamData.json");
