import React from 'react';
import Slider from 'react-slick';

import slide1 from '../../resources/images/slide_one.jpg';
import slide2 from '../../resources/images/slide_two.jpg';
import slide3 from '../../resources/images/slide_three.jpg';

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  const slides = [slide1, slide2, slide3];

  return (
    <div
      className="carrousel_wrapper"
      style={{
        background: 'red',
        height: `${window.innerHeight}px`,
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              <div
                className="carrousel_image"
                style={{
                  background: `url(${slide})`,
                  height: `${window.innerHeight}px`,
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carrousel;
