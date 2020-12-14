const input = document.querySelectorAll(".controls input");

const updateHandler = (e) => {
  console.log(e.target.value);
};

input.forEach((x) => x.addEventListener("change", updateHandler));
