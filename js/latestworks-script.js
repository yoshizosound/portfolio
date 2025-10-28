const videos = [
  { type: "youtube", id: "DiVQESA6ixA", title: "YKK About YKK DIGITAL SHOWROOM®" },
  { type: "instagram", url: "https://www.instagram.com/p/DJTmqDEzCGZ/embed", title: "TOYOTA CROWN ESTATE CG Movie" },
  { type: "instagram", url: "https://www.instagram.com/p/C76J97hy1Zt/embed", title: "TOYOTA LAND CRUISER 250 CG Movie" },
  { type: "youtube", id: "yLY4XL_Vm2c", title: "JapanFoundation  STAGE BEYOND BORDERS with the cooperation of EPAD" },
  { type: "youtube", id: "3XXyGdKUh5o", title: "Lemino BOXING 世界タイトルマッチ 井上尚弥vsサム・グッドマン" },
  { type: "youtube", id: "NLw4DYtLaXU", title: "ASEANJapan 50周年 Open the Golden Future" },
  { type: "youtube", id: "y4XAzTuvv_4", title: "ASEANJapan 50周年 Golden Bridge Short Video Campaign" },

];

const container = document.getElementById("video-container");

const grid = document.createElement("div");
grid.className = "video-grid";

 // ラッパー作成
videos.forEach(video => {
  const wrapper = document.createElement("div");
  wrapper.className = "video-wrapper";

 // YouTube iframe作成 
  if (video.type === "youtube") {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}`;
    iframe.title = video.title;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    wrapper.appendChild(iframe);
  } 
  // instagram iframe作成 
  else if (video.type === "instagram") {
    // Instagram埋め込みiframe
    const iframe = document.createElement("iframe");
    iframe.src = video.url;
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy"; // 遅延読み込み
    wrapper.appendChild(iframe);
  }

  // タイトル作成
  const caption = document.createElement("p2");
  caption.className = "video-title";
  caption.textContent = video.title;


  wrapper.appendChild(caption);
  grid.appendChild(wrapper);
});

 // コンテナに追加
container.appendChild(grid);


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


