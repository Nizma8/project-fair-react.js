import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginImage from "../Assets/login.png";

function Auth({ register }) {
  const registerForm = register ? true : false;

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center "
    >
      <div className="container w-75 ">
        <Link
          to={"/"}
          className="text-decoration-none d-flex justify-content-center align-items-center "
        >
          {" "}
          <h5>
            <i className="fa-solid fa-arrow-left"></i> Back To Home{" "}
          </h5>
        </Link>

        <Card className="shadow p-5 bg-success">
          <Row>
            <Col lg={6}>
              <div className="flex-column d-flex">
                <div className="d-flex mt-2 text-light">
                  <span className="h1 fw-bolder mb-0 all text-light">
                    {" "}
                    <i className="fa-brands fa-stack-overflow fa-bounce me-2 "></i>
                    Project fair
                  </span>
                </div>
                <h5 className="fw-normal mt-5 pb-4 text-light">
                  {" "}
                  {registerForm
                    ? "Sign Up To Your Account"
                    : "Sign In to Your Account"}
                </h5>

                <Form className="text-light w-75">
                  {registerForm && (
                    <Form.Group className="mb-3" controlId="formBasicUsername1">
                      <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Id"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Password"
                    />
                  </Form.Group>

                  {
                   registerForm? <div><Button variant="light" type="submit" size="lg">Register</Button>
                   <p className="mt-3">Already have an account? <Link to="/login" className="text-secondary lh-base btn-link ms-2">Login Here</Link>

                   </p>
                   </div> :<div><Button variant="light" type="submit" size="lg">Login</Button>
                   <p  className="mt-3">New User? <Link to="/register" className=" fw-bolder text-secondary lh-base btn-link ms-2">Register</Link>

                   </p>
                   </div>
                  }
                </Form>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src={loginImage}
                alt=""
                className="glass-container rounded shadow"
              />
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default Auth;