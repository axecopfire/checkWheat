import faker from 'faker';
import App from './app'
import Conversation from './conversation'
import Clock from './clock'



window.onload = () => {
  console.log(faker.name.findName())
  const app = new App();
  new Clock();
  new Conversation();

  document.body.appendChild(app.render());
};
