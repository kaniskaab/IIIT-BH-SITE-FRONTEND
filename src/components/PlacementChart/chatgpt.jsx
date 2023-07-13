import React from 'react';
import { Bar } from 'react-chartjs-2';

const PlacementChart = () => {
  const data = {
    labels: ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'],
    datasets: [
      {
        label: 'Number of Placements',
        data: [15, 12, 10, 8, 6],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Customize the bar color
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Customize the step size of the y-axis
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PlacementChart;
