const enterButton = document.getElementById("enterButton");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

if (enterButton && intro && mainContent) {
  enterButton.addEventListener("click", () => {
    intro.classList.add("hide");

    setTimeout(() => {
      intro.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1000);
  });
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
