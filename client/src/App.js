import React from "react";

import { Container } from "react-bootstrap";

import "./App.scss";

import Header from "./common/component/Header";
import ApplicationRoutes from "./Routes";

function App() {
  return (
    <Container fluid className="app">
      <Header />
      <ApplicationRoutes />
    </Container>
  );
}

export default App;
