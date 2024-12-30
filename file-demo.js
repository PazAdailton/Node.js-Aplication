
const fs = require('node:fs');
const path = require("path");

const home = path.join(__dirname, 'public', 'home.html');

const { readFile } = require('node:fs');



fs.readFile(home, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

