import mongoose from 'mongoose'
import Usuario from "../domain/usuario-domain.mjs"
//definindo modelo (estrutura da collection)
const UsuarioSchema = mongoose.Schema(
    { email: String, 
      nome:String, 
      senha:String, 
      dataCadastro:String 
    }
    );
//objeto que contém os dados
 UsuarioSchema.loadClass(Usuario) 
 export default mongoose.model('Usuario', UsuarioSchema) 
 
    