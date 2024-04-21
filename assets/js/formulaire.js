const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const securityCode = document.getElementById("securityCode").value;
  const username = document.getElementById("username").value;

  if (!isValidEmail(email)) {
    console.log("Adresse email invalide");
    return;
  }

  if (securityCode.length < 6) {
    console.log("Le code de sécurité doit contenir au moins 6 caractères");
    return;
  }

  if (username.length < 3) {
    console.log("L'identifiant doit contenir au moins 3 caractères");
    return;
  }

  console.log("Inscription réussie !");
  console.log("Email :", email);
  console.log("Code de sécurité :", securityCode);
  console.log("Identifiant :", username);
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
