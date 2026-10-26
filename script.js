document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  const year = document.querySelector("#current-year");
  if (logo) {
    const showFallback = () => logo.classList.add("is-missing");
    logo.addEventListener("error", showFallback);
    if (logo.complete && logo.naturalWidth === 0) showFallback();
  }
  if (year) year.textContent = new Date().getFullYear();
});
