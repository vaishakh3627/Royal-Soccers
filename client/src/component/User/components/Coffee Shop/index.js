import { React, useState } from "react";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

import "./coffee.scss";

const CoffeeShopPage = () => {
  const [data, setData] = useState({
    date: "",
    sale: "",
    expence: "",
  });

  const [total, setTotal] = useState("");

  const updateData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };

  const handleButton = () => {
    let totalCollection = data.sale - data.expence;
    setTotal(totalCollection);
  };

  return (
    <Container className="coffee-shop-page-container-wrapper">
      <Row className="coffee-shop-row p-3">
        <Col lg={6} md={6} sm={5} className="coffee-shop-page-input-label">
          <h4>Date</h4>
        </Col>
        <Col lg={6} md={6} sm={7}>
          <FormControl
            type="date"
            value={data.date}
            onChange={(e) => updateData({ ...data, date: e.target.value })}
          />
        </Col>
        <Col lg={6} md={6} sm={5} className="coffee-shop-page-input-label">
          <h4>Total Sale</h4>
        </Col>
        <Col lg={6} md={6} sm={7}>
          <FormControl
            type="number"
            value={data.sale}
            onChange={(e) => updateData({ ...data, sale: e.target.value })}
          />
        </Col>
        <Col lg={6} md={6} sm={5} className="coffee-shop-page-input-label">
          <h4>Total Expence</h4>
        </Col>
        <Col lg={6} md={6} sm={7}>
          <FormControl
            type="number"
            value={data.expence}
            onChange={(e) => updateData({ ...data, expence: e.target.value })}
          />
        </Col>
        <Col lg={12} md={12} sm={12} className="coffee-display-wrapper">
          <Form.Group className="display mt-2">
            <h5>Cash in Hand : {total} </h5>
          </Form.Group>
        </Col>
        <Col lg={12} md={12} sm={12} className="coffee-shop-page-submit-button">
          <Button
            variant="success"
            className="submit-button"
            onClick={handleButton}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default CoffeeShopPage;
