document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const cardId = params.get("id");

  async function fetchCard(id) {
    const url = `https://hp-api.lainocs.fr/characters/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    displayCard(data);
  }

  function displayCard(card) {
    const template = document.getElementById("card-details");

    template.style.display = "block";
    template.id = "";
    template.querySelector(".card-title").textContent = card.name;
    template.querySelector(".card-eyes").textContent =
      "Couleur des yeux : " + card.eyes;
    template.querySelector(".card-hairs").textContent =
      "Couleur des cheveux : " + card.hairs;
    template.querySelector(".card-blood").textContent = "Sang : " + card.blood;
    template.querySelector(".card-wand").textContent =
      "baguette magique: " + card.wand;
    template.querySelector(".card-patronus").textContent =
      "Patronus : " + card.patronus;
    template.querySelector(".card-role").textContent = "Role : " + card.role;
    template.querySelector(".card-house").textContent =
      "Maison : " + card.house;
    template.querySelector(".card-actor").textContent =
      "Acteur : " + card.actor;
    template.querySelector(".card-img").src = card.image;
  }

  fetchCard(cardId);
});
