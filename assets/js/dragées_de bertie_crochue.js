const flavors = [
  { taste: "pomme", good: true },
  { taste: "crotte de nez", good: false },
  { taste: "chocolat", good: true },
  { taste: "savon", good: false },
  { taste: "cerise", good: true },
  { taste: "terre", good: false },
  { taste: "citron", good: true },
  { taste: "œuf pourri", good: false },
  { taste: "vanille", good: true },
  { taste: "sardine", good: false },
  { taste: "menthe", good: true },
  { taste: "ail", good: false },
  { taste: "framboise", good: true },
  { taste: "sueur", good: false },
  { taste: "melon", good: true },
  { taste: "petrole", good: false },
  { taste: "banane", good: true },
  { taste: "poubelle", good: false },
  { taste: "mangue", good: true },
  { taste: "oignon", good: false },
];

const colors = [
  "#FF6347",
  "#4682B4",
  "#32CD32",
  "#FFD700",
  "#6A5ACD",
  "#FF69B4",
  "#8A2BE2",
  "#FFA500",
  "#20B2AA",
  "#D2691E",
];

function showDragee() {
  document.getElementById("drageeBox").style.display = "none";
  document.getElementById("dragee").style.display = "flex";
  const randomIndex = Math.floor(Math.random() * flavors.length);
  const flavor = flavors[randomIndex];
  const dragee = document.querySelector(".dragee");
  dragee.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  dragee.dataset.taste = flavor.taste;
  dragee.dataset.good = flavor.good;
}

function eatDragee() {
  const dragee = document.querySelector(".dragee");
  alert(
    dragee.dataset.good === "true"
      ? "Miam! " + dragee.dataset.taste
      : "Beurk! " + dragee.dataset.taste
  );
  document.getElementById("dragee").style.display = "none";
  document.getElementById("drageeBox").style.display = "flex";
}

function leaveDragee() {
  document.getElementById("dragee").style.display = "none";
  document.getElementById("drageeBox").style.display = "flex";
}

document.getElementById("drageeBox").addEventListener("click", showDragee);
