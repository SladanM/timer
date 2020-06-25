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
    console.log('tick tack');
  };
}

const durationInput = document.querySelector('#duration');
const startClock = document.querySelector('#startClock');
const pauseClock = document.querySelector('#pauseClock');

const timer = new Timer(durationInput, startClock, pauseClock);
