window.addEventListener("DOMContentLoaded", () => {
  const img1 = document.querySelector(".overlay.sway2");
  const img2 = document.querySelector(".overlay2.sway3");
  const img3 = document.querySelector(".overlay3.sway");
  const img4 = document.querySelector(".overlay4.sway");

  function animateImage(img) {
    img.classList.add("shake");
    setTimeout(() => {
      img.classList.remove("shake");
    }, 1000);
  }

  img1.addEventListener("click", () => animateImage(img1));
  img2.addEventListener("click", () => animateImage(img2));
  img3.addEventListener("click", () => animateImage(img3));
  img4.addEventListener("click", () => animateImage(img4));
});
