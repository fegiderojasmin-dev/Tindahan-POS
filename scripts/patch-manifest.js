// Adds the camera permission to the Android manifest (run once after "npx cap add android").
const fs = require('fs'), path = require('path');
const f = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
if (!fs.existsSync(f)) { console.error('Run "npx cap add android" first.'); process.exit(1); }
let x = fs.readFileSync(f, 'utf8');
if (x.includes('android.permission.CAMERA')) { console.log('Camera permission already present.'); process.exit(0); }
const add = '    <uses-permission android:name="android.permission.CAMERA" />\n    <uses-feature android:name="android.hardware.camera" android:required="false" />\n';
x = x.replace(/<\/manifest>\s*$/, add + '</manifest>');
fs.writeFileSync(f, x);
console.log('Camera permission added.');
