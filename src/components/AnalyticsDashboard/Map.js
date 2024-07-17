import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { dashboardData } from "../../api/Api";
import { renderToStaticMarkup } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import { divIcon } from "leaflet";

const countryData = dashboardData.data.countryViews;

const Map = () => {
  // Custom icon
  const createCustomIcon = () => {
    return divIcon({
      html: renderToStaticMarkup(
        <FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }} />
      ),
      className: "",
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24],
    });
  };

  return (
    <Row>
      <Col className="mb-5">
        <Card
          style={{
            height: "300px",
            background: "linear-gradient(to right, #101727 0%, #101727 100%)",
            color: "#fff",
            padding: 0,
            boxShadow: "0 0 3px rgba(255, 255, 255, 0.5)",
          }}
        >
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {countryData.map((country, idx) => (
              <Marker
                key={idx}
                position={country.coordinates}
                icon={createCustomIcon()}
              >
                <Popup>{country.countryName}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card>
      </Col>
    </Row>
  );
};

export default Map;
