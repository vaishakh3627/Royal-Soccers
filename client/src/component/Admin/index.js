import React from "react";
import { useNavigate } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";

import Football from "../../assets/images/ball.png";
import Cart from "../../assets/images/grocery-cart.png";
import Coffee from "../../assets/images/coffee.png";

import "./admin.scss";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="admin-page-container-wrapper">
      <Row className="admin-page-row-elements">
        <Col lg={3} md={3} sm={12} className="admin-page-column-elements">
          <Row>
            <Col xs={12} className="admin-page-image-wrapper">
              <a onClick={() => navigate("/admin/soccer")}>
                <img src={Football} alt="football" className="admin-football" />
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={3} sm={12} className="admin-page-column-elements">
          <Row>
            <Col xs={12} className="admin-page-image-wrapper">
              <a onClick={() => navigate("/admin/supermarket")}>
                <img src={Cart} alt="cart" className="admin-cart" />
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={3} sm={12} className="admin-page-column-elements">
          <Row>
            <Col xs={12} className="admin-page-image-wrapper">
              <a onClick={() => navigate("/admin/coffeeshop")}>
                <img src={Coffee} alt="coffee" className="admin-coffee" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default AdminPage;
