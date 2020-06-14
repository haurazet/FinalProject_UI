import React from "react";
import styles from "./TransactionHistory.module.css";
import { Container, Row, Col } from "reactstrap";

const TransactionHistory = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>TEST TransactionHistory</Col>
          <Col>asdasdasd</Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.descriptionbox}>
              <div>TEST</div>
              <div>asdasd</div>
              <div>asdasdas</div>
            </div>
          </Col>
          <Col>ASDASDASD</Col>
        </Row>
      </Container>
    </div>
  );
};

export default TransactionHistory;
