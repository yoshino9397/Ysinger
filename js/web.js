let h1 = "YURIA WAKAI";
let h2 = "Soprano Singer";
document.getElementById("name").innerHTML = h1;
document.getElementById("job").innerHTML = h2;

let works = ["PLAYING", "SLEEPY", "FALL"];
ul = document.createElement("ul");
document.getElementById("disco").appendChild(ul);
works.forEach(function (music) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += music;
});

let works1 = ["MEMORY", "SAKURA"];
ul1 = document.createElement("ul");
document.getElementById("disco1").appendChild(ul1);
works1.forEach(function (music) {
  let li = document.createElement("li");
  ul1.appendChild(li);
  li.innerHTML += music;
});

let h3a = "Discography";
let h3b = "Biography";

document.getElementById("h3a").innerHTML = h3a;
document.getElementById("h3b").innerHTML = h3b;

window.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  if (scroll > 3300) {
    document.body.style.filter = "grayscale(10%)";
  } else if (scroll > 3000) {
    document.body.style.filter = "grayscale(75%)";
  } else if (scroll > 1650) {
    document.body.style.filter = "grayscale(10%)";
  } else if (scroll > 1300) {
    document.body.style.filter = "grayscale(75%)";
  } else if (scroll > 550) {
    document.body.style.filter = "grayscale(10%)";
  } else if (scroll > 200) {
    document.body.style.filter = "grayscale(75%)";
  } else {
    document.body.style.filter = "grayscale(10%)";
  }
});
