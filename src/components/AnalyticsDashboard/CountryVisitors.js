import React from "react";
import { dashboardData } from "../../api/Api";
import ReactCountryFlag from "react-country-flag";
import { Row, Col, Card } from "react-bootstrap";

const CountryVisitors = () => {
  const countryData = dashboardData.data.countryViews;
  const cityData = dashboardData.data.cityViews;
  return (
    <Row>
      <Col>
        <Card
          className="mb-3"
          style={{
            height: "100px",
            background: "linear-gradient(to right, #101727 0%, #101727 100%)",
            color: "#fff",
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)",
          }}
        >
          <Card.Body className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <Card.Title className="mb-0">
                This week top country visitors:
              </Card.Title>
              <div className="d-flex align-items-center">
                {countryData.map((country, idx) => (
                  <div key={idx} className="d-flex align-items-center mr-2">
                    <span style={{ marginLeft: "1em", color: "#808080" }}>
                      {country.countryCode}
                    </span>
                    <ReactCountryFlag
                      countryCode={country.countryCode}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        marginRight: "0.5em",
                        marginLeft: "0.4em",
                      }}
                    />
                    <span>{country.viewCount}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card
          className="mb-3"
          style={{
            height: "100px",
            background: "linear-gradient(to right, #101727 0%, #101727 100%)",
            color: "#fff",
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)",
          }}
        >
          <Card.Body>
            <div className="d-flex align-items-center">
              <Card.Title className="mb-0">
                This week top city visitors:
              </Card.Title>
              <div className="d-flex align-items-center">
                {cityData.map((city, idx) => (
                  <div key={idx} className="d-flex align-items-center mr-2">
                    <span
                      style={{
                        marginLeft: "1em",
                        marginRight: "0.5em",
                        color: "#808080",
                      }}
                    >
                      {city.cityName}
                    </span>

                    <span>{city.viewCount}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CountryVisitors;
