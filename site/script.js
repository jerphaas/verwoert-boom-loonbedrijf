"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
function closeMenu(returnFocus = false) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  if (returnFocus) menuButton.focus();
}
menuButton?.addEventListener("click", () => {
  const opening = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(opening));
  navigation.classList.toggle("is-open", opening);
  document.body.classList.toggle("menu-open", opening);
});
navigation
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => closeMenu()));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  )
    closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (
    menuButton?.getAttribute("aria-expanded") === "true" &&
    !event.target.closest(".site-header")
  )
    closeMenu();
});
window.matchMedia("(min-width: 851px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const lightbox = document.querySelector(".lightbox");
const gallery = Array.from(document.querySelectorAll("[data-gallery]"));
let photoIndex = 0;
function showPhoto(index) {
  photoIndex = (index + gallery.length) % gallery.length;
  const button = gallery[photoIndex];
  const image = lightbox.querySelector("figure img");
  image.src = button.dataset.gallery;
  image.alt = button.querySelector("img").alt;
  lightbox.querySelector("figcaption").textContent =
    `${button.dataset.caption} — ${photoIndex + 1} / ${gallery.length}`;
}
if (lightbox) {
  gallery.forEach((button, index) =>
    button.addEventListener("click", () => {
      showPhoto(index);
      lightbox.showModal();
      lightbox.querySelector(".lightbox-close").focus();
    }),
  );
  lightbox
    .querySelector(".lightbox-close")
    .addEventListener("click", () => lightbox.close());
  lightbox
    .querySelector(".lightbox-prev")
    .addEventListener("click", () => showPhoto(photoIndex - 1));
  lightbox
    .querySelector(".lightbox-next")
    .addEventListener("click", () => showPhoto(photoIndex + 1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(photoIndex + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPhoto(photoIndex - 1);
    }
  });
}
