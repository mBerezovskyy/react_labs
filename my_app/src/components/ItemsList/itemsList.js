import { React, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Item from '../Item/item';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function itemsList() {
  return (
    <Fragment>
      <div style={{ marginTop: 60 + 'px' }}></div>
      <Container>
        <Row>
          <Col>
            <Item
              imgUrl="https://fiskars-ukraine.com.ua/wp-content/uploads/fiskars-norden-n12-1051144.jpg"
              nameOfAxe="Fiskars Norden"
              description="awesome axe for carpenters"
              price="75"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://i8.rozetka.ua/goods/19264797/235413019_images_19264797445.jpg"
              nameOfAxe="Fiskars Solid A11"
              description="awesome axe for home use"
              price="60"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://images-na.ssl-images-amazon.com/images/I/51zeRnALySL._AC_SL1000_.jpg"
              nameOfAxe="Medeival decorative axe"
              description="perfect for your collection"
              price="100"
            />
          </Col>
        </Row>
        <div style={{ marginTop: 60 + 'px' }}></div>

        <Row>
          <Col>
            <Item
              imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsl5_wGyoL2dK60-rZoPNI1lVxrRaGwgfiRA&usqp=CAU"
              nameOfAxe="Viking runic axe"
              description="best for vikings' axes lovers"
              price="200"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://www.loghelp.com/images/G-SmallCarpentersAxe_l.jpg"
              nameOfAxe="Gransfors Bruks"
              description="another awesome carpenter's tool"
              price="50"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://images.ua.prom.st/489505250_topor-universalnyj-fiskars.jpg"
              nameOfAxe="Fiskars x5"
              description="small axe for camping"
              price="80"
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
