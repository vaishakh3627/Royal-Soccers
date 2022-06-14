import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Col, Form, Row } from "react-bootstrap";

import { MdArrowForward } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { WEEKLY } from "../../../constants";

const DailyReport = ({ setComponent }) => {
  let navigate = useNavigate();

  return (
    <Row className="daily-report-page-row">
      <Col lg={12} md={12} sm={12} className="text-center">
        <h1>Daily Report</h1>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h2>Date</h2>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4>12/12/2022</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Total Collection</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="collection">10000</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Total Expence</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="expence">5000</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Bank Deposit</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="deposit">6000</h4>
        </Form.Group>
      </Col>
      <Col lg={12} md={12} sm={12} className="report-button">
        <Button variant="outline-success" onClick={() => navigate("/admin")}>
          <FaHome />
        </Button>
        <Button variant="outline-success" onClick={() => setComponent(WEEKLY)}>
          <MdArrowForward />
        </Button>
      </Col>
    </Row>
  );
};
export default DailyReport;
