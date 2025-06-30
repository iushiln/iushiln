const noBtn = document.querySelector(".No-btn");
const main = document.querySelector(".main");

noBtn.addEventListener("mouseenter", () => {
  const maxX = main.clientWidth - noBtn.offsetWidth;
  const maxY = main.clientHeight - noBtn.offsetHeight;

  // Remove transition for instant move
  noBtn.style.transition = "none";

  let newX = Math.floor(Math.random() * maxX);
  let newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});
const yesBtn = document.querySelector(".yes-btn");

yesBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Stop the form from submitting
  window.location.href = "yes.html"; // Redirect to ye.html
});
