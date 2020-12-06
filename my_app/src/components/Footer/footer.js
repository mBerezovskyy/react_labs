import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row className="text-center">
          <Col>
            <a href="/#">
              <FontAwesomeIcon className="social-icon facebook" icon={faFacebook} />
            </a>
          </Col>
          <Col>
            <a href="/#">
              <FontAwesomeIcon className="social-icon instagram" icon={faInstagram} />
            </a>
          </Col>
          <Col>
            <a href="/#">
              <FontAwesomeIcon className="social-icon twitter" icon={faTwitter} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="line"></div>
            <h2 className="shop-location">Lviv, vul. Zelena 43a</h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
