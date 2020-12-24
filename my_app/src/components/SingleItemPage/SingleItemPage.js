import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

import axios from 'axios';

export default function SingleItemPage(props) {
  const { id } = useParams();

  const [appState, setAppState] = useState({});

  axios.get(`/axe/${id}`).then(data => {
    setAppState(data.data);
    console.log(appState);
  });

  return (
    <Fragment>
      <Container>
        <div style={{ marginTop: 80 + 'px' }}></div>

        <Card>
          <Card.Img style={{ height: 200 + 'px' }} variant="top" src={appState.imgUrl} />
          <Card.Body>
            <Card.Title className="text-center">{appState.brand}</Card.Title>
            <Card.Text className="text-center">{appState.description}</Card.Text>
            <div
              style={{ marginTop: 20 + 'px', marginBottom: 20 + 'px', height: 1 + 'px', backgroundColor: 'grey' }}
            ></div>
            <div className="text-center">
              <h1 className="price">Price: {appState.price} $</h1>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <div style={{ marginTop: 80 + 'px' }}></div>
    </Fragment>
  );
}
