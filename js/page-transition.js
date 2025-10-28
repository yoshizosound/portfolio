// js/page-transition.js
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".fade-overlay");
  if (!overlay) return;

  // 初期表示時にフェードイン
  overlay.classList.add("active");
  setTimeout(() => {
    overlay.classList.remove("active");
  }, 400); // フェード速度と合わせる

  // ページ遷移時のフェードアウト
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener("click", e => {
      const url = link.getAttribute("href");
      // #リンクや同ページリンクは除外
      if (!url || url.startsWith("#") || url.startsWith("javascript:")) return;
      e.preventDefault();
      overlay.classList.add("active");
      setTimeout(() => {
        window.location.href = url;
      }, 400);
    });
  });
});
