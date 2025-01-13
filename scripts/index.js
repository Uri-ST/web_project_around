//variables cards

const elementsContainer = document.querySelector("#elements-container-cards");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
initialCards.forEach((card) => {
  // Contenedor de la tarjeta
  const cardElement = document.createElement("div");
  cardElement.classList.add("elements__card");

  //HTML de la tarjeta
  cardElement.innerHTML = `
    <div class="elements__trash-icon"></div>
    <div class="elements__img-container">
      <img
        class="elements__img"
        src="${card.link}"
        alt="Fotografía de ${card.name}"
      />
    </div>
    <div class="elements__info">
      <h2 class="elements__card-title">${card.name}</h2>
      <div
        class="elements__like-btn"
        id="like-btn"
      ></div>
    </div>
  `;

  // Inserta la tarjeta en el contenedor
  elementsContainer.appendChild(cardElement);
});

// variables para modificar nombre de usuario
const userName = document.querySelector("#user-name");
const userBiography = document.querySelector("#user-biography");

const closeBtn = document.querySelector("#close-btn");
const editBtn = document.querySelector("#edit-btn");
const saveBtn = document.querySelector("#save-btn");
const popUp = document.querySelector(".popup");
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const biographyInput = document.querySelector("#biography-input");

// variables para card

const closeNewCardBtn = document.querySelector("#new-card-close-btn");
const addBtn = document.querySelector("#add-btn");
const createBtn = document.querySelector("#create-btn");
const newCard = document.querySelector(".new-card");
const newCardForm = document.querySelector("#new-card-form");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");
const cardContainer = document.querySelector(".elements");
const trashButtons = document.querySelectorAll(".elements__trash-icon");

document.addEventListener("DOMContentLoaded", () => {
  popUp.classList.remove("popup_opened");
});

document.addEventListener("DOMContentLoaded", () => {
  newCard.classList.remove("new-card_opened");
});

//

editBtn.addEventListener("click", () => {
  popUp.classList.add("popup_opened");

  // Cargar los valores actuales del perfil en los inputs
  nameInput.value = userName.textContent.trim();
  biographyInput.value = userBiography.textContent.trim();
});

addBtn.addEventListener("click", () => {
  newCard.classList.add("new-card_opened");
});

//

closeBtn.addEventListener("click", () => {
  popUp.classList.remove("popup_opened");
});

closeNewCardBtn.addEventListener("click", () => {
  newCard.classList.remove("new-card_opened");
});

// Form editar perfil
form.addEventListener("submit", (evt) => {
  evt.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Actualizar los valores del perfil con los valores de los inputs
  userName.textContent = nameInput.value.trim();
  userBiography.textContent = biographyInput.value.trim();

  // Cerrar el popup después de guardar los cambios
  popUp.classList.remove("popup_opened");
});

// Formulario para crear nueva card
newCardForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del formulario

  const cardName = titleInput.value; // Obtiene el valor del título
  const cardLink = imageInput.value; // Obtiene el valor del enlace de la imagen

  if (cardName && cardLink) {
    // Verifica que ambos campos estén llenos
    createNewCard(cardName, cardLink); // Crea la tarjeta
    newCardForm.reset(); // Limpia el formulario
    newCard.classList.remove("new-card_opened"); // Cierra el modal
  } else {
    alert("Por favor, completa ambos campos."); // Mensaje de validación
  }
});

// Función para crear una nueva tarjeta
function createNewCard(name, link) {
  const cardHTML = `
    <div class="elements__card">
      <div class="elements__trash-icon"></div>
      <div class="elements__img-container">
        <img class="elements__img" src="${link}" alt="Imagen de ${name}" />
      </div>
      <div class="elements__info">
        <h2 class="elements__card-title">${name}</h2>
        <div class="elements__like-btn"></div>
      </div>
    </div>
  `;

  // Inserta la nueva tarjeta al principio del contenedor
  cardContainer.insertAdjacentHTML("afterbegin", cardHTML);

  // Agrega el evento de clic al nuevo botón de eliminación
  const newTrashButton = cardContainer.querySelector(".elements__trash-icon");
  newTrashButton.addEventListener("click", (event) => {
    const card = event.target.closest(".elements__card");
    if (card) {
      card.remove();
    }
  });

  // Llama a la función para asignar el evento de "like" al nuevo botón
  addLikeButtonEvent();
}

// Función para agregar el evento de clic en los botones de like
function addLikeButtonEvent() {
  const likeButtons = document.querySelectorAll(".elements__like-btn");

  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Alterna la clase 'elements__like-btn_active' para cambiar el estado del botón
      button.classList.toggle("elements__like-btn_active");
    });
  });
}

// Llama a la función para agregar los eventos a los botones de like iniciales
document.addEventListener("DOMContentLoaded", () => {
  addLikeButtonEvent(); // Asigna el evento a los botones de like al cargar la página
});

document.addEventListener("DOMContentLoaded", () => {
  // Asigna eventos de eliminación a los botones existentes
  document.querySelectorAll(".elements__trash-icon").forEach((trashButton) => {
    trashButton.addEventListener("click", (event) => {
      const card = event.target.closest(".elements__card");
      if (card) {
        card.remove(); // Elimina la tarjeta correspondiente
      }
    });
  });
});
