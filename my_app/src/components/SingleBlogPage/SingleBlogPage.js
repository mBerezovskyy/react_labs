import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

import './SingleBlogPage.css';

import axios from 'axios';

export default function SingleItemPage(props) {
  const { id } = useParams();

  const [appState, setAppState] = useState({});

  axios.get(`/blog/${id}`).then(data => {
    setAppState(data.data);
    console.log(data);
  });

  return (
    <Fragment>
      <Container>
        <div style={{ marginTop: 80 + 'px' }}></div>

        <Card className="blog-article" key={appState.id}>
          <Card.Img variant="top" src={appState.imgurl} />
          <Card.Body>
            <Card.Title className="text-center">{appState.heading}</Card.Title>
            <Card.Text className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Card.Text>
            <Card.Text className="text-center">
              By <span className="by">{appState.posted_by}</span> on <span className="on">{appState.date}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <div style={{ marginTop: 80 + 'px' }}></div>
    </Fragment>
  );
}
