// Edite os links de cada produto aqui. Links vazios ou provisórios ficam ocultos.
const PRODUTOS = {
  slim: {
    ml: "https://www.mercadolivre.com.br/up/MLBU5194180060?matt_tool=38524122&pdp_filters=item_id:MLB5230221201&ua=tatR4xVW4woZlxvlt0NWTGdddYLiz0uG_HS2a7KNuuO3N5jU#origin=share&sid=share&wid=MLB5230221201&action=copy",
    shopee: "https://br.shp.ee/pBvyWdE1"
  },
  plus: {
    ml: "https://www.mercadolivre.com.br/up/MLBU5209684614?matt_tool=38524122&pdp_filters=item_id:MLB5238559647&ua=jHmz4OG-5fGp6EANBYPUBuG4NWF6dYKynIR4n6Noc2LDVh2H#origin=share&sid=share&wid=MLB5238559647&action=copy",
    shopee: "https://br.shp.ee/PdtN3GcK"
  },
  biz: {
    ml: "https://www.mercadolivre.com.br/up/MLBU5614777839?matt_tool=38524122&pdp_filters=item_id:MLB7868832824&ua=-0q9LE-j9ZmULkj-8dzNA52PdJkb5rYAvje7NySWbTtB8698#origin=share&sid=share&wid=MLB7868832824&action=copy",
    shopee: "https://br.shp.ee/EV8p7Dsy"
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

const imageViewer = document.querySelector(".image-viewer");
const viewerPhoto = imageViewer.querySelector(".image-viewer-photo");
document.querySelectorAll(".product-preview").forEach((button) => {
  button.addEventListener("click", () => {
    const photo = button.querySelector("img");
    viewerPhoto.src = photo.src;
    viewerPhoto.alt = photo.alt;
    imageViewer.showModal();
  });
});
imageViewer.querySelector(".image-viewer-close").addEventListener("click", () => imageViewer.close());
imageViewer.addEventListener("click", (event) => {
  if (event.target === imageViewer) {
    const bounds = imageViewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) imageViewer.close();
  }
});
imageViewer.addEventListener("close", () => viewerPhoto.removeAttribute("src"));