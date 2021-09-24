// let menu = ["HOME", "LESSON", "STADIO", "CONTACT"];
// let links = ["https://www.remijousselme.com/", "https://www.youtube.com/watch?v=fnPn6At3v28&list=RDMMXs97rEV1EBM&index=4", "https://www.youtube.com/watch?v=om-a-AHXXZo", "w3schools.com/jsref/met_element_addeventlistener.asp"];
//   nav = document.createElement("nav");

// document.getElementById("menuVar").appendChild(nav);

// menu.forEach(function (info) {
//   let lia = document.createElement("li");
//   nav.appendChild(lia);

//   lia.innerHTML += info;
// });

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
let h4 = "More Information";
document.getElementById("h3a").innerHTML = h3a;
document.getElementById("h3b").innerHTML = h3b;
document.getElementById("h4").innerHTML = h4;

let contacts = ["FACEBOOK", "INSTAGRAM", "SOUNDS CLOUD", "YOUTUBE"];
ul = document.createElement("ul");
document.getElementById("contacts").appendChild(ul);
contacts.forEach(function (contact) {
  let li1 = document.createElement("li");
  ul.appendChild(li1);
  li1.innerHTML += contact;
});

window.addEventListener("scroll", function () {
  let scroll = window.pageYOffset;
  if (scroll > 2300) {
    document.body.style.filter = "grayscale(15%)hue-rotate(30deg)";
  } else if (scroll > 1370) {
    document.body.style.filter = "grayscale(25%)hue-rotate(160deg)";
  } else if (scroll > 900) {
    document.body.style.filter = "grayscale(40%)hue-rotate(220deg)";
  } else if (scroll > 300) {
    document.body.style.filter = "grayscale(25%)hue-rotate(270deg)";
  } else {
    document.body.style.filter = "grayscale(15%)hue-rotate(330deg)";
  }
});

// window.addEventListener('scroll', function () {
//   let scrollTop = window.pageYOffset;
//   if (scrollTop <= boxHeight) {
//       photo1.style.filter = 'red';
//   } else {
//       photo1.style.filter = 'blue';
//   }
// });
