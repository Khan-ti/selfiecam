import "./style.css";
import { getVideo, drawVideo } from "./src/camera.js";

(async function run() {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const button = document.getElementById("camera");

  button.addEventListener("click", function() {
    drawVideo(video, canvas);
  });
})();
