import React from "react";
import { useNavigate } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";

import Football from "../../assets/images/ball.png";
import Cart from "../../assets/images/grocery-cart.png";
import Coffee from "../../assets/images/coffee.png";

import "./user.scss";

const UserPage = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="user-page-container-wrapper">
      <Row className="user-page-row-elements">
        <Col lg={3} md={3} sm={12} className="user-page-column-elements">
          <Row>
            <Col xs={12} className="user-page-image-wrapper">
              <a onClick={() => navigate("/user/soccer")}>
                <img src={Football} alt="football" className="user-football" />
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={3} sm={12} className="user-page-column-elements">
          <Row>
            <Col xs={12} className="user-page-image-wrapper">
              <a onClick={() => navigate("/user/supermarket")}>
                <img src={Cart} alt="cart" className="user-cart" />
              </a>
            </Col>
          </Row>
        </Col>
        <Col lg={3} md={3} sm={12} className="user-page-column-elements">
          <Row>
            <Col xs={12} className="user-page-image-wrapper">
              <a onClick={() => navigate("/user/coffeeshop")}>
                <img src={Coffee} alt="coffee" className="user-coffee" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default UserPage;
