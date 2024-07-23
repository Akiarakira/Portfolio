// Change theme

const lightMode = document.querySelector("#lightMode");
const defaultMode = document.querySelector("#defaultMode");
const darkMode = document.querySelector("#darkMode");
const bodyElement = document.querySelector("#body");

lightMode.addEventListener("click", function() {
    console.log("click en light mode");
    bodyElement.classList.add("lightMode");
    bodyElement.classList.remove("defaultMode");
    bodyElement.classList.remove("darkMode");
    lightMode.classList.add("active");
    darkMode.classList.remove("active");
    defaultMode.classList.remove("active");
    changeLogos();
})

defaultMode.addEventListener("click", function() {
    console.log("click en default mode");
    bodyElement.classList.add("defaultMode");
    bodyElement.classList.remove("lightMode");
    bodyElement.classList.remove("darkMode");
    lightMode.classList.remove("active");
    darkMode.classList.remove("active");
    defaultMode.classList.add("active");
    changeLogos();
})

darkMode.addEventListener("click", function() {
    console.log("click en dark mode");
    bodyElement.classList.add("darkMode");
    bodyElement.classList.remove("lightMode");
    bodyElement.classList.remove("defaultMode");
    lightMode.classList.remove("active");
    darkMode.classList.add("active");
    defaultMode.classList.remove("active");
    changeLogos();
})

/* Change logos for dark or light mode */

const logoAlpine = document.querySelector(".logoAlpine");
const logoHtmx = document.querySelector(".logoHtmx");

function changeLogos()  {
    if (bodyElement.classList.contains("defaultMode") || body.classList.contains("lightMode")) {
        logoAlpine.setAttribute("src", "./css/img/alpine_long.png");
        logoHtmx.setAttribute("src", "./css/img/htmx.svg");
    } else {
        logoAlpine.setAttribute("src", "./css/img/alpine.dark.svg");
        logoHtmx.setAttribute("src", "./css/img/htmx.dark.svg");
    }
}
