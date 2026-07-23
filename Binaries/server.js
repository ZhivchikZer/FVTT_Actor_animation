const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.wasm': 'application/wasm',
  '.webm': 'video/webm',
  '.mp4':  'video/mp4',
  '.json': 'application/json',
  '.png':  'image/png',
  '.webp': 'image/webp',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif'
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  try { urlPath = decodeURIComponent(urlPath); } catch(e) {}
  if (urlPath === '/') urlPath = '/index.html';

  if (req.method === 'POST' && urlPath === '/upload') {
    const testDir = path.join(__dirname, '..', 'TEST');
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir);
    }
    const fileName = 'trimmed_' + Date.now() + '.mp4';
    const filePath = path.join(testDir, fileName);
    const writeStream = fs.createWriteStream(filePath);
    
    req.pipe(writeStream);
    
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, fileName: fileName }));
    });
    
    req.on('error', (err) => {
      console.error(err);
      res.writeHead(500);
      res.end('Error uploading file');
    });
    return;
  }

  if (req.method === 'GET' && urlPath === '/api/frames') {
    const framesDir = path.join(__dirname, '..', 'Frames');
    if (!fs.existsSync(framesDir)) {
      try { fs.mkdirSync(framesDir); } catch(e) {}
    }
    fs.readdir(framesDir, (err, files) => {
      if (err) {
        res.writeHead(500);
        res.end('Error reading Frames directory');
        return;
      }
      const imgs = files.filter(f => f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.webp'));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(imgs));
    });
    return;
  }

  let filePath = path.join(__dirname, urlPath);
  if (urlPath.startsWith('/Frames/')) {
    filePath = path.join(__dirname, '..', urlPath);
  }

  const ext         = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      const code = err.code === 'ENOENT' ? 404 : 500;
      res.writeHead(code, { 'Content-Type': 'text/plain' });
      res.end(code === 404 ? 'Not found: ' + urlPath : 'Server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log('Token Animator running at http://localhost:' + PORT);
  console.log('Press Ctrl+C to stop.');
});
