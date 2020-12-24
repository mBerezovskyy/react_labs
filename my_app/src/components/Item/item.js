import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './item.css';

export default function Item(props) {
  return (
    <Card>
      <Card.Img style={{ height: 200 + 'px' }} variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title className="text-center">{props.brand}</Card.Title>
        <Card.Text className="text-center">{props.description}</Card.Text>
        <div style={{ marginTop: 20 + 'px', marginBottom: 20 + 'px', height: 1 + 'px', backgroundColor: 'grey' }}></div>
        <div className="text-center">
          <h1 className="price">Price: {props.price} $</h1>
          <NavLink to={`axe/${props.id}`} exact>
            go to item
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
}
