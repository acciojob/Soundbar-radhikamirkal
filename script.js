//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let currentAudio = null;

// Play sound when button clicked
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});

// Stop button logic
document.querySelector(".stop").addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
