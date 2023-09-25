import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroBanner.scss";

const HeroBanner = ({ banners }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    if (banners.length - 1 === currentSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(banners.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(autoPlay);
    };
  }, [currentSlide]);

  return (
    <div className="hero-banner-container flex">
      {banners.map((banner, index) =>
        currentSlide === index ? (
          <div
            className="hero-banner flex animate__animated animate__fadeIn"
            key={index}
          >
            <img src={banner.imgUrl} alt={banner.imgUrl} />
            <div className="left-arrow-btn" onClick={prevSlide}>
              <i className="fa-solid fa-arrow-left fa-xl"></i>
            </div>
            <div className="right-arrow-btn" onClick={nextSlide}>
              <i className="fa-solid fa-arrow-right fa-xl"></i>
            </div>
            <div className="hero-banner-content flex">
              <h1>{banner.title}</h1>
              <p>{banner.description}</p>
              <button
                className="banner-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(banner.link);
                }}
              >
                {banner.buttonText}
              </button>
            </div>
            <div className="indicator-container flex">
              {banners.map((banner, index) => (
                <div
                  key={index}
                  className={
                    currentSlide === index ? "indicator-active" : "indicator"
                  }
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                ></div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default HeroBanner;
