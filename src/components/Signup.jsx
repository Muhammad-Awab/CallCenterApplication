import './style1.css'
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signUp } = useUserAuth();
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("")
        try {
            await signUp(email, password)
            navigate("/");


        } catch (error) {
            setError(error.mesage);
        }
    }

    return (
        <>
        <section className="main-section-login">
            <div className="p-4 box container login-sect">
                <h2 className="mb-3">Firebase Auth Signup</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            type="name"
                            placeholder="Name"
                            name="Name"

                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
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
                            Sign up
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="p-4 box mt-3 text-center" id="sign-up">
                Already have an account? <Link to="/">Log In</Link>
            </div>
            </section>
        </>
    );
};

export default Signup;

