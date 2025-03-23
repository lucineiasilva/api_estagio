import "dotenv/config.js";
import app from "./src/app.js";



app.listen(process.env.PORT, (req, res) => {
    console.log(`Servidor escutando em: http://localhost:${process.env.PORT}`)
})
