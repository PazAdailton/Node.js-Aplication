import Server from "./server.mjs"
import ManageDB from "./DB/ManageDB.mjs"




   // Ecma Script common js 
    class App{
        constructor(){}
        
        start(){    
        ManageDB.connect()
        new Server().start()
        }

    }

    new App().start()
    export default App