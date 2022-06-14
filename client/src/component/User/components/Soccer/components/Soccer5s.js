import React from "react";

import { Button, Col, FormControl, Row } from "react-bootstrap";

import { SOCCER_7s } from "../constants";

const Soccer5s = ({ setComponent, updateData, data }) => {
  return (
    <Row className="soccer-page-row p-3">
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Date</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="date"
          value={data.date}
          onChange={(e) => updateData({ ...data, date: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Total number of 5's</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.total5s}
          onChange={(e) => updateData({ ...data, total5s: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Total discount in 5's</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.discount5s}
          onChange={(e) => updateData({ ...data, discount5s: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Price/hour</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.amount5s}
          onChange={(e) => updateData({ ...data, amount5s: e.target.value })}
        />
      </Col>
      <Col lg={12} md={12} sm={12} className="soccer-page-submit-button">
        <Button
          variant="success"
          className="submit-button"
          onClick={() => setComponent(SOCCER_7s)}
        >
          Next
        </Button>
      </Col>
    </Row>
  );
};
export default Soccer5s;
