class App {
  render() {
    let div = document.createElement("div");
    div.innerHTML = "This was created with stuff JS";
    return div;
  }
}

class Conversation {
  constructor() {
    this.root = document.getElementById("conversation");
    this.charactersList = [
      "nes-mario",
      "nes-ash",
      "nes-pokeball",
      "nes-bulbasaur",
      "nes-charmander",
      "nes-squirtle",
      "nes-kirby",
    ];
    this.dialog = [
      [
        "Have you heard about this new game?",
        `Oh my gosh. Haven't we all?`,
        `This game is everywhere.`,
      ],
      [
        `Hey how did you end up here?`,
        `I'm not sure. Last thing I remember was...`,
        `I don't think we're supposed to be here.`,
        `You might be right but until I'm told otherwise. I think I'll stay`,
      ],
      [
        `Hey what are you supposed to be?`,
        `Are you talking to me?`,
        `There's no one else here for me to be talking to.`,
        `Well this is awkward.`,
      ],
      [
        `Is there a moderator here?`,
        `Hi there, how can I help?`,
        `I'm looking for how to checkWheat. It doesn't say anywhere on here`,
        `Yeah, its simple enough. When it asks what you want to do. Just type in checkWheat`,
        `Whoa thats awesome! Thanks!`,
      ],
      [
        `I've spent about 40 hours playing this game. I love it!`,
        `You should really keep your opinions to yourself.`,
        `I won't be moderated!`,
        `You're going to get kicked.`,
      ],
    ];
    this.init();
  }
  init() {
    this.messageList = []; // rendered messagelist
    this.activeCharacters = [];
    this.activeConversation = [];
    this.counter = 0;
    this.setConvo();
    this.render();
    this.simulateConvo(0);
  }
  reset() {
    this.messageList = []; // rendered messagelist
    this.activeCharacters = [];
    this.activeConversation = [];
    this.counter = 0;
    this.init();
  }
  setConvo() {
    const spot = Math.floor(Math.random() * this.dialog.length);
    const character = () =>
      this.charactersList[
        Math.floor(Math.random() * this.charactersList.length)
      ];

    this.activeConversation = this.dialog[spot];
    this.activeCharacters = [character(), character()];
  }

  simulateConvo() {
    const convoOver = this.counter >= this.activeConversation.length - 1;
    if (this.root.childElementCount >= 30 && convoOver) {
      return;
    }
    if (convoOver) {
      this.reset();
      return;
    }
    const message = this.createMessage(
      this.activeConversation[this.counter],
      this.counter
    );
    this.addMessage(message)
      .then(() => {
        this.counter++;
        this.render();
        this.simulateConvo();
      })
      .catch((e) => console.error(e));
  }

  addMessage(message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.messageList.push(message);
        resolve();
      }, 2000);
    });
  }

  createMessage(content, counter) {
    const p = document.createElement("p");
    const i = document.createElement("i");
    const section = document.createElement("section");
    const div = document.createElement("div");

    p.textContent = content;

    if (counter % 2 !== 0) {
      div.classList.add("nes-balloon", "from-right", "is-dark");
      section.classList.add("message", "custom", "-right");
      i.classList.add(this.activeCharacters[1]);
    } else {
      i.classList.add(this.activeCharacters[0]);
      div.classList.add("nes-balloon", "from-left", "is-dark");
      section.classList.add("message", "custom", "-left");
    }

    div.appendChild(p);
    section.appendChild(div);
    section.appendChild(i);
    return section;
  }

  // for each item from the message list
  // determine if its left or right
  // determine which character to use

  render() {
    this.messageList.forEach((msg) => {
      this.root.prepend(msg);
    });
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
