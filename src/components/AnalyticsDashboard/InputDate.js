import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

const InputDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Row className="mb-4 justify-content-center">
      <Col xs={2} className="pr-1">
        <Form.Group>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </Form.Group>
      </Col>
      <Col xs={2} className="pl-1">
        <Form.Group>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </Form.Group>
      </Col>
      <Col xs="auto" className="d-flex align-items-center pl-1">
        <Button variant="primary">Filter</Button>
      </Col>
    </Row>
  );
};

export default InputDate;
