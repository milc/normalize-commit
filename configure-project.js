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
  console.log('>> ✔ Stop without modification');
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
  if (err) {
   console.log('>> No .gitignore found. You may want to exclude those files: .huskyrc.js, commitlint.config.js, commitlint.examples.js');
  } else if(data.includes('## ------ normalize-commit ------ ##')){
   console.log('>> ✔ You already have config files in your .gitignore. You may want to exclude those files: .huskyrc.js, commitlint.config.js, commitlint.examples.js');
  } else {
    console.log('>> ✔ Add config files in your .gitignore ');
    fs.appendFile(GITIGNORE, ignoreFiles, 'utf8');
  }
});

// Modify package.json with a config entry (needed)

// This command edit the package to add the husky config
exec(`node ../../node_modules/json/lib/json.js -I -f ../../package.json -e 'this.config={"husky": {"path": ".huskyrc.js"}}'`, (error, stderr, stdout) => {
  if(error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log('>> Add Husky config, your package.json may have been modified');
  // if(stdout) { console.log(`stdout: ${stdout}`); }
  // if(stderr) { console.log(`stderr: ${stderr}`); }
});

// This command do all config steps, including update the package.json
exec('node_modules/.bin/commitizen init cz-conventional-changelog --save --save-exact --force', 
  {cwd: '../../'},
  (error, stderr, stdout) => {
    if(error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log('>> Add conventional-changelog, your package.json may have been modified');
    // if(stdout) { console.log(`stdout: ${stdout}`); }
    // if(stderr) { console.log(`stderr: ${stderr}`); }
  }
);
