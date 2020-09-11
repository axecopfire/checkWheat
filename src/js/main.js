class App {
  render() {
    let div = document.createElement("div");
    div.innerHTML = "This was created with stuff JS";
    return div;
  }
}

class Conversation {
  constructor() {
    this.kirby = {};
    this.otherGuy = {};
  }
}

class Clock {
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

window.onload = () => {
  const app = new App();
  new Clock();
  new Conversation();

  document.body.appendChild(app.render());
};
