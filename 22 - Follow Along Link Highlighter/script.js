const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

// Not a background, it's a separate element that moves on it's own to different positions.
highlight.classList.add("highlight");
document.body.appendChild(highlight);

const highlightLink = (e) => {
  const linkCoords = e.target.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

triggers.forEach((a) => a.addEventListener("mouseenter", highlightLink));
