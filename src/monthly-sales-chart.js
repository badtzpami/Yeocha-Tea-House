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
