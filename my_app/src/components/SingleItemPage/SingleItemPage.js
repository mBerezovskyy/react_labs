import React, { useState, useEffect } from 'react';

export default function SingleItemPage(props) {
  const {
    match: { params },
  } = props;

  const [appState, setAppState] = useState(0);

  useEffect(() => {
    const apiUrl = `/axe/${params.id}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(axe => {
        console.log(axe);
        setAppState(5);
        console.log(appState);
      });
  }, []);

  return 123;
}
