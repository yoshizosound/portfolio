// ===== ABOUT モーダル（右スライド式） =====
const aboutLink = document.getElementById("aboutLink");
const aboutPopup = document.getElementById("aboutPopup");
const closeAbout = document.getElementById("closeAbout");

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutPopup.classList.add("active");
});

closeAbout.addEventListener("click", () => {
  aboutPopup.classList.remove("active");
});


