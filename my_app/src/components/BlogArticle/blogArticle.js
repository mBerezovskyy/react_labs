import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './blogArticle.css';

export default function BlogArticle(props) {
  return (
    <Card className="blog-article">
      <Card.Img style={{ height: 300 + 'px' }} variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title className="text-center">{props.heading}</Card.Title>
        <Card.Text className="text-center">
          By <span className="by">{props.publishedBy}</span> on <span className="on">{props.publishedOn}</span>
        </Card.Text>
        <a href="/article" className="text-uppercase blog-link">
          read more
        </a>
      </Card.Body>
    </Card>
  );
}
