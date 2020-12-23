import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import ItemsList from '../../components/ItemsList/itemsList';

export default function Bestsellers() {
  const [appState, setAppState] = useState({
    axes: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `/bestsellers`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(axes => {
        setAppState({ loading: false, axes: axes });
      });
  }, [setAppState]);
  return (
    <Container>
      <ItemsList axes={appState.axes} />
    </Container>
  );
}
