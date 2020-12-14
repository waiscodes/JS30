const input = document.querySelectorAll(".controls input");

const updateHandler = (e) => {
  const suffix = e.target.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value + suffix
  );
};

input.forEach((x) => x.addEventListener("change", updateHandler));
input.forEach((x) => x.addEventListener("mousemove", updateHandler));
