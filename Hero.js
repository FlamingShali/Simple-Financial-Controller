export default class Hero {
  static createHero() {
    const heroSection = document.createElement("section");
    document.querySelector("body").append(heroSection);
    heroSection.className = "hero-section";
    heroSection.innerHTML = `
            <div class="intr-section">
                <p class='text-bg'>Manage your </p>
                <p class='text-bg'>finances</p>
                <p class='text-sm'>Control your expenses, save your income and statements with a simple click</p>
                

            </div>
            <div class="info-section">
                <p>Here will be info section</p>
            </div>

        `;
  }
}
