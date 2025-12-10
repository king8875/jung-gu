

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
document.querySelectorAll('.sec3 [aria-label="ball04"] .img--block img').forEach((el) => floatRandom(el));
document.querySelectorAll('.sec3 [aria-label="ball05"] .img--block img').forEach((el) => floatRandom(el));

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