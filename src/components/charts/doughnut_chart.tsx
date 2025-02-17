import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the type for the options object
const options: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: "60%", // Controls the size of the hole
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#666", // Legend text color
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
};

const DoughnutChart: React.FC = () => {
  const data = {
    labels: ["Acquisition", "Purchase", "Retention"],
    datasets: [
      {
        label: "Inner Ring",
        data: [60, 25, 15], // Adjust values as needed
        backgroundColor: [
          "rgba(0, 123, 255, 0.8)", // Acquisition (Blue)
          "rgba(143, 156, 242, 0.8)", // Purchase (Light Blue)
          "rgba(255, 190, 120, 0.8)", // Retention (Peach)
        ],
        borderWidth: 0,
        hoverOffset: 2,
      },
      {
        label: "Outer Ring",
        data: [70, 15, 25], // Adjust values as needed
        backgroundColor: [
          "rgba(0, 123, 255, 1)", // Acquisition (Blue)
          "rgba(143, 156, 242, 1)", // Purchase (Light Blue)
          "rgba(255, 190, 120, 1)", // Retention (Peach)
        ],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
