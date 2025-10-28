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

// ===== 送信完了POP=====
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // ページリロード防止

    const formData = new FormData(form);

    fetch("formmail.php", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      messageDiv.innerHTML = data; // PHPの返答を表示
      form.reset(); // フォームをリセット
    })
    .catch(error => {
      messageDiv.innerHTML = "<p>送信中にエラーが発生しました。再度お試しください。</p>";
      console.error(error);
    });
  });
});