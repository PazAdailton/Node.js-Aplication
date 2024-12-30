import mongoose from "mongoose"

class ManageDB {
  // Método para conectar ao banco de dados
  static async connect() {
    try {
      await mongoose.connect(
        process.env.MONGODB_REMOTO_KEY
      );
      console.log("Conectado com sucesso");
    } catch (err) {
      console.error("Erro ao conectar ao banco de dados:", err);
    }
  }

  // Método para fechar a conexão
  static async close() {
    try {
      await mongoose.connection.close();
      console.log("Conexão encerrada com sucesso");
    } catch (err) {
      console.error("Erro ao encerrar a conexão:", err);
    }
  }
}

export default ManageDB;
