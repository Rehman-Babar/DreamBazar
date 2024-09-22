/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./carousel.css";
const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: "Upgrade Your Audio Experience.",
      heading: "Immerse In Pure Sound Bliss With AirPods Pro!",
      description: "Own The Future Of Wireless Earbuds With AirPods Pro.",
      btnText: "View Collection",
      align: "left",
      ml: "ml-[-700px]",
      // ml2: "ml-[-550px]",
      // ml3: "ml-[0px]",
      text: "text-black",
      image: "https://dreambazar.store/assets/img/banner/13.jpg",
      img2: "/carousal-1-2.jpg", // Image URL for the first slide
    },
    {
      title: "Dream Bazzar",
      heading: "Shop With Style!",
      description: "Find The Best Gadgets In The Market Here",
      btnText: "View Collection",
      align: "center",
      image: "https://dreambazar.store/assets/img/banner/12.jpg", // Image URL for the second slide
    },
    {
      title: "Elevate Your Wrist Game",
      heading: "Introducing The Future on Your Wrist!",
      description: "Redefine Time with Intelligence. Get Your Smartwatch Now!",
      btnText: "View Collection",
      align: "center",
      image: "https://dreambazar.store/assets/img/banner/5.jpg", // Image URL for the third slide
    },
  ];
  // console.log(slides[0].ml);
  useEffect(() => {
    let slideInterval;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(slideInterval);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`carousel`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${slide.align}-align ${index === activeSlide ? "active" : ""}  ${
            slide.ml ? "bg2-img" : ""
          } px-5 `}
          style={{
            display: index === activeSlide ? "flex" : "none",
            // displmargay: index === activeSlide ? "flex" : "none",
            backgroundImage: `url(${slide.image})`, // Set background image here
            backgroundSize: "cover", // Ensure the image covers the slide
            backgroundPosition: "center",
            overflowX: "auto",
          }}>
          .
          <div className={`content ${slide.align}-align ${("xl:", slide.ml)} ${slide.ml ? "for-lg" : ""}`}>
            <h3 className={` ${slide.text ? "first-title  mb-3 for-lg" : ""} mb-3 md:mb-6 text-5xl`}>{slide.title}</h3>
            <h1>
              <strong>
                {slide.heading.split("<br>").map((text, i) => (
                  <div
                    key={i}
                    className={`${slide.text ? " first-title max-w-80 " : ""} ${
                      slide.ml ? "for-lg" : ""
                    }  text-lg md:text-4xl md:md:mb-6`}>
                    {text}
                  </div>
                ))}
              </strong>
            </h1>
            <p
              className={`${slide.text ? "first-title" : ""} ${
                slide.ml ? "for-lg" : ""
              }  text-[1.5rem] md:text-2xl leading-4 mb-1 md:mb-3`}>
              {slide.description}
            </p>
            <button className={`view-collection-btn ${slide.ml ? "for-lg btn-sm" : ""} `}>{slide.btnText}</button>
          </div>
        </div>
      ))}

      <div className="navigation">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="dots">
          {slides.map((_, idx) => (
            <span key={idx} className={`dot ${idx === activeSlide ? "active" : ""}`}></span>
          ))}
        </div>
        <button className="nav-btn next-btn" onClick={handleNext}>
          &#8250;
        </button>
        <button className="play-pause-btn" onClick={togglePlayPause}>
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
