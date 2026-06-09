import crypto from 'crypto';

const target = "8c66a4f9103bc21db3ec515d9a26363c467e915ec5ad9fb6f8e77a16e5306dc9";

const candidates = [
  "admin",
  "password",
  "admin123",
  "AUISC@2026",
  "auisc@2026",
  "auisc2026",
  "admin@auisc",
  "Admin@2026",
  "Admin@123",
  "AUISC2026",
  "team_auisc",
  "AdminDashboard",
  "Admin@AUISC",
  "123456",
  "auisc admin"
];

for (const c of candidates) {
  const hash = crypto.createHash('sha256').update(c).digest('hex');
  if (hash === target) {
    console.log("MATCH FOUND:", c);
    process.exit(0);
  }
}
console.log("Not found in common list");
