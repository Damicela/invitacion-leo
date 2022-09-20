

const btnAaudio = document.getElementById("btn-audio");

  const music = new Audio("./fotos/Bajo El Mar .mp3");
  music.loop = true;

  btnAaudio.onclick = function () {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };