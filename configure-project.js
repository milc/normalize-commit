#! /usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const GITIGNORE = '../../.gitignore';
const ignoreFiles = `
## ------ normalize-commit ------ ##
.huskyrc.js
commitlint.config.js
commitlint.examples.js
## ------ /normalize-commit ------ ##
`;

if(!process.cwd().endsWith("node_modules/normalize-commit")) {
  console.log('> Script is not running from a node_modules folder');
  console.log('>> ✔ Config files copy is disabled');
  console.log('--------------------------------------------------');
  return;
} 

console.log('> Script is running from a node_modules folder');
console.log('>> ✔ Copy config files to your project');

fs.copySync(path.resolve(__dirname,'./.huskyrc.js'), '../../.huskyrc.js');
fs.copySync(path.resolve(__dirname,'./commitlint.config.js'), '../../commitlint.config.js');
fs.copySync(path.resolve(__dirname,'./commitlint.examples.js'), '../../commitlint.examples.js');

console.log('--------------------------------------------------');

fs.readFile(GITIGNORE, function (err, data) {
  if (err) throw err;
  if(data.includes('## ------ normalize-commit ------ ##')){
   console.log('>> ✔ You already have config files in your .gitignore. You may want to exclude those files: .huskyrc.js, commitlint.config.js, commitlint.examples.js');
  } else {
    console.log('>> ✔ Add config files in your .gitignore ');
    fs.appendFile(GITIGNORE, ignoreFiles, 'utf8');
  }
});