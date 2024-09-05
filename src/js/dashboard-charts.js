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

// Fetch items from Firestore
function fetchItems(collectionName, tableBodyId) {
  console.log("Fetching items...");
  const tableBody = document.getElementById(tableBodyId);
  getDocs(collection(db, collectionName)).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const item = doc.data();
      const row = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4 font-bold">${item.id}</td>
          <td class="px-6 py-4">${item.ingredient || item.item}</td>
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

document.addEventListener('DOMContentLoaded', function() {
  fetchItems("disposable-items-milktea", "item-table-body");
  fetchItems("raw-materials-milktea", "materials-table-body");
  fetchItems("raw-materials-snack", "raw-materials-snack-table-body");
  fetchItems("disposable-items-snack", "disposable-items-snack-table-body");
  fetchItems("disposable-items-milktea", "disposable-items-frappe-table-body");
  fetchItems("raw-materials-frappe", "raw-materials-frappe-table-body");
});

// Pie Chart Configuration
const pieChartConfig = {
  series: [35, 20, 20, 15, 10],
  chart: {
    type: "pie",
    width: 280,
    height: 280,
    toolbar: {
      show: false,
    },
  },
  title: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#E493B3", "#E1AFD1", "#AD88C6", "#7469B6", "#401F71"],
  legend: {
    show: false,
  },
};

const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartConfig);
pieChart.render();

// Display product list
const productList = document.getElementById("product-list");
const products = [
  { name: "Yeocha Bubble Tea", percentage: 35, color: "#E493B3" },
  { name: "Fries", percentage: 20, color: "#E1AFD1" },
  { name: "Avocado Graham Frappe", percentage: 20, color: "#AD88C6" },
  { name: "Oreo Cookies & Cream", percentage: 15, color: "#7469B6" },
  { name: "Okinawa", percentage: 10, color: "#401F71" },
];

products.forEach(product => {
  productList.innerHTML += `<div><span class="inline-block w-4 h-4 mr-2 rounded-full" style="background-color:${product.color}"></span>${product.name}: ${product.percentage}%</div>`;
});

// Bar Chart Configuration
const barChartConfig = {
  series: [{
    name: "Sales",
    data: [50, 40, 300, 320, 400, 350, 200, 230, 430, 400, 420, 500], 
  }],
  chart: {
    type: "bar",
    height: 240,
    toolbar: {
      show: false,
    },
  },
  title: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#020617"],
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 2,
    },
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
  },
  yaxis: {
    labels: {
      style: {
        colors: "#616161",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#dddddd",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 5,
      right: 20,
    },
  },
  fill: {
    opacity: 0.8,
  },
  tooltip: {
    theme: "dark",
  },
};

const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartConfig);
barChart.render();
