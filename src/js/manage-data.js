import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

// Fetch users for manage-group
async function fetchGroupUsers() {
  const tableBody = document.getElementById("group-table-body");
  if (!tableBody) {
    console.error("Element with ID 'group-table-body' not found.");
    return;
  }

  try {
    const querySnapshot = await getDocs(collection(db, "manage-group"));
    tableBody.innerHTML = ''; // Clear existing table body content
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      const row = `
        <tr data-doc-id="${doc.id}" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">${user["group-name"]}</td>
          <td class="px-6 py-4">${user["group-level"]}</td>
          <td class="px-6 py-4 text-green-600">${user.status}</td>
          <td class="px-6 py-4"> 
            <a href="#" class="font-medium text-red-500 hover:text-red-300 delete-btn"><i class="fa-solid fa-trash-can"></i></a>
            <a href="#" class="font-medium text-green-500 hover:text-green-300 mx-4 edit-btn"><i class="fa-solid fa-edit"></i></a>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
}

// Fetch users for manage-user
async function fetchManageUsers() {
  const tableBody = document.getElementById("user-table-body");
  if (!tableBody) {
    console.error("Element with ID 'user-table-body' not found.");
    return;
  }

  try {
    const querySnapshot = await getDocs(collection(db, "manage-user"));
    tableBody.innerHTML = ''; // Clear existing table body content
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      const row = `
        <tr data-doc-id="${doc.id}" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">${user.name}</td>
          <td class="px-6 py-4">${user.username}</td>
          <td class="px-6 py-4">${user["user-role"]}</td>
          <td class="px-6 py-4 text-green-600">${user.status}</td>
          <td class="px-6 py-4"> 
            <a href="#" class="font-medium text-red-500 dark:text-blue-500 hover:text-red-300 delete-btn"><i class="fa-solid fa-trash-can"></i></a>
            <a href="#" class="font-medium text-green-500 dark:text-blue-500 hover:text-green-300 mx-4 edit-btn"><i class="fa-solid fa-edit"></i></a>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching users: ", error);
  }
}

// Fetch suppliers for supplier-list
async function fetchSuppliers() {
  const tableBody = document.getElementById("supplier-table-body");
  if (!tableBody) {
    console.error("Element with ID 'supplier-table-body' not found.");
    return;
  }

  try {
    const querySnapshot = await getDocs(collection(db, "supplier-list"));
    tableBody.innerHTML = ''; // Clear existing table body content
    querySnapshot.forEach((doc) => {
      const supplier = doc.data();
      const row = `
        <tr data-doc-id="${doc.id}" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">${supplier["supplier-name"]}</td>
          <td class="px-6 py-4">${supplier.email}</td>
          <td class="px-6 py-4">${supplier["contact-number"]}</td>
          <td class="px-6 py-4">${supplier.location}</td>
          <td class="px-6 py-4">${supplier["primary-contact"]}</td>
          <td class="px-6 py-4"> 
            <a href="#" class="font-medium text-blue-500 hover:text-blue-300 shopping-btn mr-2"><i class="fa-solid fa-shopping-cart"></i></a>
            <a href="#" class="font-medium text-red-500 hover:text-red-300 delete-btn mr-2"><i class="fa-solid fa-trash-can"></i></a>
            <a href="#" class="font-medium text-green-500 hover:text-green-300 edit-btn mr-2"><i class="fa-solid fa-edit"></i></a>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching suppliers: ", error);
  }
}

// Call fetch functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchGroupUsers();
  fetchManageUsers();
  fetchSuppliers();
});
