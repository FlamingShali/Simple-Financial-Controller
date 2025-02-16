import NavBar from "/NavBar.js";
import Hero from "/Hero.js"

class App {
  static init() {
    NavBar.createNav();
    Hero.createHero()
  }
}

App.init();
