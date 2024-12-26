const editBtn = document.querySelector("#edit-btn");
const closeBtn = document.querySelector("#close-btn");
const saveBtn = document.querySelector("#save-btn");
const likeButtons = document.querySelectorAll(".elements__like-btn");
const userName = document.querySelector("#user-name");
const userBiography = document.querySelector("#user-biography");
const popUp = document.querySelector(".popup");
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const biographyInput = document.querySelector("#biography-input");

editBtn.addEventListener("click", () => {
  popUp.classList.add("popup_opened");

  // Cargar los valores actuales del perfil en los inputs
  nameInput.value = userName.textContent.trim();
  biographyInput.value = userBiography.textContent.trim();
});

closeBtn.addEventListener("click", () => {
  popUp.classList.remove("popup_opened");
});

document.addEventListener("DOMContentLoaded", () => {
  popUp.classList.remove("popup_opened");
});

// Guardar los cambios al enviar el formulario
form.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Actualizar los valores del perfil con los valores de los inputs
  userName.textContent = nameInput.value.trim();
  userBiography.textContent = biographyInput.value.trim();

  // Cerrar el popup después de guardar los cambios
  popUp.classList.remove("popup_opened");
});

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("elements__like-btn_active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  likeButtons.classList.remove("elements__like-btn_active");
});
