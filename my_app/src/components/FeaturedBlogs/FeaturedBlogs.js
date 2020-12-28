import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import BlogArticlesList from '../../components/BlogArticlesList/BlogArticlesList';

export default function FeaturedBlogs() {
  const [appState, setAppState] = useState({
    blogs: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `/top-blogs`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(blogs => {
        setAppState({ loading: false, blogs: blogs });
      });
  }, [setAppState]);
  return (
    <Container>
      <BlogArticlesList blogs={appState.blogs} />
    </Container>
  );
}
