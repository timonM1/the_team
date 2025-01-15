// PopOver
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// Toast
const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

toastBootstrap.show();

// Modal
// Capturar el modal
var myModal = new bootstrap.Modal(document.getElementById("playerModal"), {
  keyboard: false,
});

// Al abrir el modal, actualizar el contenido
document
  .querySelectorAll('[data-bs-toggle="modal"]')
  .forEach(function (element) {
    element.addEventListener("click", function (event) {
      var playerName = event.target.getAttribute("data-bs-name");
      var playerTitle = event.target.getAttribute("data-bs-title");
      var playerAge = event.target.getAttribute("data-bs-age");
      var playerGoals = event.target.getAttribute("data-bs-goals");
      var playerImage = event.target.getAttribute("data-bs-image");

      // Actualizar el contenido del modal
      document.getElementById("playerModalLabel").textContent = playerTitle;
      document.getElementById("playerName").textContent =
        "Nombre: " + playerName;
      document.getElementById("playerAge").textContent =
        "Edad: " + playerAge + " años";
      document.getElementById("playerGoals").textContent =
        "Goles: " + playerGoals;
      document.getElementById("playerImage").setAttribute("src", playerImage);
    });
  });
