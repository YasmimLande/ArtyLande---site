// ==============================
// Inicialização do Site
// ==============================

document.addEventListener("DOMContentLoaded", () => {
  renderGallery(portfolioItems);
});

// ==============================
// Splash Screen
// ==============================

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  if (!splash) return;

  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
      splash.remove();
    }, 800);
  }, 1800);
});
