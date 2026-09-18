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
window.matchMedia("(min-width: 1001px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Native scrolling keeps the photo rail usable with touch and without JavaScript.
document.querySelectorAll(".photo-slider").forEach((slider) => {
  const rail = slider.querySelector(".photo-journal");
  const cards = Array.from(rail.querySelectorAll(".photo-card"));
  const previous = slider.querySelector("[data-slider-prev]");
  const next = slider.querySelector("[data-slider-next]");
  const counter = slider.querySelector("[data-slider-count]");
  const progress = slider.querySelector(".slider-progress span");
  let frame = 0;

  function position(card) {
    return card.offsetLeft - cards[0].offsetLeft;
  }
  function update() {
    frame = 0;
    const maximum = rail.scrollWidth - rail.clientWidth;
    const atStart = rail.scrollLeft < 4;
    const atEnd = rail.scrollLeft >= maximum - 4;
    previous.disabled = atStart;
    next.disabled = atEnd;
    const bounds = rail.getBoundingClientRect();
    const visible = cards
      .map((card, index) => {
        const rect = card.getBoundingClientRect();
        const overlap =
          Math.min(bounds.right, rect.right) - Math.max(bounds.left, rect.left);
        return overlap > rect.width * 0.5 ? index + 1 : null;
      })
      .filter(Boolean);
    const first = String(visible[0] || 1).padStart(2, "0");
    const last = String(visible.at(-1) || 1).padStart(2, "0");
    counter.textContent = `${first === last ? first : `${first}–${last}`} / ${String(cards.length).padStart(2, "0")}`;
    progress.style.transform = `scaleX(${maximum > 0 ? (rail.scrollLeft + rail.clientWidth) / rail.scrollWidth : 1})`;
  }
  function move(direction) {
    const current = rail.scrollLeft;
    const target =
      direction > 0
        ? cards.find((card) => position(card) > current + 8)
        : cards.findLast((card) => position(card) < current - 8);
    rail.scrollTo({
      left: target ? position(target) : direction > 0 ? rail.scrollWidth : 0,
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  }
  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  rail.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    // Keep keyboard focus on the rail while browsing; Tab still reaches each photo.
    rail.focus({ preventScroll: true });
    move(event.key === "ArrowRight" ? 1 : -1);
  });
  rail.addEventListener(
    "scroll",
    () => {
      if (!frame) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
  slider.querySelector(".slider-toolbar").hidden = false;
  slider.classList.add("is-enhanced");
  new ResizeObserver(update).observe(rail);
  update();
});

// Animate once on arrival, without making content depend on an animation to be visible.
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const running = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (reducedMotion.matches) return;
        const animation = entry.target.animate(
          [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 780, easing: "cubic-bezier(.2,.65,.3,1)" },
        );
        running.add(animation);
        animation.onfinish = () => running.delete(animation);
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(
      ".field-intro > *, .field-composition, .detail-intro > :not(.breadcrumb), .detail-photo, .section-heading > *, .service-row, .assortment-card, .multistem-feature, .about-content, .about-photo, .recruitment-card, .photo-slider, .gallery-grid, .wide-feature > *, .contact-top > *, .contact-item, .vacancy-intro > :not(.breadcrumb), .vacancy-photo",
    )
    .forEach((element) => observer.observe(element));
  reducedMotion.addEventListener("change", (event) => {
    if (!event.matches) return;
    observer.disconnect();
    running.forEach((animation) => animation.cancel());
    running.clear();
  });
}

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
