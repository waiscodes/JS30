const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

const logText = (e) => {
  console.log(e.target.classList.value);
  // e.stopPropagation(); this is how you stop bubbling up. This a solution for previous problems where I had to add if statements
};

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    // this is where you'd specify the type of click you want. capture or bubble
    capture: false,
    // this unbinds it to remove click event after it's clicked.
    once: true,
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true,
  }
);
