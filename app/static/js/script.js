// const eventTime = window.eventTime;
// console.log(eventTime);
// timer class
class Timer {
  timerValue = 0;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerInterval;
  timerElement;

  constructor(timerValue, timerElement) {
    this.timerValue = timerValue;
    this.timerElement = timerElement;
    this.seconds = timerValue * 60;
  }

  start() {
    this.setTimerInterval();
  }

  displayTime({ days, hours, minutes, seconds }) {
    this.timerElement.textContent = `${String(days).padStart(2, "0")}:${String(
      hours
    ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  reduceTimer() {
    const days = Math.floor(this.seconds / 60 / 60 / 24);
    const hours = Math.floor(this.seconds / 60 / 60) % 24;
    const minutes = Math.floor(this.seconds / 60) % 60;

    const seconds = this.seconds % 60;

    if (this.seconds > 0) this.seconds--;
    else {
      this.clearTimerInterval();
    }

    return { days, hours, minutes, seconds };
  }

  setTimerInterval() {
    this.timerInterval = setInterval(() => {
      const { days, hours, minutes, seconds } = this.reduceTimer();
      this.displayTime({ days, hours, minutes, seconds });
    }, 1000);
  }

  clearTimerInterval() {
    console.log("ran");
    clearInterval(this.timerInterval);
    this.done();
  }

  done() {
    console.log(this.timerElement);
    this.timerElement.style.background = "red";
    this.timerElement.textContent = "red"; // BUG???
  }
}

let timerElement = document.querySelector(".timer");
// const timer = new Timer(2885, timerElement);
// timer.start();

const finalTime = document.getElementById("timer");

// parsing to text
const finalTimeScript = JSON.parse(finalTime.textContent);
// console.log(finalTimeScript);

// converting to Date object
const desiredDate = new Date(finalTimeScript);
// console.log(desiredDate);
// 18th 20hrs 38mins 06mins
const currentTime = new Date();
// console.log(currentTime);

// getting the time difference
const timeDifferenceInSeconds = (desiredDate - currentTime) / 1000;
const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
// console.log(timeDifferenceInMinutes);

//instantiating timer object
countDownTimer = new Timer(timeDifferenceInMinutes, timerElement);
countDownTimer.start();
