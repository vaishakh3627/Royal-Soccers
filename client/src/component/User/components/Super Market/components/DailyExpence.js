import React from "react";

import { Button, Col, FormControl, Row } from "react-bootstrap";

import { SALE } from "../constants";

const DailyExpence = ({ setComponent, data, updateData }) => {
  return (
    <Row className="super-market-row p-3">
      <Col lg={6} md={6} sm={5} className="super-market-page-input-label">
        <h4>Date</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="date"
          value={data.date}
          onChange={(e) => updateData({ ...data, date: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="super-market-page-input-label">
        <h4>Cash in hand</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.cash}
          onChange={(e) => updateData({ ...data, cash: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="super-market-page-input-label">
        <h4>Daily Expence</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.expence}
          onChange={(e) => updateData({ ...data, expence: e.target.value })}
        />
      </Col>
      <Col lg={12} md={12} sm={12} className="super-market-page-submit-button">
        <Button
          variant="success"
          className="submit-button"
          onClick={() => setComponent(SALE)}
        >
          Next
        </Button>
      </Col>
    </Row>
  );
};
export default DailyExpence;
