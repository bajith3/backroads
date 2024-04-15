var hamburgerMenuEl = document.querySelector(".hamburger-menu");
var AllheaderLinksEl = document.querySelectorAll(".header-links");
var absnavbarEl = document.querySelector(".abs-nav-bar");
var allToursEl = document.querySelector(".all-tours");

hamburgerMenuEl.addEventListener("click", () => {
  absnavbarEl.classList.toggle("abs-nav-bar-open");
});

AllheaderLinksEl.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    absnavbarEl.classList.remove("abs-nav-bar-open");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 60;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

function AllTours() {
  window.scrollTo({
    left: 0,
    top: 65,
    behavior: "smooth",
  });
}
