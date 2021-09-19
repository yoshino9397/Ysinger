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
