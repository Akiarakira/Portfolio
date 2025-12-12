// Change theme

const themeToggle = document.querySelector("#themeToggle");
const bodyElement = document.querySelector("#body");

if (themeToggle && bodyElement) {
    const THEME_KEY = "theme";

    function getPreferredTheme() {
        return "dark";
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            bodyElement.classList.add("darkMode");
            bodyElement.classList.remove("lightMode");
            themeToggle.checked = true;
        } else {
            bodyElement.classList.add("lightMode");
            bodyElement.classList.remove("darkMode");
            themeToggle.checked = false;
        }
    }

    applyTheme(getPreferredTheme());

    themeToggle.addEventListener("change", function () {
        const next = themeToggle.checked ? "dark" : "light";
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
    });
}
