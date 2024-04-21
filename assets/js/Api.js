document.addEventListener("DOMContentLoaded", function () {
  async function fetchCards() {
    const url = `https://hp-api.lainocs.fr/characters`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function initSlider() {
    const cards = await fetchCards();
    const slider = $("#slider");

    cards.forEach((card) => {
      const slide = $("<div class='swiper-slide card'>");
      slide.append(`<img src="${card.image}" alt="${card.name}"/>`);
      slide.append(`<h2>${card.name}</h2>`);
      slide.append(`<p>${card.house}</p>`);

      // Créer un élément de lien pour les détails et l'ajouter à la slide
      const detailsLink = $(
        `<a class='card-details-link' href='details.html?id=${card.slug}'>Détails</a>`
      );
      slide.append(detailsLink);

      slider.append(slide);
    });

    slider.slick({
      infinite: true,
      slidesToShow: 3, // Afficher 3 cartes à la fois
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // Afficher une seule carte sur les appareils mobiles
          },
        },
      ],
    });
  }

  initSlider();
});
