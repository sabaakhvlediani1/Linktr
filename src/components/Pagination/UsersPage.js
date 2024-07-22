import React, { useState } from "react";
import { Container, InputGroup, Form } from "react-bootstrap";

import PaginationComponent from "./PaginationComponent";
import useFetchUserData from "../../api/Api";
import TableComponent from "./TableComponent";

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [input, setInput] = useState("");
  const { users, total } = useFetchUserData(currentPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(total / 30);


  // Filter Logic
  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(input.toLowerCase()) ||
      user.lastName.toLowerCase().includes(input.toLowerCase()) ||
      user.username.toLowerCase().includes(input.toLowerCase()) ||
      user.email.toLowerCase().includes(input.toLowerCase()) ||
      user.phone.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "100px",
        }}
      >
        <InputGroup
          className="mb-3"
          style={{
            width: "100%",
            maxWidth: "900px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Form.Control
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
        </InputGroup>
      </div>
      <Container
        className="d-flex flex-column align-items-center justify-content-between"
        style={{
          width: "100%",
          maxWidth: "900px",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: "20px",
          marginBottom: "100px",
          border: "2px solid #f4f4f4",
          borderRadius: "10px",
          minHeight: "500px",
        }}
      >
        <TableComponent users={filteredUsers} />
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          handleClick={handleClick}
        />
      </Container>
    </>
  );
};

export default UsersPage;
