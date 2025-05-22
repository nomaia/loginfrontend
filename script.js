const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// URL base da API hospedada no Render
const API_URL = "https://loginbackend-k2f6.onrender.com";

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    username: document.getElementById("regUsername").value,
    email: document.getElementById("regEmail").value,
    password: document.getElementById("regPassword").value
  };

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    });

    const data = await response.json();
    alert(data.message || data.detail);
    registerForm.reset();
  } catch (error) {
    alert("Erro ao registrar usuário.");
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const credentials = {
    username: document.getElementById("loginUsername").value,
    password: document.getElementById("loginPassword").value
  };

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });

    const data = await response.json();
    alert(data.message || data.detail);
    loginForm.reset();
  } catch (error) {
    alert("Erro ao fazer login.");
  }
});
