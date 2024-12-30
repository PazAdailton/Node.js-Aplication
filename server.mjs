import express from 'express'
import path  from 'path'
import UsuarioRoutes from './Routes/usuario-routes.mjs'
import mongoose from 'mongoose'
import {fileURLToPath} from "url"





  class Server{
    constructor(){
      this.app = express();
       this.port = process.env.port || 3000;
        this.usuarioRoutes = new UsuarioRoutes();
             }
    
      start(){
        
        const __dirname = path.dirname(fileURLToPath(import.meta.url))
        this.app.use(express.json())
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(this.usuarioRoutes.router)
        
        this.app.listen(this.port, '127.0.0.1', () =>{      
        console.log('Listening on 127.0.0.1:3000');
      });
      }
  }
 
  export default Server


 //ManageDB.close();






























 //leitura de um arquivo statico
/* app.get("/", (req,res ) => {
    const home = path.join(__dirname, 'public', 'home.html');
    res.sendFile(home);
}); */


/* const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
const requestTime = function (req, res, next) {
  req.requestTime = {"time": Date.now()}
  next()
}
app.use(myLogger)
app.use(requestTime)

 */
