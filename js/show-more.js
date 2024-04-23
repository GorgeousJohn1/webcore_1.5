const brands = document.querySelector(".brand-wrapper");
const button = document.querySelector(".show-button");
const btnText = button.querySelector(".show-button__text");
const btnImg = button.querySelector(".show-button__icon");
button.addEventListener("click", function() {
  if (btnText.textContent === "Показать все") {
    console.log('da');
    brands.classList.add("show");
    btnText.textContent = "Скрыть";
    btnImg.classList.add("show-button__icon--rotate");
  } else {
    brands.classList.remove("show");
    btnText.textContent = "Показать все";
    btnImg.classList.remove("show-button__icon--rotate");
  }

});