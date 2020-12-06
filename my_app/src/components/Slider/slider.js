import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';

export default function slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://i.pinimg.com/originals/17/d8/d0/17d8d03a62639fd4dfe0a123519056fd.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best axe shop in whole EU</h3>
          <p>Only best axes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://i.pinimg.com/originals/17/d8/d0/17d8d03a62639fd4dfe0a123519056fd.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Best axe shop in whole EU</h3>
          <p>We will sure make you happy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://i.pinimg.com/originals/17/d8/d0/17d8d03a62639fd4dfe0a123519056fd.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Best axe shop in whole EU</h3>
          <p>Quality is our #1 priority</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
