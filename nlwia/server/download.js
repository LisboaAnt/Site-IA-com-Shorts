import ytdl from 'ytdl-core';
import fs from 'fs';
import { error } from 'console';

export const download = (videoId) =>{
  const videoURL = "https://www.youtube.com/shorts/" +videoId
  console.log("Realizando o download do video: " + videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly"})
  .on("info", (info) =>{
    const seconds = info.formats[0].approxDurationMs /1000

    if(seconds > 60){
      throw new error(" A duração desse video é maior que 60 segundos")
    }
  }
  ).on("ned", () => {
    console.log("Download do video finalizado")
  }).on("error", (error) => {
    console.log(
      "Não foi possivel fazer o dowload do video. Detalhes do error:",
      error  
    )
  })
  .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
