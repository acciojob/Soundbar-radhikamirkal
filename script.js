const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

// Keep reference to all audio elements
let audios = {};

buttons.forEach((btn) => {
  const sound = btn.innerText;

  // Create audio element
  const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.setAttribute("data-sound", sound);

  // Append audio to body so Cypress can detect it
  document.body.appendChild(audio);

  audios[sound] = audio;

  btn.addEventListener("click", () => {
    stopAll();
    audio.play();
  });
});

// Stop all sounds
function stopAll() {
  Object.values(audios).forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Stop button
stopBtn.addEventListener("click", stopAll);
