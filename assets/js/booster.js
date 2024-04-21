document.addEventListener("DOMContentLoaded", async function () {
  const generateButton = document.getElementById("generateButton");

  const cardsContainer = document.getElementById("cardsContainer");

  generateButton.addEventListener("click", generateCards);

  async function fetchCards() {
    const url = `https://hp-api.lainocs.fr/characters`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        "Erreur lors de la récupération des données de l'API:",
        response.statusText
      );
      return [];
    }
    const data = await response.json();
    return data;
  }

  async function generateCards() {
    cardsContainer.innerHTML = "";
    const cards = await fetchCards();

    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
      const divCard = document.createElement("div");
      divCard.classList.add("card");

      const img = document.createElement("img");
      img.src = card.image;
      img.alt = card.name;

      const h2 = document.createElement("h2");
      h2.textContent = card.name;

      const p = document.createElement("p");
      p.textContent = `Maison : ${card.house ? card.house : "????"}`;

      const detailsLink = document.createElement("a");
      detailsLink.classList.add("card-details-link");
      detailsLink.href = `details.html?id=${card.slug}`;
      detailsLink.textContent = "Détails";

      divCard.appendChild(img);
      divCard.appendChild(h2);
      divCard.appendChild(p);
      divCard.appendChild(detailsLink);

      cardsContainer.appendChild(divCard);

      divCard.style.opacity = 0;
      divCard.style.transform = "scale(0.5)";
      divCard.style.transition = "opacity 0.5s, transform 0.5s";

      setTimeout(() => {
        divCard.style.opacity = 1;
        divCard.style.transform = "scale(1)";
      }, i * 300);
    }
  }
});
