import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgTQHJdXv7HTfX7vVSavAmJMVVt92Pcbs",
  authDomain: "vams-web.firebaseapp.com",
  projectId: "vams-web",
  storageBucket: "vams-web.appspot.com",
  messagingSenderId: "711764254531",
  appId: "1:711764254531:web:08d45912fee45503e8d9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function fetchUsers() {
  const tableBody = document.getElementById("group-table-body");
  getDocs(collection(db, "manage-user"))
    .then((querySnapshot) => {
      tableBody.innerHTML = ''; // Clear existing table body content
      querySnapshot.forEach((doc) => {
        const user = doc.data();
        console.log("User data:", user); // Debugging: Log user data
        const row = `
          <tr data-doc-id="${doc.id}" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">${user["group-name"]}</td>
            <td class="px-6 py-4">${user["group-level"]}</td>
            <td class="px-6 py-4">${user.status}</td>
            <td class="px-6 py-4"> 
              <a href="#" class="font-medium text-red-500 hover:text-red-300 delete-btn"><i class="fa-solid fa-trash-can"></i></a>
              <a href="#" class="font-medium text-green-500 hover:text-green-300 mx-4 edit-btn"><i class="fa-solid fa-edit"></i></a>
            </td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    })
    .catch((error) => {
      console.error("Error fetching users: ", error);
    });
}

// Function to delete a user document
function deleteUser(docId) {
  if (confirm("Are you sure you want to delete this user?")) {
    deleteDoc(doc(db, "manage-user", docId))
      .then(() => {
        console.log("Document successfully deleted!");
        fetchUsers(); // Refresh the table after deletion
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
}

// Event listener for delete button
document.addEventListener('click', function(event) {
  if (event.target.closest('.delete-btn')) {
    const row = event.target.closest('tr');
    const docId = row.dataset.docId;
    deleteUser(docId);
  }
});

// Event listener for edit button
document.addEventListener('click', function(event) {
  if (event.target.closest('.edit-btn')) {
    const row = event.target.closest('tr');
    const docId = row.dataset.docId;
    // Redirect to the edit page or open a modal for editing
    // You can implement this functionality based on your requirements
    console.log("Edit button clicked for document ID:", docId);
  }
});

// Call fetchUsers when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUsers);
