/** @format */

const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

portfolioItems.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.childNodes[1].classList.add("img-darken");
  });
  e.addEventListener("mouseout", () => {
    e.childNodes[1].classList.remove("img-darken");
  });
});
