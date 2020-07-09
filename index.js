const durationInput = document.querySelector('#duration');
const startClock = document.querySelector('#startClock');
const pauseClock = document.querySelector('#pauseClock');

const timer = new Timer(durationInput, startClock, pauseClock, {
  onStart() {
    return console.log('timer started');
  },
  onTick() {
    console.log('ticked down');
  },
  onComplete() {
    console.log('time completed');
  },
});
