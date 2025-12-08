// // SVG 아이콘 템플릿
// const SVG_ICONS = {
//   play: `<svg class="icon-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//     <polygon points="5,3 19,12 5,21" />
//   </svg>`,
//   pause: `<svg class="icon-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//     <rect x="5" y="3" width="5" height="18" />
//     <rect x="14" y="3" width="5" height="18" />
//   </svg>`,
// };

// // Swiper 초기화
// const swiper = new Swiper(".swiper", {
//   loop: false,
//   effect: "fade",
//   fadeEffect: {
//     crossFade: true,
//   },
//   speed: 2200,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination-custom",
//     type: "fraction",
//     formatFractionCurrent: (number) => number,
//     formatFractionTotal: (number) => number,
//   },
//   navigation: {
//     nextEl: ".swiper-next",
//     prevEl: ".swiper-prev",
//   },
// });

// // DOM 요소 캐싱
// const playPauseBtn = document.getElementById("playPauseBtn");
// const prevBtn = document.querySelector(".swiper-prev");
// const nextBtn = document.querySelector(".swiper-next");

// // Play/Pause 버튼 기능
// const togglePlayPause = () => {
//   const isPlaying = playPauseBtn.classList.contains("playing");

//   if (isPlaying) {
//     swiper.autoplay.stop();
//     playPauseBtn.classList.remove("playing");
//     playPauseBtn.innerHTML = SVG_ICONS.play;
//     playPauseBtn.setAttribute("aria-label", "슬라이드 재생");
//   } else {
//     swiper.autoplay.start();
//     playPauseBtn.classList.add("playing");
//     playPauseBtn.innerHTML = SVG_ICONS.pause;
//     playPauseBtn.setAttribute("aria-label", "슬라이드 일시정지");
//   }
// };

// if (playPauseBtn) {
//   playPauseBtn.addEventListener("click", togglePlayPause);
// }

// // 네비게이션 버튼 활성/비활성 업데이트
// const updateNavButtons = () => {
//   if (!prevBtn || !nextBtn) return;

//   prevBtn.classList.toggle("disabled", swiper.isBeginning);
//   nextBtn.classList.toggle("disabled", swiper.isEnd);
// };

// // 초기 상태 및 슬라이드 변경 시 버튼 업데이트
// updateNavButtons();
// swiper.on("slideChange", updateNavButtons);

// sec01 ball ani
gsap.to('.sec1 [aria-label="ball"] .img--block img', {
  y: 10,
  duration: 3,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  stagger: {
    each: 0.9,
    from: "random",
  },
});

document.querySelectorAll('.sec1 [aria-label="ball01"] .img--block img').forEach((el) => floatRandom(el));
document.querySelectorAll('.sec2 [aria-label="ball02"] .img--block img').forEach((el) => floatRandom(el));
document.querySelectorAll('.sec5 [aria-label="ball03"] .img--block img').forEach((el) => floatRandom(el));

function floatRandom(target) {
  gsap.to(target, {
    x: gsap.utils.random(-30, 30), // 좌우 랜덤 이동
    y: gsap.utils.random(-30, 30), // 위아래 랜덤 이동
    duration: gsap.utils.random(2, 4), // 시간도 랜덤
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

gsap.to('.sec1 [aria-label="menu"] .img--block img', {
  y: 10,
  duration: 3,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  stagger: {
    each: 0.9,
    from: "random",
  },
});