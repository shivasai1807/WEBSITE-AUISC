import fs from 'fs';
const data = JSON.parse(fs.readFileSync('./src/data/teamData.json', 'utf8'));

const slugs = new Set();
let duplicates = 0;

data.membersPool.forEach(m => {
  const parts = m.image.split('/');
  const filename = parts[parts.length - 1];
  const slug = filename.split('.')[0] || m.name.replace(/\s+/g, '').toLowerCase();
  
  if (slugs.has(slug)) {
    console.log("Duplicate slug:", slug, "for member", m.name);
    duplicates++;
  }
  slugs.add(slug);
});

console.log(`Total members: ${data.membersPool.length}, Duplicates: ${duplicates}`);
