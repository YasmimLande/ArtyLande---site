// ==============================
// Elementos da Galeria
// ==============================

const gallery = document.getElementById("gallery");
const filterTecnica = document.getElementById("filter-tecnica");
const filterTamanho = document.getElementById("filter-tamanho");

// ==============================
// Intersection Observer (animação)
// ==============================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

// ==============================
// Renderizar Galeria
// ==============================

function renderGallery(items) {
  gallery.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "gallery-item";

    div.innerHTML = `
      <img src="${item.src}" alt="${item.title}">
      <h4>${item.title}</h4>
    `;

    gallery.appendChild(div);
    observer.observe(div);

    div.addEventListener("click", () => {
      openModal(item);
    });
  });
}

// ==============================
// Filtros
// ==============================

function filterGallery() {
  const tecnica = filterTecnica.value;
  const tamanho = filterTamanho.value;

  const filteredItems = portfolioItems.filter(item =>
    (tecnica === "all" || item.tecnica === tecnica) &&
    (tamanho === "all" || item.tamanho === tamanho)
  );

  renderGallery(filteredItems);
}

filterTecnica.addEventListener("change", filterGallery);
filterTamanho.addEventListener("change", filterGallery);
