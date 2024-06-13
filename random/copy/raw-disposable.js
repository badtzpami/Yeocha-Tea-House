import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyClDx3IwCZBR8d2tmYcdKJDoZbrfglad3s",
  authDomain: "yeocha-tea-house.firebaseapp.com",
  projectId: "yeocha-tea-house",
  storageBucket: "yeocha-tea-house.appspot.com",
  messagingSenderId: "966247492139",
  appId: "1:966247492139:web:5eef0f06d355eefd3d586e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// ******************************* MILKTEA DISPOSABLE ITEMS
function fetchItemsMilkteaDis() {
  console.log("Fetching items...");
  const tableBody = document.getElementById("item-table-body");
  getDocs(collection(db, "disposable-items-milktea")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-bold">${item.id}</td>
          <td class="px-6 py-4">${item.item}</td>
          <td class="px-6 py-4 text-green-600">${item.stock}</td>
          <td class="px-6 py-4">${item.unit}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }).catch((error) => {
    console.error("Error fetching items: ", error);
  });
}

document.addEventListener('DOMContentLoaded', fetchItemsMilkteaDis);

// ******************************* MILKTEA RAW MATERIALS
function fetchItemsMilkteaRaw() {
  console.log("Fetching items...");
  const tableBody = document.getElementById("materials-table-body");
  getDocs(collection(db, "raw-materials-milktea")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-bold">${item.id}</td>
          <td class="px-6 py-4">${item.ingredient}</td>
          <td class="px-6 py-4 text-green-600">${item.stock}</td>
          <td class="px-6 py-4">${item.unit}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }).catch((error) => {
    console.error("Error fetching items: ", error);
  });
}

document.addEventListener('DOMContentLoaded', fetchItemsMilkteaRaw);



// ******************************* SNACK RAW MATERIALS
function fetchItemsSnackRaw() {
  console.log("Fetching items...");
  const tableBody = document.getElementById("snack-table-body");
  getDocs(collection(db, "raw-materials-snack")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-bold">${item.id}</td>
          <td class="px-6 py-4">${item.ingredient}</td>
          <td class="px-6 py-4 text-green-600">${item.stock}</td>
          <td class="px-6 py-4">${item.unit}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }).catch((error) => {
    console.error("Error fetching items: ", error);
  });
}

document.addEventListener('DOMContentLoaded', fetchItemsSnackRaw);

// ******************************* SNACK DISPOSABLE ITEMS

function fetchItemsSnacksDis() {
  console.log("Fetching items...");
  const tableBody = document.getElementById("snack-table-body");
  getDocs(collection(db, "disposable-items-milktea")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-bold">${item.id}</td>
          <td class="px-6 py-4">${item.item}</td>
          <td class="px-6 py-4 text-green-600">${item.stock}</td>
          <td class="px-6 py-4">${item.unit}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }).catch((error) => {
    console.error("Error fetching items: ", error);
  });
}

document.addEventListener('DOMContentLoaded', fetchItemsSnacksDis);

