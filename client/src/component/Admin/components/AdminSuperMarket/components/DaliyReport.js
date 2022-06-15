import { React, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button, Col, Form, FormControl, Row } from "react-bootstrap";

import { MdArrowForward } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { WEEKLY } from "../../../constants";

import { getData } from "../api";

const DailyReport = ({ setComponent }) => {
  let navigate = useNavigate();

  const [data, setData] = useState("");
  const [collection, setCollection] = useState([]);
  const [expence, setExpence] = useState([]);
  const [deposit, setDeposit] = useState([]);

  const handleOnChange = async (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    if (data) {
      const fetchData = async () => {
        const file = await getData({ date: data });
        const totalCollection =
          file.data.cashinhand * 1 + file.data.saleinsw * 1;
        const totalExpence = file.data.expence;
        const totalDeposit = file.data.deposit;
        setCollection(totalCollection);
        setExpence(totalExpence);
        setDeposit(totalDeposit);
      };
      fetchData();
    }
  }, [data]);

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
          <FormControl
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            type="date"
            value={data}
            onChange={(e) => handleOnChange(e)}
          />
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Total Collection</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="collection">{collection}</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Total Expence</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="expence">{expence}</h4>
        </Form.Group>
      </Col>
      <Col lg={5} md={5} sm={5} className="report-header">
        <h3>Bank Deposit</h3>
      </Col>
      <Col lg={7} md={7} sm={7} className="daily-report-display">
        <Form.Group className="report-display">
          <h4 className="deposit">{deposit}</h4>
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
