


// const testInput = document.getElementById("test-input");
// document.getElementsByTagName("button")[0].addEventListener("click", () => {
//   if (testInput.attributes.type.value == "password") {
//     testInput.attributes.type.value = "text";
//   } else {
//     testInput.attributes.type.value = "password";
//   }
// });

const langContent = {
  az: ["Ana Sehife", "Haqqinda", "Xidmetler", "Meqaleler", "Elaqe"],
  en: ["Home", "About", "Services", "Blogs", "Contact"],
};

const langBtn = document.getElementById("lang-btn");
const navLink = document.getElementsByClassName("nav-link");

const changeLang = () => {
    if (langBtn.innerHTML === "AZ") {
        for (let i in langContent.az) {
            navLink[i].innerHTML = langContent.az[i];
        }
        langBtn.innerHTML = "EN";
    } else {
        for (let i in langContent.en) {
            navLink[i].innerHTML = langContent.en[i];
        }
        langBtn.innerHTML = "AZ";
    }
};
langBtn.addEventListener("click", changeLang);

const modeBtn = document.getElementById("mode-btn");
const nav = document.getElementsByTagName('nav')[0];
// navLink[0].style.color="red";
// navLink[0].style.fontSize="20px";
// navLink[0].style.backgroundColor="blue";


const changeMode = () => {
    if (modeBtn.innerHTML==="Light") {
        modeBtn.innerHTML="Dark";
        nav.attributes.class.value = "navbar navbar-expand-lg bg-light navbar-light";
    } else {
        modeBtn.innerHTML="Light";
        nav.attributes.class.value = "navbar navbar-expand-lg bg-dark navbar-dark";
        
    }

};
modeBtn.addEventListener("click", changeMode);