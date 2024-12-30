
class UsuarioRepositoryArray{

    constructor(){
        this.usuarios=[];
    }

    adicionar(usuario){
        this.usuarios.push(usuario);
    }

    excluir(email){

        let localizaEmail = this.usuarios.findIndex((o) => {
            o.email==email;
        })
        
        this.usuarios.splice(localizaEmail, 1);

        
    }

    alterar(usuario){
     let usu =   this.usuarios.forEach((o) => {
            if(o.email==usuario.email){
                o.email = usuario.email? usuario.email: o.email;  
                o.nome = usuario.nome ? usuario.nome: o.nome;
             
            }
        });

        

    }

    buscar(email){
        let usu = this.usuarios.find(i => i.email == email );
                return usu;
    }

    buscarTodos(){

        return this.usuarios;
    }
}

export default  UsuarioRepositoryArray;