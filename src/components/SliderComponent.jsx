import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css';
import tea from '../logo/tea.jpg';
import anolog from '../logo/analog.png';
import mode from '../logo/mode.png';
import cartoon from '../logo/cartoon.png';
import BOB from '../logo/BOB.jpg';

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const slides = [
    { img: tea, title: "Tea Time", content: "Enjoy a relaxing tea time with a variety of teas from around the world.", button: "Begin Your Journey" },
    { img: anolog, title: "Analog Devices", content: "Discover the latest in analog technology with our innovative products.", button: "Begin Your Journey" },
    { img: mode, title: "Fashion Mode", content: "Stay in style with the latest fashion trends and tips.", button: "Begin Your Journey" },
    { img: cartoon, title: "Cartoon Network", content: "Watch your favorite cartoons and enjoy endless entertainment.", button: "Begin Your Journey" },
    { img: BOB, title: "Bob the Builder", content: "Join Bob and his friends in fun and educational construction adventures.", button: "Begin Your Journey" }
  ];

  return (
    <div className="slider-component">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <img src={slide.img} alt={slide.title} className="slide-image" />
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <p>{slide.content}</p>
                <button className="slide-button">{slide.button}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
};

export default SliderComponent;
