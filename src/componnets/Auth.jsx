import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../Assets/login.png";
import { loginApi, registerApi } from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(userData);
  const navigate = useNavigate();
  const registerForm = register ? true : false;
  const handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.error("please fill the form");
    } else {
      const response = await registerApi(userData);
      if (response.status === 200) {
        toast.success(`${response.data.username} is successfully registered!!`);
        setUserData({ username: "", email: "", password: "" });
        navigate("/login");
      } else {
        toast.warning(response.response.data);
      }
    }
  };

  const handleLogin = async (event)=>{
    event.preventDefault();
    const {  email, password } = userData;
    if ( !email || !password) {
      toast.error("please fill the form");
    } else {
      const response = await loginApi({email,password});
      if (response.status === 200) {
        // save res 
        localStorage.setItem("existingUser",JSON.stringify(response.data.existingUser))
        localStorage.setItem("role",response.data.role)
        // save token
        sessionStorage.setItem("token",response.data.token)
        setUserData({  email: "", password: "" });
        navigate("/");
      } else {
        toast.warning(response.response.data);
      }
    }
  }
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
                    ? "Sign up to your account"
                    : "Sign In to Your Account"}
                </h5>

                <Form className="text-light w-75">
                  {registerForm && (
                    <Form.Group className="mb-3" controlId="formBasicUsername1">
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Name"
                        onChange={(e) => {
                          setUserData({
                            ...userData,
                            username: e.target.value,
                          });
                        }}
                        value={userData.username}
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Id"
                      onChange={(e) => {
                        setUserData({ ...userData, email: e.target.value });
                      }}
                      value={userData.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword1">
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        setUserData({ ...userData, password: e.target.value });
                      }}
                      value={userData.password}
                    />
                  </Form.Group>

                  {registerForm ? (
                    <div>
                      <Button
                        variant="info"
                        type="submit"
                        size="lg"
                        onClick={handleRegister}
                      >
                        Register
                      </Button>
                      <p className="mt-3">
                        Already have an account?{" "}
                        <Link
                          to="/login"
                          className=" lh-base btn-link ms-2 text-info"
                        >
                          Login Here
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <Button variant="info" type="submit" size="lg" onClick={handleLogin}>
                        Login
                      </Button>
                      <p className="mt-3">
                        New User?{" "}
                        <Link
                          to="/register"
                          className=" fw-bolder text-info lh-base btn-link ms-2"
                        >
                          Register
                        </Link>
                      </p>
                    </div>
                  )}
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default Auth;
