export default class Clock {
  constructor() {
    this.time = new Date();
    this.render();
    setInterval(() => this.tickClock(), 1000);
  }
  tickClock() {
    this.render();
    this.time = new Date();
  }
  render() {
    document.getElementById("clock").textContent = this.time;
  }
}