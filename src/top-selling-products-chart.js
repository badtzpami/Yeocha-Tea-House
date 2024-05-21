const pieChartConfig = {
  series: [35, 20, 20, 15,10 ], // Adjusted percentages for the specified products
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
  tooltip: {
    enabled: true,
    enabledOnSeries: undefined,
    shared: false,
    intersect: true,
    fillSeriesColor: false,
    followCursor: true,
    theme: "dark",
    style: {
      fontSize: '12px',
    },
    onDatasetHover: {
      highlightDataSeries: true,
    },
    x: {
      show: false,
    },
    y: {
      formatter: function(value, { seriesIndex, dataPointIndex, w }) {
        // Define products and their corresponding percentages
        const products = [
          { name: 'Teddy Bear', percentage: 35 },
          { name: 'Facial Mask', percentage: 20 },
          { name: 'Flash Drive', percentage: 20 },
          { name: 'Pan', percentage: 15 },
          { name: 'Washi Tape', percentage: 10 }
        ];
        // Return the product name and its percentage
        return `${products[dataPointIndex].name}: ${products[dataPointIndex].percentage}%`;
      }
    }
  },
};

const pieChart = new ApexCharts(document.querySelector("#pie-chart"), pieChartConfig);
pieChart.render();
