import { React, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BlogArticle from '../BlogArticle/blogArticle';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BlogArticlesList() {
  return (
    <Fragment>
      <div style={{ marginTop: 60 + 'px' }}></div>

      <Container>
        <Row>
          <Col>
            <BlogArticle
              imgUrl="https://cdn.shopify.com/s/files/1/2374/3959/products/single-handed-viking-axe-2_512x512.jpg?v=1579638397"
              heading="Why should you buy a viking axe"
              publishedBy="Joe"
              publishedOn="20-11-2020"
            />
          </Col>
          <Col>
            <BlogArticle
              imgUrl="https://i.pinimg.com/originals/3d/da/df/3ddadfaf02facc3f5bbefa2b6fb2c907.jpg"
              heading="Top 10 best axes for camping"
              publishedBy="Max"
              publishedOn="21-09-2020"
            />
          </Col>
          <Col>
            <BlogArticle
              imgUrl="https://www.domovoy.pl.ua/images/stories/virtuemart/manufacturer/resized/fiskars-logo_250x250.jpg"
              heading="Fiskars - by people for people"
              publishedBy="Ann"
              publishedOn="06-07-2020"
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
