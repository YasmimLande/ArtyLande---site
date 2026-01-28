// ==============================
// Modal
// ==============================

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close");

function openModal(item) {
  modal.style.display = "flex";

  modalImage.src = item.src;
  modalImage.alt = item.title;
  modalTitle.textContent = item.title;

  modalDetails.innerHTML = `
    <strong>Técnica:</strong> ${item.tecnica}<br>
    <strong>Dimensões:</strong> ${item.dimensoes}<br>
    <strong>Ano:</strong> ${item.ano}<br>
    <strong>Status:</strong> ${item.status}
  `;
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
