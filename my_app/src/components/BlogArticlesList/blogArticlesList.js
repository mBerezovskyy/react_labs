import { Container, Col, Row } from 'react-bootstrap';
import BlogArticle from '../BlogArticle/blogArticle';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogArticlesList = props => {
  const { blogs } = props;
  if (!blogs || blogs.length === 0) return <p>No blogs, sorry</p>;
  return (
    <Container>
      <div style={{ marginTop: 80 + 'px' }}></div>

      <Row>
        {blogs.map(blog => {
          return (
            <Col lg={4}>
              <BlogArticle imgurl={blog.imgurl} heading={blog.heading} posted_by={blog.posted_by} date={blog.date} />
              <div style={{ marginTop: 80 + 'px' }}></div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BlogArticlesList;
