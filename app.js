// References to the HTML elements
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");

// Register event
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User registered successfully:", userCredential.user);
    })
    .catch((error) => {
      console.error("Registration error:", error.message);
    });
});

// Login event
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("User logged in successfully:", userCredential.user);
      logoutBtn.style.display = "block";
    })
    .catch((error) => {
      console.error("Login error:", error.message);
    });
});

// Logout event
logoutBtn.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("User logged out successfully");
      logoutBtn.style.display = "none";
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
    });
});