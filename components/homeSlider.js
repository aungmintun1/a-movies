import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <> 

    <div className="bannercontainer rev_slider_wrapper">
      <Slider {...settings}>
        <div className="slide">

        <div className='banner-image-3'> 
             <div className='slide-info'>
             <h1 className='slider-text'>Book A Ticket To A Movie</h1>
             <button className='btn btn-md btn--danger btn--wide slider--btn'>Learn More</button>
             </div>
            </div>
        </div>

        <div className="slide">
          <div className='bg-image-1'> 
             <div className='slide-info'>
             <h1 className='slider-text'>Raiders Of The Lost Ark</h1>
             <button className='btn btn-md btn--danger btn--wide slider--btn'>Learn More</button>
             </div>
            </div>
        </div>

        <div className="slide">
              <iframe 
        className="featured-media__video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/6npU3Fw6bb8?autoplay=1&mute=1&loop=1&start=16&controls=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen 
        style={{ pointerEvents: 'none' }} // Prevents any interaction with the iframe
    />
        </div>
      </Slider>
    </div>
    </>
  );
};

export default HomeSlider;
