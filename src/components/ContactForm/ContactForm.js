import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import PhoneInput from "./PhoneInput";

const ContactForm = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Form
        className="p-3"
        style={{
          width: "100%",
          maxWidth: "700px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: "100px",
          marginBottom: "100px",
          border: "2px solid #f4f4f4",
          borderRadius: "10px",
        }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control type="text" placeholder="Company" />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control type="text" placeholder="Job Title" />
          </Form.Group>
          <PhoneInput />
        </Row>

        <Row className="mb-3">
          <PhoneInput />
          <PhoneInput />
          <Form.Group as={Col} md="6" className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-globe"></i>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Website" />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-globe"></i>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Website" />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Button variant="primary" className="w-100 mb-2">
              Save
            </Button>
            <Button variant="danger" className="w-100">
              Delete
            </Button>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Button variant="primary" className="w-100 mb-2">
              Save
            </Button>
            <Button variant="danger" className="w-100">
              Delete
            </Button>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-globe"></i>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Website" />
            </InputGroup>
          </Form.Group>

          <PhoneInput />

          <Form.Group as={Col} md="6">
            <Button variant="primary" className="w-100 mb-2">
              Save
            </Button>
            <Button variant="danger" className="w-100">
              Delete
            </Button>
          </Form.Group>
        </Row>

        <Row className="mb-3">

          <PhoneInput />
          <PhoneInput />
          
          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-facebook"></i>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Facebook Link" />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-facebook"></i>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Facebook Link" />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3">
            <Button variant="primary" className="w-100 mb-2">
              Save
            </Button>
            <Button variant="danger" className="w-100">
              Delete
            </Button>
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3">
            <Button variant="primary" className="w-100 mb-2">
              Save
            </Button>
            <Button variant="danger" className="w-100">
              Delete
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
