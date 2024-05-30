import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyCgkvx0dFvMt2-5w-wYwytX4lA_mDrYTao",
  authDomain: "vams-website.firebaseapp.com",
  projectId: "vams-website",
  storageBucket: "vams-website.appspot.com",
  messagingSenderId: "285065276814",
  appId: "1:285065276814:web:c637c011cf2ad3566e08df"
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
