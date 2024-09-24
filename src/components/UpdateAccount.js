import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UpdateAccount() {
  const FetchUserDetailsFromLocalStorage = JSON.parse(
    localStorage.getItem("FormDetails")
  );
  const [formData, setFormData] = useState({
    FirstName: FetchUserDetailsFromLocalStorage.FirstName,
    LastName: FetchUserDetailsFromLocalStorage.LastName,
    Email: FetchUserDetailsFromLocalStorage.Email,
    Password: FetchUserDetailsFromLocalStorage.Password,
  });

  const [seePassword, setSeePassoword] = useState(false);

  // Handle form input changes
  const handleChange = (field, value) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("FormDetails", JSON.stringify(formData));
    alert("updates has been saved ");
  };
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Row className="vh-100 d-flex justify-content-center align-items-center ">
        <Col md={8} lg={6} xs={12}>
          <div className="border-3 border-primary border"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold text-uppercase mb-2">Account Details</h2>
                <p className="mb-5">
                  You can Update the Account Details in this page{" "}
                </p>
                <Form onSubmit={handleSubmit} className="mb-3">
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label className="text-center">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your First name"
                      name="name"
                      value={formData.FirstName}
                      onChange={(e) =>
                        handleChange("FirstName", e.target.value)
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label className="text-center">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.LastName}
                      onChange={(e) => handleChange("LastName", e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="mb-3"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.Email}
                      onChange={(e) => handleChange("Email", e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={seePassword ? "text" : "password"}
                      placeholder="Enter a new password"
                      name="password"
                      value={formData.Password}
                      onChange={(e) => handleChange("Password", e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Check
                    onClick={() => setSeePassoword((prevVal) => !prevVal)}
                    className="m-2"
                    name="Show Password"
                    id="Show Password"
                    label="Show Password"
                  />
                  <div className="d-grid m-2">
                    <Button variant="primary" type="submit">
                      Update Details
                    </Button>
                  </div>{" "}
                  <div className="d-grid">
                    <Button
                      variant="primary m-2"
                      onClick={() => navigate("/login")}
                    >
                      LogOut
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateAccount;
