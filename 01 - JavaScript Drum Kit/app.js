const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // Transform is the css property.
  e.target.classList.remove("playing");
};
// Foreach loop over qsAll items to add event listener
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

// Window vs document event listeners
window.addEventListener("keydown", playSound);
