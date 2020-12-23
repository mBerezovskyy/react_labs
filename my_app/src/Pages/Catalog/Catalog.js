import { React, useEffect, useState } from 'react';
import ItemsList from '../../components/ItemsList/itemsList';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Catalog() {
  const [input, setInput] = useState('');
  const [axesListDefault, setAxesListDefault] = useState();
  const [axesList, setAxesList] = useState();

  const fetchData = async () => {
    return await fetch('/axes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAxesList(data);
        setAxesListDefault(data);
      });
  };

  const updateInput = async input => {
    const filtered = axesListDefault.filter(country => {
      return country.brand.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setAxesList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ marginTop: 80 + 'px' }}></div>

      <SearchBar input={input} onChange={updateInput} something="brand" />
      <ItemsList axes={axesList} />
    </div>
  );
}
