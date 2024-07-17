import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";

import MyChart from "./Chart";
import Map from "./Map";
import InputDate from "./InputDate";
import CountryVisitors from "./CountryVisitors";

const AnalyticsDashboard = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <div style={{ maxWidth: "900px", width: "100%" }}>
        <h2 className="mb-4 text-center" style={{ color: "#fff" }}>
          Analytics Dashboard
        </h2>
        {/* Input start and end date Component */}
        <InputDate />
        {/* show viewers from country and city Component */}
        <CountryVisitors />
        {/* Chart Component */}
        <MyChart />
        {/* Map Component */}
        <Map />
      </div>
    </Container>
  );
};

export default AnalyticsDashboard;
