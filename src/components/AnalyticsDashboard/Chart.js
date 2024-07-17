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
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: countryViews.map((view) => view.viewCount),
        barThickness: 30,
      },
    ],
  };

  const options = {
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
            height: "300px",
            background: "linear-gradient(to right, #101727 0%, #101727 100%)",
            color: "#fff",
            padding: 0,
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)",
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <Bar data={data} options={options} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default MyChart;
