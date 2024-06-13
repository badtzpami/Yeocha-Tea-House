import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyClDx3IwCZBR8d2tmYcdKJDoZbrfglad3s",
  authDomain: "yeocha-tea-house.firebaseapp.com",
  projectId: "yeocha-tea-house",
  storageBucket: "yeocha-tea-house.appspot.com",
  messagingSenderId: "966247492139",
  appId: "1:966247492139:web:5eef0f06d355eefd3d586e"
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


// Fetch suppliers from Firestore and display in table
function fetchSuppliers() {
  db.collection("supplier-list").get().then((querySnapshot) => {
      const tableBody = document.getElementById("supplier-table-body");
      let counter = 1;
      querySnapshot.forEach((doc) => {
          const supplier = doc.data();
          const row = `
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">${counter++}</th>
                  <td class="px-6 py-4">${supplier["supplier-name"]}</td>
                  <td class="px-6 py-4">${supplier.email}</td>
                  <td class="px-6 py-4">${supplier["contact-number"]}</td>
                  <td class="px-6 py-4">${supplier.location}</td>
                  <td class="px-6 py-4">${supplier["primary-contact"]}</td>
                  <td class="px-6 py-4">
                      <a href="#" class="font-medium text-red-500 hover:text-red-300"><i class="fa-solid fa-trash-can"></i></a>
                      <a href="#" class="font-medium text-green-500 hover:text-green-300 mx-4"><i class="fa-solid fa-edit"></i></a>
                  </td>
              </tr>
          `;
          tableBody.insertAdjacentHTML('beforeend', row);
      });
  }).catch((error) => {
      console.error("Error fetching suppliers: ", error);
  });
}

document.addEventListener('DOMContentLoaded', fetchSuppliers);