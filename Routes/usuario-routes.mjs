import express from 'express'
import Usuario from '../domain/usuario-domain.mjs'
import UsuarioController from '../controller/usuario-controller.mjs'


var usuario = new Usuario;

  class UsuarioRoutes{
          constructor(){
          this.router = express.Router()
          this.usuarioController = new  UsuarioController();
          this.loadRoutes();
        }

        loadRoutes(){

        this.router.get("/usuario/buscar",(req, res) => { 
         this.usuarioController.buscar(req, res);
        }); 
        this.router.get("/usuario", this.usuarioController.buscarTodos)
        //this.router.get("/usuario/buscar", this.usuarioController.bind(this.usuarioController))
        //this.router.post("/usuario", usuarioController.adicionar.bind(usuarioController))
        this.router.post("/usuario", (req, res) => this.usuarioController.adicionar(req, res));
        this.router.delete("/usuario", (req, res) => this.usuarioController.excluir(req, res));
        this.router.put("/usuario", (req, res) => this.usuarioController.alterar(req, res));

        }
        }

  
        export default UsuarioRoutes
  //module.exports = new UsuarioRoutes().router
 





// *************************************************** //




/* router.get("/usuario",(req, res) => { 
      usuarioController.buscarTodos(req, res);

  }); */

/*   router.get("/usuario/buscar",(req, res) => { 
    usuarioController.buscar(req, res);
  });  */

/*   router.post("/usuario", (req, res) => { 
    usuarioController.adicionar(req, res);
  });   */

/*   router.delete("/usuario", (req, res) =>{
     usuarioController.excluir(req, res);
  });
 */
 //*************************************************// 


/* 
router.get("/usuario/buscar", async (req, res) => { 
  
    const usuario = await usuarioService.buscar(req.body.email);
    if(usuario && usuario != null){
    res.json({message: "Objeto buscado com sucesso", usuario})
    }else{
      res.send("Não foi possível encontrar o objeto!")
    }
   
});
router.get("/usuario", async (req, res) => { 
    
  try {
    const usuarios = await usuarioService.buscarTodos();
    console.log("Usuários buscados: ", usuarios)
    res.json(usuarios)
  } catch (error) {
    console.error("Error", error)
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
  });
  router.post("/usuario", (req, res) =>{ 
    let usuario =  new Usuario(req.body.email, req.body.nome , req.body.senha, req.requestTime);
    usuarioService.adicionar(usuario) 
    res.json(usuario);
  });
  router.put("/usuario", async (req, res) =>{  
      try {
        const usuarioAlterado = await usuarioService.alterar(req.body);
        res.json({message: "alterado:", usuarioAlterado})    
      } catch (error) {
        }
      });
    router.delete("/usuario", async (req, res) =>{  
    await usuarioService.excluir(req.body.email)
    res.send("Excluído!")
    }); */
   