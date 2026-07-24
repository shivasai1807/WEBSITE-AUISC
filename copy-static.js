import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyFolderSync(from, to) {
  const fromPathResolved = path.isAbsolute(from) ? from : path.resolve(__dirname, from);
  const toPathResolved = path.isAbsolute(to) ? to : path.resolve(__dirname, to);

  if (!fs.existsSync(fromPathResolved)) {
    console.warn(`Source folder does not exist: ${fromPathResolved}`);
    return;
  }

  fs.mkdirSync(toPathResolved, { recursive: true });
  fs.readdirSync(fromPathResolved).forEach(element => {
    const srcEl = path.join(fromPathResolved, element);
    const destEl = path.join(toPathResolved, element);
    if (fs.lstatSync(srcEl).isDirectory()) {
      copyFolderSync(srcEl, destEl);
    } else {
      fs.copyFileSync(srcEl, destEl);
    }
  });
}

try {
  copyFolderSync('aunsf_dashboard', 'dist/aunsf_dashboard');
  console.log('Successfully copied aunsf_dashboard to dist/');
} catch (err) {
  console.error('Error copying static assets to dist:', err);
  process.exit(1);
}
