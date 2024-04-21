document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/front/login.html";
  }

  const response = await fetch("http://localhost:3000/getMyProfile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401 || response.status === 403) {
    window.location.href = "/front/login.html";
  }

  const data = await response.json();

  document.getElementById("email").value = data.email;
  document.getElementById("name").value = data.name;
});
