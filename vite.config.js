import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const imageUploadPlugin = () => {
  return {
    name: 'image-upload',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/upload-image' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const { filename, base64 } = JSON.parse(body);
              const data = base64.replace(/^data:image\/\w+;base64,/, "");
              const buffer = Buffer.from(data, 'base64');
              const publicDir = path.resolve(__dirname, 'public/team_pics');
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              const filePath = path.join(publicDir, filename);
              fs.writeFileSync(filePath, buffer);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, path: `/team_pics/${filename}` }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else if (req.url === '/api/publish-data' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const dataPath = path.resolve(__dirname, 'src/data/teamData.json');
              const backupPath = path.resolve(__dirname, 'src/data/teamData_backup.json');
              fs.writeFileSync(dataPath, body);
              fs.writeFileSync(backupPath, body);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else if (req.url === '/api/backup-data' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const backupPath = path.resolve(__dirname, 'src/data/teamData_backup.json');
              fs.writeFileSync(backupPath, body);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else if (req.url === '/api/get-backup' && req.method === 'GET') {
          try {
            const backupPath = path.resolve(__dirname, 'src/data/teamData_backup.json');
            const dataPath = path.resolve(__dirname, 'src/data/teamData.json');
            let content = '{}';
            if (fs.existsSync(backupPath)) {
              content = fs.readFileSync(backupPath, 'utf-8');
            } else if (fs.existsSync(dataPath)) {
              content = fs.readFileSync(dataPath, 'utf-8');
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(content);
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        } else {
          next();
        }
      });
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imageUploadPlugin()],
  server: {
    port: 3000,
    open: true,
  },
})