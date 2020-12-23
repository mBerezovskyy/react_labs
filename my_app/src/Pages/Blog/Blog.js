import { React, useEffect, useState } from 'react';
import BlogArticlesList from '../../components/BlogArticlesList/BlogArticlesList';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Blog() {
  const [input, setInput] = useState('');
  const [blogsListDefault, setBlogsListDefault] = useState();
  const [blogsList, setBlogsList] = useState();

  const fetchData = async () => {
    return await fetch('/blogs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBlogsList(data);
        setBlogsListDefault(data);
      });
  };

  const updateInput = async input => {
    const filtered = blogsListDefault.filter(country => {
      return country.heading.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setBlogsList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ marginTop: 80 + 'px' }}></div>

      <SearchBar input={input} onChange={updateInput} something="heading" />
      <BlogArticlesList blogs={blogsList} />
    </div>
  );
}
