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
            <div className='bg-image-1'> 
             <div className='slide-info'>
             <h1 className='slider-text'>Raiders Of The Lost Ark</h1>
             <button className='btn btn-md btn--danger btn--wide slider--btn'>Learn More</button>
             </div>
            </div>
            
        
          {/* <img className="rev-slidebg" alt="Rush" src="/images/slides/first-slide.jpg" /> */}
          
        </div>

        <div className="slide">
          <img className="rev-slidebg" alt="Travel worldwide" src="/images/bg-video.jpg" />
          <div className="tp-caption slide__name slide__name--smaller">Travel, Admire, Remember.</div>
          <div className="tp-caption slide__time">From</div>
          <div className="tp-caption slide__date position-center postion-place--two">April 18</div>
          <div className="tp-caption slide__time">- till</div>
          <div className="tp-caption slide__date">May 01</div>
          <div className="tp-caption slider-wrap-btn">
            <a href="#" className="btn btn-md btn--danger btn--wide slider--btn">learn more</a>
          </div>
        </div>

        <div className="slide">
          <img className="rev-slidebg" alt="Stop wishing. Start doing." src="/images/slides/next-slide.jpg" />
          <div className="tp-caption slide__name slide__name--smaller slide__name--specific">
            Stop <span className="highlight">wishing.</span> Start <span className="highlight">doing.</span>
          </div>
          <div className="tp-caption slide__descript">
            find your best match movie with A.MOVIE
          </div>
          <div className="tp-caption slider-wrap-btn">
            <a href="#" className="btn btn-md btn--danger slider--btn">check out movies</a>
          </div>
        </div>
      </Slider>
    </div>
    </>
  );
};

export default HomeSlider;
