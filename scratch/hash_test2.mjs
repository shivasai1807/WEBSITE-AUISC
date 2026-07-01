import crypto from 'crypto';

const target = "8c66a4f9103bc21db3ec515d9a26363c467e915ec5ad9fb6f8e77a16e5306dc9";
const words = [
  "auisc", "AUISC", "auisc_working_data", "admin", "Admin", 
  "password123", "Admin@1234", "12345678", "auisc admin",
  "AUISC@123", "Auisc@2026", "Auisc@123"
];

for (const w of words) {
  const hash = crypto.createHash('sha256').update(w).digest('hex');
  if (hash === target) {
    console.log("MATCH:", w);
    process.exit(0);
  }
}
console.log("No match");
