import { Container, Card, Col, Row } from 'react-bootstrap';
import Item from '../Item/item';

import React from 'react';
const ItemsList = props => {
  const { axes } = props;
  if (!axes || axes.length === 0) return <p>No axes, sorry</p>;
  return (
    <Container>
      <div style={{ marginTop: 80 + 'px' }}></div>

      <Row>
        {axes.map(axe => {
          return (
            <Col lg={3}>
              <Card key={axe.id} className="list">
                <Item brand={axe.brand} description={axe.description} price={axe.price} id={axe.id} />
              </Card>
              <div style={{ marginTop: 80 + 'px' }}></div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default ItemsList;
