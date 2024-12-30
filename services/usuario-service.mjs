import UsuarioRepositoryArray from "../repositories/usuario-repo-array.mjs"
import UsuarioRepositoryMongo from "../repositories/usuario-repo-mongo.mjs"

class UsuarioService{

    
    constructor(){
     this.usuarioRepoMongo = new UsuarioRepositoryMongo();
    }

  async  adicionar(usuario){
    try {
      const usuarioSalvo = await this.usuarioRepoMongo.adicionar(usuario);
      if(usuarioSalvo){
        console.log("Adicionado com sucesso/service")
        return {success: true}
      }else{
        return {success: false, message:"Usuário não foi adicionado!"}
      }
    
    } catch (error) {
      console.error("Erro ao adicionar usuário no serviço:", error.message);
      throw new Error("Erro no serviço ao adicionar usuário");
    }
      }  
      
    

    async excluir(email){
      try {
        const usuarios = await this.usuarioRepoMongo.buscarTodos();
        const existeUsuario = usuarios.some(usuario => usuario.email == email)
       
       if(existeUsuario){
        await  this.usuarioRepoMongo.excluir(email);
        return {success: true};
       }else{
        return {success: false, message: "Não existe usuário com esse email"}; 
       }
      
      } catch (error) {
      return  console.log("Não foi possível exluir!service")
      throw new Error(error.message ||"Não foi possível excluir o usuário no service.");
      }
    }
 
   async alterar(usuario){
    try {
      const usuarioAlterado =  await this.usuarioRepoMongo.alterar(usuario);
      return usuarioAlterado;
    } catch (error) {
      console.log("Error")
    }
  
  
    }

  async  buscar(email){
    try {
      let usuario = await this.usuarioRepoMongo.buscar(email);
      if(!usuario){
        console.error("Usuário não encontrado!")
      }
       return usuario;
      
    } catch (error) {
    return  console.error("Não foi possível buscar o usuário:")
    } 
    
    }

   async buscarTodos(){

     return await  this.usuarioRepoMongo.buscarTodos();
    }
}

export default UsuarioService;