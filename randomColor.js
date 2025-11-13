let a = document.querySelector(".container").children;
function random() {
  let x = Math.ceil(0 + Math.random() * 255);
  let y = Math.ceil(0 + Math.random() * 255);
  let z = Math.ceil(0 + Math.random() * 255);
  return `rgb(${x}, ${y},${z})`;
}
Array.from(a).forEach((e) => {
  e.style.backgroundColor = random();
  e.style.color = random();
});
