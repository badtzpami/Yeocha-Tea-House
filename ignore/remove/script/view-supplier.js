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

function fetchSuppliers() {
  console.log("Fetching suppliers...");
  const tableBody = document.getElementById("supplier-table-body");
  getDocs(collection(db, "supplier-list")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const supplier = doc.data();
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">${supplier["supplier-name"]}</td>
          <td class="px-6 py-4">${supplier.email}</td>
          <td class="px-6 py-4">${supplier["contact-number"]}</td>
          <td class="px-6 py-4">${supplier.location}</td>
          <td class="px-6 py-4">${supplier["primary-contact"]}</td>
          <td class="px-6 py-4"> 
          <a href="#" class="font-medium text-blue-500  hover:text-blue-300 shopping-btn  mr-2"><i class="fa-solid fa-shopping-cart"></i></a>
          <a href="#" class="font-medium text-red-500  hover:text-red-300  delete-btn  mr-2"><i class="fa-solid fa-trash-can"></i></a>
          <a href="#" class="font-medium text-green-500  hover:text-green-300  edit-btn  mr-2"><i class="fa-solid fa-edit"></i></a>
        </td>
        

        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }).catch((error) => {
    console.error("Error fetching suppliers: ", error);
  });
}

document.addEventListener('DOMContentLoaded', fetchSuppliers);


// *******************************
// Function to delete a supplier document
function deleteSupplier(docId) {
  if (confirm("Are you sure you want to delete this supplier?")) {
      db.collection("supplier-list").doc(docId).delete()
          .then(() => {
              console.log("Document successfully deleted!");
              // You may also want to remove the corresponding row from the table
          })
          .catch((error) => {
              console.error("Error removing document: ", error);
          });
  }
}

// Event listener for delete button
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
      // Find the parent row of the delete button
      const row = event.target.closest('tr');
      // Extract the document ID from the row
      const docId = row.dataset.docId;
      // Call the deleteSupplier function with the document ID
      deleteSupplier(docId);
  }
});

// Event listener for edit button
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-btn')) {
      // Find the parent row of the edit button
      const row = event.target.closest('tr');
      // Extract the document ID from the row
      const docId = row.dataset.docId;
      // Redirect to the edit page or open a modal for editing
      // You can implement this functionality based on your requirements
      console.log("Edit button clicked for document ID:", docId);
  }
});
