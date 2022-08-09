import './style1.css'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { useRef } from "react";
const Login = () => {
  const emailRef = useRef();
  const { forgotPassword } = useUserAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { logIn, googleSignIn } = useUserAuth();
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await logIn(email, password)
      navigate("/home");
    } catch (error) {
      setError(error.mesage);
    }
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home")
    } catch (error) {
      setError(e.mesage)
    }
  }
  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };
  return (
    <>
      <section className="main-section-login">
        <div className="p-4 container login-sect">
          <h2 className="mb-3">Firebase Auth Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email" ref={emailRef}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
            <p onClick={forgotPasswordHandler}>Forgot Password?</p>
          </Form>
          <hr />
          <div>
            <GoogleButton
              className="g-btn"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>
        <div className="p-4 box mt-3 text-center" id="sign-up">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </section>
    </>
  );
};

export default Login;
