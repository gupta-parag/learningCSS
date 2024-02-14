//Selecting elements

let section1 = document.querySelector("#page1");
let cursor = document.querySelector("#cursor");

section1.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
  });
});

section1.addEventListener("mouseenter", function (e) {
  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
  });
});

section1.addEventListener("mouseleave", function (e) {
  gsap.to(cursor, {
    scale: 0,
    opacity: 0,
  });
});
