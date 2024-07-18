import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { dashboardData } from "../../api/Api";
import { Card, Col, Row } from "react-bootstrap";

// Register all components
Chart.register(...registerables);

const MyChart = () => {
  const countryViews = dashboardData.data.countryViews;

  const data = {
    labels: countryViews.map((view) => view.countryName),
    datasets: [
      {
        label: "Views by Country",
        backgroundColor: "#0190ff",
        hoverBackgroundColor: "red",
        hoverBorderColor: "red",
        data: countryViews.map((view) => view.viewCount),
        barThickness: 40,
      },
    ],
  };

  const options = {
    indexAxis: 'x', // Horizontal bars
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Row>
      <Col className="mb-3">
        <Card
          style={{
            height: "100%", // Ensure the Card fills its parent container
            background: "linear-gradient(to right, #101727 0%, #101727 100%)",
            color: "#fff",
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)",
            paddingLeft:"1rem",
            paddingRight:"1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "100%" }}>
            <Bar data={data} options={options} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default MyChart;
