
import mongoose  from "mongoose"
import UsuarioModel from "../model/usuario-model.mjs"
import UsuarioService from "../services/usuario-service.mjs"

class UsuarioRepositoryMongo{
  
    
    constructor(){
       this.model = UsuarioModel;
    }

  async  adicionar(usuario){
      try {
        const sucesso = await this.model.create(usuario);
        console.log("usuario salvo com sucesso", sucesso);
        return sucesso;
      } catch (error) {
        console.error("Error", error);
      }
    }

  async  excluir(email){
      try {
        const usuExcluido = await  this.model.deleteOne({email: email})
        console.log("Excluído!")
      } catch (error) {
        console.log("Não foi possível excluir repository")
        throw new Error("Não foi possível excluir o usuário no repositório.");
      }
    }

   async alterar(usuario){
    
    try {
      const query = {email:usuario.email};
      const update = {}; 
      if (usuario.nome) update.nome = usuario.nome;
      if (usuario.senha) update.senha = usuario.senha;
      const options = {new: true};
      const usuAtualizado = await this.model.findOneAndUpdate(query, update, options);
      return usuAtualizado;
    } catch (error) {
      console.log("Não foi possível alterar", error)
    }

    }

   async buscar(email){
        try {
          const query  = this.model.where({email});
          const usuBuscado = await query.findOne();
          return usuBuscado;
        } catch (error) {
          console.error("Não foi possível buscar usuário", error)  
        }
    }

  async  buscarTodos(){
     try {
        const sucesso = await this.model.find({}).exec();
        return sucesso;
     } catch (error) {
        console.error("Não foi possível retornar os usuários", error)
     }
    }
}

export default UsuarioRepositoryMongo;