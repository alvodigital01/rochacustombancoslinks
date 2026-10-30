document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".reveal");
  const logo = document.querySelector(".logo");
  const year = document.querySelector("#current-year");

  // Mantém o site apresentável enquanto a logo oficial ainda não foi adicionada.
  const showLogoFallback = () => logo.classList.add("is-missing");
  logo.addEventListener("error", showLogoFallback);

  // O erro pode ocorrer antes do DOMContentLoaded em conexões muito rápidas.
  if (logo.complete && logo.naturalWidth === 0) {
    showLogoFallback();
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Entrada suave e escalonada dos elementos, sem bibliotecas externas.
  animatedItems.forEach((item, index) => {
    window.setTimeout(() => {
      item.classList.add("is-visible");
    }, 100 + index * 85);
  });

  // Evita que links de exemplo causem uma navegação acidental antes da edição.
  document.querySelectorAll('a[href^="LINK_"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
});
