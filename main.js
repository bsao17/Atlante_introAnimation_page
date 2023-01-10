import {Video} from "./module/video.mjs";

const la_ronde_du_pere_noel = new Video("La Ronde Du¨Père Noël", "https://youtu.be/9aQ2FzVUjxo")
Video.getVideo();

let video = document.getElementById("videoContainer");
const skipButton = document.querySelector("#buttonPlay")
function toggleMute() {
    if (video.muted) {
      video.muted = false;
      video.volume = 1;
    }
    else {
      video.muted = true;
      video.volume = 0;
    }
  }
skipButton.addEventListener("click", toggleMute);

