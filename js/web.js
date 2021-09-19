let menu = ["HOME", "LESSON", "STADIO", "CONTACT"],
  nav = document.createElement("nav");

document.getElementById("menuVar").appendChild(nav);

menu.forEach(function (info) {
  let li = document.createElement("li");
  nav.appendChild(li);

  li.innerHTML += info;
});

let h1 = "YURIA WAKAI";
let h2 = "Soprano Singer";
document.getElementById("name").innerHTML = h1;
document.getElementById("job").innerHTML = h2;

let works = ["PLAYING", "SLEEPY", "FALL", "MEMORY"];
ul = document.createElement("ul");
document.getElementById("disco").appendChild(ul);
works.forEach(function (music) {
  let li = document.createElement("li");
  ul.appendChild(li);
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
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += contact;
});
