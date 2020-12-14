const setTime = () => {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hour = currentTime.getHours();

  const secDegree = (seconds / 60) * 360 + 90;
  const secondHand = document.querySelector(".second-hand");
  secondHand.style.transform = `rotate(${secDegree}deg)`;

  const minDegree = (minutes / 60) * 360 + 90;
  const minHand = document.querySelector(".min-hand");
  minHand.style.transform = `rotate(${minDegree}deg)`;

  const hourDegree = (hour / 12) * 360 + 90;
  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setTime, 1000);
