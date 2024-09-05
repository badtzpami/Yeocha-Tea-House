import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


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
const storage = getStorage(app);



function fetchProducts() {
  const tableBody = document.getElementById("product-table-body");
  getDocs(collection(db, "products"))
    .then(async (querySnapshot) => {
      tableBody.innerHTML = ''; // Clear existing table body content
      for await (const doc of querySnapshot.docs) {
        const product = doc.data();
        const imageUrl = await getImageUrl(product["image-path"]); // Fetch image URL from storage
        const row = `
          <tr data-doc-id="${doc.id}" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">${product["product-id"]}</td>
            <td class="px-6 py-4"><img src="img/charger.jpg" alt="Product Image" style="max-width: 100px;"></td>
            <td class="px-6 py-4">${product["product-title"]}</td>
            <td class="px-6 py-4">${product["product-category"]}</td>
            <td class="px-6 py-4">${product["buying-price"]}</td>
            <td class="px-6 py-4">${product["selling-price"]}</td>
            <td class="px-6 py-4">${product["in-stock"]}</td>
            <td class="px-6 py-4"> 
              <a href="#" class="font-medium text-red-500 hover:text-red-300 delete-btn"><i class="fa-solid fa-trash-can"></i></a>
              <a href="#" class="font-medium text-green-500 hover:text-green-300 mx-4 edit-btn"><i class="fa-solid fa-edit"></i></a>
            </td>
          </tr>
          <tr data-doc-id="${doc.id}" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">${product["product-id"]}</td>
            <td class="px-6 py-4"><img src="img/charger.jpg" alt="Product Image" style="max-width: 100px;"></td>
            <td class="px-6 py-4">${product["product-title"]}</td>
            <td class="px-6 py-4">${product["product-category"]}</td>
            <td class="px-6 py-4">${product["buying-price"]}</td>
            <td class="px-6 py-4">${product["selling-price"]}</td>
            <td class="px-6 py-4">${product["in-stock"]}</td>
            <td class="px-6 py-4"> 
              <a href="#" class="font-medium text-red-500 hover:text-red-300 delete-btn"><i class="fa-solid fa-trash-can"></i></a>
              <a href="#" class="font-medium text-green-500 hover:text-green-300 mx-4 edit-btn"><i class="fa-solid fa-edit"></i></a>
            </td>
          </tr>
        
        `;
        tableBody.innerHTML += row;
      }
    })
    .catch((error) => {
      console.error("Error fetching products: ", error);
    });
}

async function getImageUrl(imagePath) {
  const imageRef = ref(storage, imagePath);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error getting image URL: ", error);
    return ""; // Return empty string if there's an error fetching the image URL
  }
}

// Function to delete a product document
function deleteProduct(docId) {
  if (confirm("Are you sure you want to delete this product?")) {
    deleteDoc(doc(db, "products", docId))
      .then(() => {
        console.log("Document successfully deleted!");
        fetchProducts(); // Refresh the table after deletion
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
    deleteProduct(docId);
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

// Call fetchProducts when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchProducts);