const overlay = document.querySelector(".overlay");
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const closeBtn = document.querySelector(".closeBtn");

hamburgerBtn.addEventListener("click", () => {
  overlay.classList.add("show");
  closeBtn.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
  closeBtn.classList.remove("show");
});
