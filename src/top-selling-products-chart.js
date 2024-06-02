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
  { name: "Flash Drive", percentage: 35, color: "#E493B3" },
  { name: "Teddy Bear", percentage: 20, color: "#E1AFD1" },
  { name: "Facial Mask", percentage: 20, color: "#AD88C6" },
  { name: "Ribbon Hair Clip", percentage: 15, color: "#7469B6" },
  { name: "Washi Tape", percentage: 10, color: "#401F71" },
];

products.forEach(product => {
  productList.innerHTML += `<div><span class="inline-block w-4 h-4 mr-2 rounded-full" style="background-color:${product.color}"></span>${product.name}: ${product.percentage}%</div>`;
});
