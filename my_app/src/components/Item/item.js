import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './item.css';

export default function Item(props) {
  return (
    <Card>
      <Card.Img style={{ height: 300 + 'px' }} variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title className="text-center">{props.nameOfAxe}</Card.Title>
        <Card.Text className="text-center">{props.description}</Card.Text>
        <div style={{ marginTop: 20 + 'px', marginBottom: 20 + 'px', height: 1 + 'px', backgroundColor: 'grey' }}></div>
        <Row>
          <Col>
            <Button variant="outline-success" className="item-button">
              Go to item
            </Button>
          </Col>
          <Col>
            <div className="price-wrapper">
              <h1 className="price">Price: {props.price} $</h1>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
