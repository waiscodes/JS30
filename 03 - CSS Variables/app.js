const input = document.querySelectorAll(".controls input");

const updateHandler = (e) => {
  const suffix = e.target.dataset.sizing;
  console.log(suffix);
};

input.forEach((x) => x.addEventListener("change", updateHandler));
input.forEach((x) => x.addEventListener("mousemove", updateHandler));
