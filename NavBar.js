export default class NavBar {
  constructor() {}

  static createNav() {
    const navBar = document.createElement("nav");
    document.querySelector("body").append(navBar);
    navBar.className = "nav-top";

    navBar.innerHTML = `
         <p>INC. Banking</p>
         <div>
            <a>Menu</a>
            <a>Shop</a>
            <a>Contact</a>
         </div>`.toUpperCase()
  }
}
