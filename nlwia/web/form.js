import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")

form.addEventListener("submit", async(event) => {
  event.preventDefault()

  const videoURL = input.value
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse video não é um short")
  }

  const [_ ,params] = videoURL.split("/shorts/") // spera o que vem antes e depois do "/shorts"
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do audio..."

  await server.get("/summary/" + videoID) //espera isso finalizar para prosseguir o codigo

  content.textContent = "Realizando o resumo..."
})