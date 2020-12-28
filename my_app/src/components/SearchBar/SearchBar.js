import React from 'react';
import { Form, Container } from 'react-bootstrap';

const SearchBar = ({ keyword, onChange: setKeyword, something }) => {
  return (
    <Container>
      <Form.Control
        key="id"
        value={keyword}
        placeholder={`search ${something}`}
        onChange={e => setKeyword(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
