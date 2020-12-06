import { React } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemsTypes.css';

export default function ItemsTypes() {
  return (
    <Container>
      <div style={{ marginTop: 80 + 'px' }}></div>
      <Row>
        <Col>
          <a href="/#" className="item-type">
            <Card className="item-type-card">
              <Card.Img
                className="item-type-img"
                variant="top"
                src="https://www.fiskars.eu/var/fiskars_main/storage/images/frontpage/products/gardening/axes/solid-camping-axe-a5-1051084/6255370-1-eng-TS/solid-camping-axe-a5-1051084.jpg"
              />
              <Card.Footer className="text-center item-type-footer">For camping</Card.Footer>
            </Card>
          </a>
        </Col>
        <Col>
          <a href="/#" className="item-type">
            <Card className="item-type-card">
              <Card.Img
                className="item-type-img"
                variant="top"
                src="https://cdn.shopify.com/s/files/1/0106/0267/6260/products/s-l1600_1_e7bdeb5a-b248-44ba-86fb-3c6e8c229651_300x300.jpg?v=1569268287"
              />
              <Card.Footer className="text-center item-type-footer">Handmade</Card.Footer>
            </Card>
          </a>
        </Col>
        <Col>
          <a href="#" className="item-type">
            <Card className="item-type-card">
              <Card.Img
                className="item-type-img"
                variant="top"
                src="https://i2.rozetka.ua/goods/415815/husqvarna_1000g_500mm_carpenters_axe_images_415815272.jpg"
              />
              <Card.Footer className="text-center item-type-footer">For proffesional use</Card.Footer>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
