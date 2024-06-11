const buttonElement = document.querySelector(".js-start-stop-button");
const timeObject = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};
let uniqueListenerId;
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
hoursElement.innerHTML = "00";
minutesElement.innerHTML = "00";
secondsElement.innerHTML = "00";
buttonElement.addEventListener("click", () => {
  if (buttonElement.innerHTML !== "Stop") {
    buttonElement.innerHTML = "Stop";
    uniqueListenerId = setInterval(() => {
      timeObject.seconds++;
      if (timeObject.seconds >= 60) {
        timeObject.seconds = 0;
        timeObject.minutes++;
      }
      if (timeObject.minutes >= 60) {
        timeObject.minutes = 0;
        timeObject.hours++;
      }

      let hoursString = String(timeObject.hours).padStart(2, "0");
      let minutesString = String(timeObject.minutes).padStart(2, "0");
      let secondsString = String(timeObject.seconds).padStart(2, "0");

      hoursElement.innerHTML = hoursString;
      minutesElement.innerHTML = minutesString;
      secondsElement.innerHTML = secondsString;
    }, 1000);
  } else {
    buttonElement.innerHTML = "Start";
    clearInterval(uniqueListenerId);
  }
});
const resetButtonElement = document.querySelector(".js-reset-button ");
resetButtonElement.addEventListener("click", () => {
  timeObject.hours = 0;
  timeObject.minutes = 0;
  timeObject.seconds = 0;
  buttonElement.innerHTML = "Start";
  clearInterval(uniqueListenerId);
  hoursElement.innerHTML = "00";
  minutesElement.innerHTML = "00";
  secondsElement.innerHTML = "00";
});
