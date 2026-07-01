import fs from 'fs';
const data = JSON.parse(fs.readFileSync('./src/data/teamData.json', 'utf8'));

const fcTeamIndex = data.teams.findIndex(t => t.id === "t_faculty" || t.teamName === "Faculty Coordinator");
if (fcTeamIndex !== -1) {
  const fcTeam = data.teams[fcTeamIndex];
  const fcSlug = fcTeam.leads[0];
  const fcMember = data.membersPool.find(m => m.id === fcSlug);
  
  if (fcMember) {
    data.facultyCoordinator = {
      name: fcMember.name,
      role: fcMember.role,
      image: fcMember.image,
      linkedin: fcMember.linkedin || ""
    };
    
    data.membersPool = data.membersPool.filter(m => m.id !== fcSlug);
  } else {
    data.facultyCoordinator = {
      name: "Dr. Narendar Singh",
      role: "Faculty Coordinator",
      image: "/team_pics/faculty.webp",
      linkedin: ""
    };
  }
  
  data.teams.splice(fcTeamIndex, 1);
  fs.writeFileSync('./src/data/teamData.json', JSON.stringify(data, null, 2));
  console.log("Restored Faculty Coordinator successfully.");
} else if (!data.facultyCoordinator) {
  data.facultyCoordinator = {
    name: "Dr. Narendar Singh",
    role: "Faculty Coordinator",
    image: "/team_pics/faculty.webp",
    linkedin: ""
  };
  fs.writeFileSync('./src/data/teamData.json', JSON.stringify(data, null, 2));
  console.log("Added default Faculty Coordinator.");
} else {
  console.log("Faculty Coordinator already exists.");
}
