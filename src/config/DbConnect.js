import *as dotenv  from"dotenv"
import SendMail from "../utils/SendMail.js"
import mongoose from "mongoose"

dotenv.config()

class DbConnect {
    static async conectar() {
        try {
            mongoose.set("strictQuery", false)
           await mongoose.connect(process.env.DB_URL)
           .then(response => {
                console.log("Conexão com o banco estabelecida!")
           })
           .catch(error => {
                console.log("Erro na conexão com o banco de dados: " + error)  
                SendMail.enviaEmailErrorDbConnect(error, new URL(import.meta.url).pathname, new Date()); 
           })
           let db = mongoose.connection
        } catch (error) {
            SendMail.enviaEmailErrorDbConnect(error, new URL(import.meta.url).pathname, new Date());
            
        }
    }
    static async desconectar() {
        try {
            await mongoose.disconnect()
            console.log("Conexão com o banco encerrada!")
        } catch (error) {
            SendMail.enviaEmailErrorDbConnect(error, new URL(import.meta.url).pathname, new Date());
        }
    }
}
export default DbConnect;