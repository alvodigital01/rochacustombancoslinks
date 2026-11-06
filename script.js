// Edite os links de cada produto aqui. Links vazios ou provisórios ficam ocultos.
const PRODUTOS = {
  slim: {
    ml: "https://produto.mercadolivre.com.br/MLB-5230221201",
    shopee: "COLAR_LINK_SHOPEE_SLIM"
  },
  plus: {
    ml: "https://produto.mercadolivre.com.br/MLB-5238559647",
    shopee: "COLAR_LINK_SHOPEE_PLUS"
  },
  biz: {
    ml: "https://produto.mercadolivre.com.br/MLB-7868832824",
    shopee: "COLAR_LINK_SHOPEE_BIZ"
  }
};

const WHATSAPP = "https://wa.me/5543984168902?text=";
const MENSAGENS = {
  slim: "Oi! Vim pelo link e quero a Capa Comfort Slim pra CG 160. Qual o valor no Pix?",
  plus: "Oi! Vim pelo link e quero a Capa Comfort Plus pra CG 160. Qual o valor no Pix?",
  biz: "Oi! Vim pelo link e quero a Capa Comfort pra Biz 125. Qual o valor no Pix?",
  custom: "Oi! Vim pelo link e queria saber se vocês fazem capa pra minha moto: "
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-product]").forEach((link) => {
    const url = PRODUTOS[link.dataset.product]?.[link.dataset.store]?.trim();
    if (!url || !/^https?:\/\//i.test(url)) return;
    link.href = url;
    link.hidden = false;
  });

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = WHATSAPP + encodeURIComponent(MENSAGENS[link.dataset.whatsapp]);
    link.hidden = false;
  });

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
