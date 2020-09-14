import faker from 'faker';
import App from './app'
import Conversation from './conversation'
import Clock from './clock'

class Comments {
  constructor () {
    this.reviews = [
      'Best game ever played',
      `10/10 wouldn't buy again`,
      `It's a real experience`,
      `I bought this game for my mom. I thought it was a game that we could play together. But the themes were a little too adult for her '40s sensibilities.`,
      `What a waste of time. I've been looking through the app marketplace looking for a better waste of time but couldn't find one.`,
      `I've been playing this game for 4 hours in the mall. It's so lucky that mall cops can be bribed with assorted candies.`,
      `I waited in line for 3 days to beta test this game and didn't get in. But I've heard great things about this game.`,
      `If time and space came together and had an inter dimensional affair creating an offspring of unparalled proportions it would probably be a game something like this.`,
      `I could spend all night thinking of compliments for this game`,
      `What's great about video games is there is no physiological downside. I've heard that being around other people can lead to canker soars.`,
      `I like that this game is silly and I like that it is doable. I can do it.`,
      `This game isn't too hard. Like the battles are kinda hard but I can do them.`,
      `I like the universe, the art... Uhhh and all the different creatures are pretty cool.`,
      `I like the puzzles.`
    ]
    document.body.appendChild(this.createProfile())
  }
  createUser() {
    return faker.helpers.contextualCard();
  }
  createProfile() {
    const user = this.createUser();
    console.log(user)
    const div = this.createEl('div');
    const avatar = this.createEl('img');
    const name = this.createEl('h4');
    const description = this.createEl('p');
    name.textContent = user.username;
    avatar.src = user.avatar;
    description.textContent = this.reviews[Math.floor(Math.random() * this.reviews.length)];
    div.classList.add('user');
    div.appendChild(name);
    div.appendChild(avatar);
    div.appendChild(description)
    return div
  } 
  createEl(el) {
    return document.createElement(el);
  }
}



window.onload = () => {
  const app = new App();
  new Clock();
  new Conversation();
  new Comments();

  document.body.appendChild(app.render());
};
