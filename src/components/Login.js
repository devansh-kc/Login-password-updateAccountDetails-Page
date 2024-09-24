import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const userDataFromLocalStorage = JSON.parse(
    localStorage.getItem("FormDetails")
  );
  const nnavigate = useNavigate();
  const [LoginDetails, setLoginDetails] = useState({
    Email: "",
    Password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function StoreLoginDetails(field, value) {
    setLoginDetails((prevValue) => ({ ...prevValue, [field]: value }));
  }
  function onHandleSubmit(e) {
    e.preventDefault();

    if (LoginDetails.Email === "" || LoginDetails.Password === "") {
      alert("Please enter the required details ");
    }
    else if (
      LoginDetails.Email === userDataFromLocalStorage.Email &&
      LoginDetails.Password === userDataFromLocalStorage.Password
    ) {
      nnavigate("/updateDetails");
    } else {
      alert(
        "we are not able to find any use by this email, please check the email or create a account"
      );
    }
  }
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center ">
        <Col md={8} lg={6} xs={12}>
          <div className="border-3 border-primary border"></div>

          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold text-uppercase mb-2">Login</h2>
                <p className="mb-5">Please enter your login and password!</p>
                <Form className="mb-3" onSubmit={onHandleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={LoginDetails.Email}
                      onChange={(e) =>
                        StoreLoginDetails("Email", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={LoginDetails.Password}
                      onChange={(e) =>
                        StoreLoginDetails("Password", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Check
                    onClick={() => setShowPassword((prevValue) => !prevValue)}
                    id="Show Password"
                    label="Show Password"
                    style={{ margin: "8px" }}
                  />

                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0 text-center">
                    Don't have an account?{" "}
                    <Link to="/" className="text-primary fw-bold">
                      Sign Up
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

export default Login;
