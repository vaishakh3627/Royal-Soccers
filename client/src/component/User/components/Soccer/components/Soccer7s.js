import React from "react";

import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

const Soccer7s = ({ updateData, data, setCash, cash }) => {
  const handleButton = () => {
    let total5sAmount = data.total5s * data.amount5s - data.discount5s;
    let total7sAmount = data.total7s * data.amount7s - data.discount7s;
    let totalAmount = total5sAmount + total7sAmount - data.expence;
    setCash(totalAmount);
  };

  return (
    <Row className="soccer-page-row p-3">
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Total number of 7's</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.total7s}
          onChange={(e) => updateData({ ...data, total7s: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Total discount in 7's</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.discount7s}
          onChange={(e) => updateData({ ...data, discount7s: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Price/hour</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.amount7s}
          onChange={(e) => updateData({ ...data, amount7s: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="soccer-page-input-label">
        <h4>Total Expence</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.expence}
          onChange={(e) => updateData({ ...data, expence: e.target.value })}
        />
      </Col>
      <Col lg={12} md={12} sm={12} className="display-wrapper">
        <Form.Group className="display mt-2">
          <h5>Cash in hand : {cash}</h5>
        </Form.Group>
      </Col>
      <Col lg={12} md={12} sm={12} className="soccer-page-submit-button">
        <Button
          variant="success"
          className="submit-button"
          onClick={handleButton}
        >
          Submit
        </Button>
      </Col>
    </Row>
  );
};
export default Soccer7s;
