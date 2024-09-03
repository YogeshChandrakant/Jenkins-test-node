const fs = require('fs');
const path = require('path');

// Read the current version from version.txt
const versionFilePath = path.join(__dirname, 'version.txt');
let currentVersion = fs.readFileSync(versionFilePath, 'utf8').trim();

// Increment the patch version
let [major, minor, patch] = currentVersion.split('.').map(Number);
patch += 1;
const newVersion = `${major}.${minor}.${patch}`;

// Update version.txt
fs.writeFileSync(versionFilePath, newVersion, 'utf8');

// Optionally, update package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

console.log(`Version updated to ${newVersion}`);
