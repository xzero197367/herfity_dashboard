import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data = {
    labels: [
      "Sept 10",
      "Sept 11",
      "Sept 12",
      "Sept 13",
      "Sept 14",
      "Sept 15",
      "Sept 16",
    ],
    datasets: [
      {
        label: "Total Target",
        data: [100, 100, 100, 100, 100, 100, 100], // Max value for transparency effect
        backgroundColor: "rgba(200, 200, 200, 0.2)", // Light gray transparent bars
        borderWidth: 0,
      },
      {
        label: "Sales",
        data: [85, 40, 20, 50, 80, 45, 78], // Actual sales
        backgroundColor: "rgba(0, 123, 255, 1)", // Blue bars
        borderRadius: 20, // Rounded bars
        borderWidth: 0,
      },
    ],
  };

  // Define options with ChartOptions type
  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          callback: (value) => `${value}k`, // Format labels
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
