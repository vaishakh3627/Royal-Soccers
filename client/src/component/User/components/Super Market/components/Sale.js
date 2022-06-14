import React from "react";

import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

const Sale = ({ data, updateData, tally, setTally }) => {
  const handleButton = () => {
    let totalCash = 1 * data.cash + 1 * data.sale;
    let totalExpence = 1 * data.expence + 1 * data.deposit;
    let cahsInHand = totalCash - totalExpence;
    setTally(cahsInHand);
  };

  return (
    <Row className="super-market-row p-3">
      <Col lg={6} md={6} sm={5} className="super-market-page-input-label">
        <h4>Total Sales in Software</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.sale}
          onChange={(e) => updateData({ ...data, sale: e.target.value })}
        />
      </Col>
      <Col lg={6} md={6} sm={5} className="super-market-page-input-label">
        <h4>Bank Deposit</h4>
      </Col>
      <Col lg={6} md={6} sm={7}>
        <FormControl
          type="number"
          value={data.deposit}
          onChange={(e) => updateData({ ...data, deposit: e.target.value })}
        />
      </Col>
      <Col lg={12} md={12} sm={12} className="super-display-wrapper">
        <Form.Group className="display mt-2">
          <h5>Cash in Hand : {tally} </h5>
        </Form.Group>
      </Col>
      <Col lg={12} md={12} sm={12} className="super-market-page-submit-button">
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
export default Sale;
