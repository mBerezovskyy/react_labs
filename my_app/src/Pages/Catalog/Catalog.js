import { React, useEffect, useState } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import { Container } from 'react-bootstrap';

export default function Catalog() {
  const [input, setInput] = useState('');
  const [axesListDefault, setAxesListDefault] = useState();
  const [axesList, setAxesList] = useState();

  const fetchData = () => {
    return fetch('/axes')
      .then(response => response.json())
      .then(data => {
        setAxesList(data);
        setAxesListDefault(data);
      });
  };

  const updateInput = async input => {
    const filtered = axesListDefault.filter(axe => {
      return axe.brand.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setAxesList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, [setAxesList]);

  function less_than_500() {
    const filtered = axesListDefault.filter(axe => {
      return axe.price < 500;
    });

    setAxesList(filtered);
  }

  function fiskars_only() {
    const filtered = axesListDefault.filter(axe => {
      return axe.brand.toLowerCase().includes('fiskars') && axe.price < 500;
    });

    setAxesList(filtered);
  }

  return (
    <div>
      <div style={{ marginTop: 80 + 'px' }} />

      <SearchBar input={input} onChange={updateInput} something="brand" />
      <Container>
        <div style={{ marginTop: 20 + 'px' }} />
        <input type="checkbox" name="less_than_500" onChange={less_than_500} />
        <label for="less_than_500">less than 500$</label>
        <div style={{ marginLeft: 20 + 'px' }} />
        <input type="checkbox" name="fiskars_only" onChange={fiskars_only} />
        <label for="fiskars_only">only "Fiskars"</label>
      </Container>
    </div>
  );
}
