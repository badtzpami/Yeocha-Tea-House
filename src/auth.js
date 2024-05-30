import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgTQHJdXv7HTfX7vVSavAmJMVVt92Pcbs",
  authDomain: "vams-web.firebaseapp.com",
  projectId: "vams-web",
  storageBucket: "vams-web.appspot.com",
  messagingSenderId: "711764254531",
  appId: "1:711764254531:web:08d45912fee45503e8d9f6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to get query parameters from URL
function getQueryParams() {
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get('email');
  const password = queryParams.get('password');
  return { email, password };
}

// Perform auto-login if email and password are provided in the URL
const { email, password } = getQueryParams();
if (email && password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Sign-in successful:', user);
      console.log('Signed in with email:', email);
      alert('Sign-in successful!');
      // Redirect to another page if needed
      window.location.href = "dashboard.html"; // Change to your dashboard URL
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error('Error during sign-in:', errorMessage);
      document.getElementById('error-message').innerText = errorMessage;
    });
}

// Monitor auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user);
    // Redirect if necessary
    if (window.location.pathname.endsWith('/login.html')) {
      window.location.href = "dashboard.html"; // Change to your dashboard URL
    }
  } else {
    // User is signed out
    console.log('No user is signed in.');
    // Redirect to login page if necessary
    if (!window.location.pathname.endsWith('/login.html')) {
      window.location.href = "login.html"; // Change to your login page URL
    }
  }
});

// Log out functionality
document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logoutButton');

  if (logoutButton) {
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      signOut(auth)
        .then(() => {
          console.log('User signed out.');
          alert('You have been logged out.');
          window.location.href = "login.html";
        })
        .catch((error) => {
          console.error('Error signing out:', error);
          alert('Error signing out. Please try again.');
        });
    });
  }
});