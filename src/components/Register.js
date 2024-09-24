import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function Register() {
  const [formDetails, setFormDetails] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  function storeAccountDetails(field, value) {
    setFormDetails((prevState) => {
      return { ...prevState, [field]: value };
    });
  }

  const [showPassword, setShowPassword] = useState(false);

  function SubmitForm(e) {
    e.preventDefault();

    localStorage.setItem("FormDetails", JSON.stringify(formDetails));
  }

  return (
    <Container className="mb-3">
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border-3 border-primary border"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h1 className="fw-bold text-uppercase mb-2">
                  Registration Form{" "}
                </h1>
                <p className="mb-5">Please Enter the Details!</p>

                <Form className="mb-3" onSubmit={SubmitForm}>
                  <Form.Group className="mb-3" controlId="FirstName">
                    <Form.Label className="text-center">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your First Name"
                      value={formDetails.FirstName}
                      onChange={(e) =>
                        storeAccountDetails("FirstName", e.target.value)
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="LastName">
                    <Form.Label className="text-center">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Last Name"
                      value={formDetails.LastName}
                      onChange={(e) =>
                        storeAccountDetails("LastName", e.target.value)
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Email">
                    <Form.Label className="text-center">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      value={formDetails.Email}
                      onChange={(e) =>
                        storeAccountDetails("Email", e.target.value)
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Password">
                    <Form.Label className="text-center">Password</Form.Label>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      value={formDetails.Password}
                      onChange={(e) =>
                        storeAccountDetails("Password", e.target.value)
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Check
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    style={{ margin: "10px" }}
                    id="ShowPassord"
                    label="show password"
                  />
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </div>{" "}
                </Form>
                <div className="mt-3">
                  <p className="mb-0 text-center">
                    Already have a Account?{" "}
                    <Link to="/login" className="text-primary fw-bold">
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
