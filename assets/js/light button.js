const btnToggle = document.querySelector(".btn-toggle");

btnToggle.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    btnToggle.innerHTML = "Go Dark";
  } else if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
    btnToggle.innerHTML = "Go Light";
  }
});

const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
