import fs from 'fs';
const data = JSON.parse(fs.readFileSync('./src/data/teamData.json', 'utf8'));

if (data.facultyCoordinator && !data.teams.find(t => t.teamName === "Faculty Coordinator")) {
  const fc = data.facultyCoordinator;
  const fcSlug = 'narendarsingh';
  
  if (!data.membersPool.find(m => m.id === fcSlug)) {
    data.membersPool.push({
      id: fcSlug,
      name: fc.name,
      role: fc.role,
      image: fc.image,
      linkedin: fc.linkedin || ""
    });
  }

  data.teams.unshift({
    id: "t_faculty",
    teamName: "Faculty Coordinator",
    leads: [fcSlug],
    members: []
  });

  delete data.facultyCoordinator;
  
  fs.writeFileSync('./src/data/teamData.json', JSON.stringify(data, null, 2));
  console.log("Migrated Faculty Coordinator successfully.");
} else {
  console.log("Faculty Coordinator already migrated or not found.");
}
