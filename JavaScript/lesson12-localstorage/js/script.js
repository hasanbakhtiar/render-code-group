// localStorage.setItem(); //yaradir
// localStorage.getItem(); //chagirir
// localStorage.removeItem(); //tek-tek silir
// localStorage.clear(); //hamisini silir

const headText = document.querySelector("h1");
const btn = document.querySelector("button");

btn.onclick = () => {
  if (btn.innerHTML == "dark") {
    headText.innerHTML = "Dark";
    btn.innerHTML = "light";
    localStorage.setItem("mode", "dark");
  } else {
    headText.innerHTML = "Light";
    btn.innerHTML = "dark";
    localStorage.setItem("mode", "light");
  }
};

if (localStorage.getItem("mode") == "dark") {
  headText.innerHTML = "Dark";
  btn.innerHTML = "light";
} else {
  headText.innerHTML = "Light";
  btn.innerHTML = "dark";
}
