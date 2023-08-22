import axios from "axios";

import FormData from "form-data";
// import { dirname } from "path";
// const ytdl = require('ytdl-core');
const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;
const NODE_SERVER = import.meta.env.VITE_NODE_SERVER;
console.log("NODE_SERVER", NODE_SERVER);
const node_server = axios.create({
  baseURL: NODE_SERVER,
  // headers: { Authorization: `token ${JWT_TOKEN}` },
});

const model = "whisper-1";

export const getTranscript = async (link) => {
  // download audio file
  const audioFileRes = await node_server.get(
    `/audio-file?link=${encodeURIComponent(link)}`,

    // audio files require responseType: 'arraybuffer'
    // { responseType: 'arraybuffer' }
  );

  console.log("audioFile", audioFileRes);

  // downloads audio file
  // const audioFileArrayBuffer = audioFileRes.data;
  // const audioFileBlob = new Blob([audioFileArrayBuffer], {
  //   type: "audio/mp3",
  // });
  // const audioFileURL = window.URL.createObjectURL(audioFileBlob);
  // const linkElement = document.createElement("a");
  // linkElement.href = audioFileURL;
  // linkElement.download = "audio_file.mp3";
  // document.body.appendChild(linkElement);
  // linkElement.click();
  // document.body.removeChild(linkElement);
  // window.URL.revokeObjectURL(audioFileURL);
};
