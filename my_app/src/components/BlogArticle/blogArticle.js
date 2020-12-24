import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './blogArticle.css';

export default function BlogArticle(props) {
  return (
    <Card className="blog-article" key={props.id}>
      <Card.Img style={{ height: 300 + 'px' }} variant="top" src={props.imgurl} />
      <Card.Body>
        <Card.Title className="text-center">{props.heading}</Card.Title>
        <Card.Text className="text-center">
          By <span className="by">{props.posted_by}</span> on <span className="on">{props.date}</span>
        </Card.Text>
        <NavLink to={`blog/${props.id}`} exact className="text-uppercase blog-link">
          go to item
        </NavLink>
      </Card.Body>
    </Card>
  );
}
