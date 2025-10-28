const bgVideo = document.getElementById('bgVideo');
const muteBtn = document.getElementById('muteBtn');
const aboutLink = document.getElementById('aboutLink');
const aboutPopup = document.getElementById('aboutPopup');
const closeAbout = document.getElementById('closeAbout');



// 最初はミュート解除してユーザー操作で再生
bgVideo.muted = true; // 初期はミュート
muteBtn.textContent = 'UNMUTE';

// 最初の音量を設定
bgVideo.volume = 0.2; // 少し小さめに再生


// MUTEボタン
muteBtn.addEventListener('click', () => {
  bgVideo.muted = !bgVideo.muted;
  muteBtn.textContent = bgVideo.muted ? 'UNMUTE' : 'MUTE';

  if (!bgVideo.muted) {
    bgVideo.play(); // ユーザー操作で再生
  }
});

// ABOUTポップアップ開閉
aboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutPopup.classList.add('active');
  bgVideo.play(); // ユーザー操作で音を再生
});

closeAbout.addEventListener('click', () => {
  aboutPopup.classList.remove('active');
});


