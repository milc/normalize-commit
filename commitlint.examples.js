#! /usr/bin/env node
const colors = require('colors/safe');
const path = require('path');
const shell = require("shelljs");

const examples = [
  'echo "feat(ex): A commit message\nThis should be invalid" | commitlint --color=true',
  'echo "feat(ex): A commit message \n\n This should be valid" | commitlint --color=true',
  'echo "feat(ex): A commit message. \n\n This should be invalid because of the . (full-stop error)" | commitlint --color=true',
  'echo "feat(): A commit message. \n\n This should be invalid" | commitlint --color=true',
  'echo "feat: A commit message. \n\n This should be invalid" | commitlint --color=true'
];

process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'));

examples.forEach( cmd => {
  console.log("\n" + colors.blue(cmd));
  shell.exec(cmd);
  console.log('---');
});
