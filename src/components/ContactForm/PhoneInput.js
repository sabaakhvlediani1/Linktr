import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";

const PhoneInput = () => {
  return (
    <Form.Group as={Col} md="6" className="mb-3">
      <InputGroup>
        <InputGroup.Text>
          <i className="bi bi-telephone-fill"></i>
        </InputGroup.Text>
        <Form.Control type="text" placeholder="Enter phone number" />
      </InputGroup>
    </Form.Group>
  );
};

export default PhoneInput;
