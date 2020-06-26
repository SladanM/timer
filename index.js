class Timer {
  constructor(durationInput, startClock, pauseClock) {
    this.durationInput = durationInput;
    this.startClock = startClock;
    this.pauseClock = pauseClock;

    this.startClock.addEventListener('click', this.start);
    this.pauseClock.addEventListener('click', this.stop);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  stop = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.stop();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector('#duration');
const startClock = document.querySelector('#startClock');
const pauseClock = document.querySelector('#pauseClock');

const timer = new Timer(durationInput, startClock, pauseClock);
