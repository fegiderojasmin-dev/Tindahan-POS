// Copies the barcode scanner library into www/ so the app works offline.
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'html5-qrcode', 'html5-qrcode.min.js');
const dst = path.join(__dirname, '..', 'www', 'html5-qrcode.min.js');
if (!fs.existsSync(src)) { console.error('Run "npm install" first.'); process.exit(1); }
fs.copyFileSync(src, dst);
console.log('Copied html5-qrcode.min.js to www/');
