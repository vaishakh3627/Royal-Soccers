import { React, useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

import "./login.scss";

import { login } from "../../redux/features/UserSlice";

const LogInForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const updateData = (data) => {
    setData((previousData) => ({
      ...previousData,
      ...data,
    }));
  };

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    setData({ username: "", password: "" });
    dispatch(
      login({
        username: data.username,
        password: data.password,
      })
    );
    let userName = data.username;
    if (userName === "User") {
      return navigate("/user");
    }
    return navigate("/admin");
  };

  return (
    <Container className="login-form-container-wrapper">
      <Row className="login-form-row p-3">
        <Col xs={12} className="text-center">
          <h1>Login</h1>
        </Col>
        <Col xs={12} className="login-form-select">
          <Form.Select
            onChange={(e) => updateData({ ...data, username: e.target.value })}
          >
            <option>Select User type</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </Form.Select>
        </Col>
        <Col xs={12} className="login-form-column">
          <FormControl
            type="password"
            placeholder="Enter password"
            value={data.password}
            onChange={(e) => updateData({ ...data, password: e.target.value })}
          />
        </Col>
        <Col xs={12} className="login-form-button">
          <Button variant="success" onClick={(e) => handleSubmit(e)}>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default LogInForm;
