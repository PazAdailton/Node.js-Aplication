const path = require("path");

console.log(path.extname(__filename));
console.log(path.dirname(__dirname));

path.join(__dirname, 'public', 'home.html');

//console.log(__dirname)