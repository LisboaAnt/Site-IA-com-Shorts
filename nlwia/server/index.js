import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()
app.use(cors()) //quando o express iniciar o server ele vai fazer com o cors(que faz a conexão de font e back)

app.get("/summary/:id", (request, response) => { //usamos o node --watch para toda alteração no codigo ele atualizar o server
  download(request.params.id)

  response.json({result: "Download realizado com sucessor!"})
})

app.listen(3333, () => console.log("Server is running on port 3333")) //Server na porta 33333
