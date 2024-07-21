import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { FaPhone, FaGlobe, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaSkype, FaWechat, FaGithub, FaPinterest, FaSpotify } from 'react-icons/fa';


const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const initialInputs =[
  {
    id: generateUniqueId(),
    name: "Firstname",
    placeholder: "Firstname",
    value: "saba",
    isPhoneFormat: false,
    icon: null,
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Lastname",
    placeholder: "Lastname",
    value: "akhvlediani",
    isPhoneFormat: false,
    icon: null,
    limit: 5,
    count: 1,
    type: "add"
  },
 
  {
    id: generateUniqueId(),
    name: "Adress",
    placeholder: "Adress",
    value: "",
    isPhoneFormat: false,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Company",
    placeholder: "Company",
    value: "company",
    isPhoneFormat: false,
    icon: null,
    limit: 8,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Position",
    placeholder: "Position",
    value: "react developer",
    isPhoneFormat: false,
    icon: null,
    limit: 8,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Phone1",
    placeholder: "Phone",
    value: "+995551900919",
    isPhoneFormat: true,
    icon: "phone",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Phone2",
    placeholder: "Phone2",
    value: "+995551900919",
    isPhoneFormat: true,
    icon: "phone",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Website",
    placeholder: "Website",
    value: "saba.akhvlediani",
    isPhoneFormat: false,
    icon: <FaGlobe />,
    limit: 5,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Whatsapp",
    placeholder: "Whatsapp",
    value: "+995551900919",
    isPhoneFormat: true,
    icon: "",
    limit: 5,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Viber",
    placeholder: "Viber",
    value: "+995551900919",
    isPhoneFormat: true,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Facebook",
    placeholder: "Facebook",
    value: "https://facebook.com/facebook.com",
    isPhoneFormat: false,
    icon: <FaFacebook/>,
    limit: 5,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Instagram",
    placeholder: "Instagram",
    value: "https://instagram.com/instagram.com",
    isPhoneFormat: false,
    icon: <FaInstagram/>,
    limit: 5,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Telegram",
    placeholder: "Telegram enter username",
    value: "",
    isPhoneFormat: false,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Email",
    placeholder: "Email",
    value: "saba.akhvlediani@gmail.com",
    isPhoneFormat: false,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Linkedin",
    placeholder: "Linkedin",
    value: "",
    isPhoneFormat: false,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Twitter",
    placeholder: "Twitter",
    value: "",
    isPhoneFormat: false,
    icon: <FaTwitter/>,
    limit: 3,
    count: 2,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Youtube",
    placeholder: "Youtube",
    value: "",
    isPhoneFormat: false,
    icon: <FaYoutube/>,
    limit: 2,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Tiktok",
    placeholder: "Tiktok",
    value: "",
    isPhoneFormat: false,
    icon: <FaTiktok/>,
    limit: 4,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Skype",
    placeholder: "Skype",
    value: "",
    isPhoneFormat: false,
    icon: <FaSkype/>,
    limit: 2,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Wechat",
    placeholder: "Wechat",
    value: "",
    isPhoneFormat: false,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Github",
    placeholder: "Github",
    value: "",
    isPhoneFormat: false,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Pinterest",
    placeholder: "Pinterest",
    value: "",
    isPhoneFormat: false,
    icon: <FaPinterest/>,
    limit: 5,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Udemy",
    placeholder: "Udemy",
    value: "",
    isPhoneFormat: false,
    icon: "",
    limit: 3,
    count: 1,
    type: "add"
  },
  {
    id: generateUniqueId(),
    name: "Spotify",
    placeholder: "Spotify",
    value: "",
    isPhoneFormat: false,
    icon: <FaSpotify/>,
    limit: 3,
    count: 1,
    type: "add"
  }
];

const ContactForm = () => {
  const [inputFields, setInputFields] = useState(initialInputs);

  const handleAdd = (index) => {
    const newField = { ...inputFields[index], id: generateUniqueId(), type: "add", value: "" };
    const newInputFields = [
      ...inputFields.slice(0, index + 1),
      newField,
      ...inputFields.slice(index + 1)
    ];

    const updatedFields = newInputFields.map((field, i) => {
      if (i === index) {
        return { ...field, type: "delete" };
      }
      return field;
    });

    setInputFields(updatedFields);
  };

  const handleDelete = (index) => {
    const newInputFields = inputFields.filter((_, i) => i !== index);
    setInputFields(newInputFields);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form
        className="p-3"
        style={{
          width: "100%",
          maxWidth: "900px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: "100px",
          marginBottom: "100px",
          border: "2px solid #f4f4f4",
          borderRadius: "10px",
        }}
      >
        <Row>
          {inputFields.map((field, index) => (
            <Col md="6" key={field.id}>
              <Form.Group className="mb-3">
                {field.isPhoneFormat ? (
                  <InputGroup>
                    {field.icon && (
                      <InputGroup.Text>
                        <FaPhone /> 
                      </InputGroup.Text>
                    )}
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={field.value}
                      onChange={(value) => {
                        const newInputFields = [...inputFields];
                        newInputFields[index].value = value;
                        setInputFields(newInputFields);
                      }}
                      placeholder={field.placeholder}
                      className="form-control"
                    />
                  </InputGroup>
                ) : (
                  <InputGroup>
                    {field.icon && (
                      <InputGroup.Text>
                        {field.icon}
                      </InputGroup.Text>
                    )}
                    <Form.Control
                      type="text"
                      placeholder={field.placeholder}
                      defaultValue={field.value}
                    />
                  </InputGroup>
                )}
                <Button
                  variant={field.type === "add" ? "primary" : "danger"}
                  className="w-100 mb-2"
                  onClick={() =>
                    field.type === "add" ? handleAdd(index) : handleDelete(index)
                  }
                >
                  {field.type === "add" ? "Add" : "Delete"}
                </Button>
              </Form.Group>
            </Col>
          ))}
        </Row>
      </Form>
    </Container>
  );
};

export default ContactForm;
