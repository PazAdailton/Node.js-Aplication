// server.mjs
const { createServer } = require('node:http');


const fs = require('node:fs');
const path = require("path");

const server = createServer((req, res) => {

  
if(req.url=="/api/abacaxi"){
    res.end(JSON.stringify({titulo: 'Abacaxi', img:'images/abacaxi.jpg'}));

  }
  
if(req.url== "/"){
const home = path.join(__dirname, 'public', 'home.html');
fs.readFile(home, 'utf8', (err, data) => {
  if (err) throw err;
  res.end(data);
});


}else{
  const file = path.join(__dirname, 'public', req.url);
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) console.dir(err);
    res.end(data);
  });

}

});
 
// starts a simple http server locally on port 3000
  server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});


// run with `node server.mjs`
