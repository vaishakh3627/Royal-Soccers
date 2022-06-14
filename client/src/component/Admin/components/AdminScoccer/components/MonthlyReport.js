import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Col, Form, Row } from "react-bootstrap";

import { MdArrowBack } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { WEEKLY } from "../../../constants";

const MonthlyReport = ({ setComponent }) => {
  let navigate = useNavigate();

  return (
    <Row className="daily-report-page-row">
      <Col lg={12} md={12} sm={12} className="text-center">
        <h1>Monthly Report</h1>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h2>Date</h2>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4>01/08/2022 - 31/08/2022</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Total Collection</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="collection">300000</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Total Expence</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="expence">155000</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Bank Deposit</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="deposit">166000</h4>
        </Form.Group>
      </Col>
      <Col lg={12} md={12} sm={12} className="report-button">
        <Button variant="outline-success" onClick={() => setComponent(WEEKLY)}>
          <MdArrowBack />
        </Button>
        <Button variant="outline-success" onClick={() => navigate("/admin")}>
          <FaHome />
        </Button>
      </Col>
    </Row>
  );
};
export default MonthlyReport;
