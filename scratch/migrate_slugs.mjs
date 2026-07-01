import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./src/data/teamData.json', 'utf8'));
const oldIdToSlug = {};

data.membersPool.forEach(m => {
  const parts = m.image.split('/');
  const filename = parts[parts.length - 1];
  const slug = filename.split('.')[0] || m.name.replace(/\s+/g, '').toLowerCase();
  oldIdToSlug[m.id] = slug;
  m.id = slug;
});

data.teams.forEach(t => {
  if (t.leads) t.leads = t.leads.map(id => oldIdToSlug[id] || id);
  if (t.members) t.members = t.members.map(id => oldIdToSlug[id] || id);
});

fs.writeFileSync('./src/data/teamData.json', JSON.stringify(data, null, 2));
console.log("Migration complete!");
