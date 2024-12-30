import Usuario from "../domain/usuario-domain.mjs"
import UsuarioService from "../services/usuario-service.mjs"
import express from 'express'



class UsuarioController{

    constructor(){
        this.usuarioService =  new UsuarioService();
       }
   
      async adicionar(req, res){
        try {
        let usuario = new Usuario();
            const {email, nome, senha} = usuario;
            usuario = req.body;
          if(!usuario.email || !usuario.nome || !usuario.senha){
            res.send("Todos os campos são obrigatórios")
          }else{
            const adicionarUsuario = await this.usuarioService.adicionar(usuario);
          if(adicionarUsuario.success){
            res.send("Adicionado com sucesso")
            console.log("Usuário adicionado controller")
          }else{
            res.send(({ error: adicionarUsuario.message }));
          }
          }
          
        } catch (error) {
          res.send("Não foi possível adicionar usuário")
        }

        }  
       
   
       async excluir(req, res, email){
         try {
          const email = req.body.email;
          const usuarioExcluido = await this.usuarioService.excluir(email)
          if(usuarioExcluido.success){
          res.send("Excluído/controller")
          }else{
            return res.status(404).json({ error: usuarioExcluido.message });
            console.log("Não existe usuário com esse email")
          }
         } catch (error) {
          res.send("Não foi possível excluir")
         }
       }  
    
      async alterar(req, res,usuario){
        try {
          const usuarioAlterado = await this.usuarioService.alterar(req.body);
          if(usuarioAlterado){
            res.json({message: "alterado:", usuarioAlterado}) 
          }else{
            res.json("Não existe usuário com esse e-mail")
          }
             
        } catch (error) {
          res.send("Não foi possível alterar o usuário")
        }
       }
   
      async  buscar(req, res, email){
      try {
        const usuario = await this.usuarioService.buscar(req.body.email);
        if(usuario){
        res.json({message: "Objeto buscado com sucesso", usuario})
        }else{
          res.json("Usuário não existe")
        }
      } catch (error) {
        res.send("Não foi possível buscar o usuário")
      }
      }
      async buscarTodos(req, res){
        try {
          const usuarios = await new UsuarioService().buscarTodos();
          console.log("Usuários buscados: ", usuarios)
          res.json(usuarios)
        } catch (error) {
          console.error("Error", error)
          res.status(500).json({ error: "Erro ao buscar usuários" });
        }

       }

}

export default UsuarioController;