// pages/index.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function singleMovie() {
  const [filmData, setFilmData] = useState(null); //film data is a single object so null
  const [cinemaShowtimes, setCinemaShowtimes] = useState([]); //cinemaShowTimes are an array so []
  const [filmDetails, setFilmDetails] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { id } = router.query; 


  useEffect(() => {
    const fetchData = async () => {
      const currentTime = new Date().toISOString().split('T')[0];
      try {
        const [showtimesResponse, detailsResponse] = await Promise.all([
          fetch(`https://api-gate2.movieglu.com/filmShowTimes/?n=5&film_id=${id}&date=${currentTime}`, {
            method: 'GET',
            headers: {
              'Authorization': 'Basic QVVOR19YWDpMZ0huYkZrUkp0ck8=',
              'client': 'AUNG',
              'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
              'territory': 'XX',
              'api-version': 'v200',
              'device-datetime': new Date().toISOString(),
              'geolocation': '-22.0;14.0',
            },
          }),
          fetch(`https://api-gate2.movieglu.com/filmDetails/?film_id=${id}&size_category=Large`, {
            method: 'GET',
            headers: {
              'Authorization': 'Basic QVVOR19YWDpMZ0huYkZrUkp0ck8=',
              'client': 'AUNG',
              'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
              'territory': 'XX',
              'api-version': 'v200',
              'device-datetime': new Date().toISOString(),
              'geolocation': '-22.0;14.0',
            },
          })
        ]);

        if (!showtimesResponse.ok || !detailsResponse.ok) {
          throw new Error(`HTTP error! status: ${showtimesResponse.status}, ${detailsResponse.status}`);
        }

        const showtimesResult = await showtimesResponse.json();
        const detailsResult = await detailsResponse.json();

        setFilmData(showtimesResult.film); // Store the film data from the first API
        setCinemaShowtimes(showtimesResult.cinemas || []); // Store the cinemas array
        setFilmDetails(detailsResult); // Store the film details from the second API
      } catch (error) {
        setError(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!filmData || !filmDetails) {
    return <div>Loading...</div>;
  }

  const releaseYear = filmDetails.release_dates[0].release_date.split('-')[0];
  const releaseDate = new Date(filmDetails.release_dates[0].release_date);
  const formattedDate = releaseDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


  function convertTimeTo12HourFormat(time) {
    const [hours, minutes] = time.split(':');
    const period = +hours >= 12 ? 'PM' : 'AM';
    const formattedHours = +hours % 12 || 12; // Converts 0 to 12 for midnight and adjusts hours > 12
    return `${formattedHours}:${minutes} ${period}`;
}

  return (
    // <div>
    //   <h1>Film Showtimes</h1>
      
    //   {/* Display Film Information */}
    //   <h2>{filmData.film_name}</h2>
    //   <img src={filmData./images.poster[1].medium.film_image} alt={filmData.film_name} />
      
    //   {/* Display Cinema Showtimes */}
    //   {cinemaShowtimes.map((cinema, index) => (
    //     <div key={index}>
    //       <h3>{cinema.cinema_name}</h3>
    //       {cinema.showings.Standard.times.map((time, timeIndex) => (
    //         <Link href={`/seats`}>
    //         <div className='ticket-box'> 
    //         <p key={timeIndex}>{time.start_time}</p>
    //         </div>
    //         </Link>
    //       ))}

    //     </div>
    //   ))}

    // </div>
    <>
    <div className="wrapper">
    <div className="banner-top">
        <img alt="top banner" src="/images/banners/bra.jpg" />
    </div>

    <header className="header-wrapper">
        <div className="container">
            <a href="index.html" className="logo">
                <img alt="logo" src="/images/logo.png" />
            </a>

            <nav id="navigation-box">
                <a href="#" id="navigation-toggle">
                    <span className="menu-icon">
                        <span className="icon-toggle" role="button" aria-label="Toggle Navigation">
                            <span className="lines" />
                        </span>
                    </span>
                </a>

                <ul id="navigation">
                    <li>
                        <span className="sub-nav-toggle plus" />
                        <a href="#">Pages</a>
                        <ul>
                            <li className="menu__nav-item"><a href="movie-page-left.html">Single movie (right sidebar)</a></li>
                            <li className="menu__nav-item"><a href="movie-page-right.html">Single movie (left sidebar)</a></li>
                            <li className="menu__nav-item"><a href="movie-page-full.html">Single movie (full width)</a></li>
                            <li className="menu__nav-item"><a href="movie-list-left.html">Movies list (right sidebar)</a></li>
                            <li className="menu__nav-item"><a href="movie-list-right.html">Movies list (left sidebar)</a></li>
                            <li className="menu__nav-item"><a href="movie-list-full.html">Movies list (full width)</a></li>
                            <li className="menu__nav-item"><a href="single-cinema.html">Single cinema</a></li>
                            <li className="menu__nav-item"><a href="cinema-list.html">Cinemas list</a></li>
                            <li className="menu__nav-item"><a href="trailer.html">Trailers</a></li>
                            <li className="menu__nav-item"><a href="rates-left.html">Rates (right sidebar)</a></li>
                            <li className="menu__nav-item"><a href="rates-right.html">Rates (left sidebar)</a></li>
                            <li className="menu__nav-item"><a href="rates-full.html">Rates (full width)</a></li>
                            <li className="menu__nav-item"><a href="offers.html">Offers</a></li>
                            <li className="menu__nav-item"><a href="contact.html">Contact us</a></li>
                            <li className="menu__nav-item"><a href="404.html">404 error</a></li>
                            <li className="menu__nav-item"><a href="coming-soon.html">Coming soon</a></li>
                            <li className="menu__nav-item"><a href="login.html">Login/Registration</a></li>
                        </ul>
                    </li>
                    <li>
                        <span className="sub-nav-toggle plus" />
                        <a href="page-elements.html">Features</a>
                        <ul>
                            <li className="menu__nav-item"><a href="typography.html">Typography</a></li>
                            <li className="menu__nav-item"><a href="page-elements.html">Shortcodes</a></li>
                            <li className="menu__nav-item"><a href="column.html">Columns</a></li>
                            <li className="menu__nav-item"><a href="icon-font.html">Icons</a></li>
                        </ul>
                    </li>
                    <li>
                        <span className="sub-nav-toggle plus" />
                        <a href="page-elements.html">Booking steps</a>
                        <ul>
                            <li className="menu__nav-item"><a href="book1.html">Booking step 1</a></li>
                            <li className="menu__nav-item"><a href="book2.html">Booking step 2</a></li>
                            <li className="menu__nav-item"><a href="book3-buy.html">Booking step 3 (buy)</a></li>
                            <li className="menu__nav-item"><a href="book3-reserve.html">Booking step 3 (reserve)</a></li>
                            <li className="menu__nav-item"><a href="book-final.html">Final ticket view</a></li>
                        </ul>
                    </li>
                    <li>
                        <span className="sub-nav-toggle plus" />
                        <a href="gallery-four.html">Gallery</a>
                        <ul>
                            <li className="menu__nav-item"><a href="gallery-four.html">4 col gallery</a></li>
                            <li className="menu__nav-item"><a href="gallery-three.html">3 col gallery</a></li>
                            <li className="menu__nav-item"><a href="gallery-two.html">2 col gallery</a></li>
                        </ul>
                    </li>
                    <li>
                        <span className="sub-nav-toggle plus" />
                        <a href="news-left.html">News</a>
                        <ul>
                            <li className="menu__nav-item"><a href="news-left.html">News (right sidebar)</a></li>
                            <li className="menu__nav-item"><a href="news-right.html">News (left sidebar)</a></li>
                            <li className="menu__nav-item"><a href="news-full.html">News (full width)</a></li>
                            <li className="menu__nav-item"><a href="single-page-left.html">Single post (right sidebar)</a></li>
                            <li className="menu__nav-item"><a href="single-page-right.html">Single post (left sidebar)</a></li>
                            <li className="menu__nav-item"><a href="single-page-full.html">Single post (full width)</a></li>
                        </ul>
                    </li>
                    <li>
                        <span className="sub-nav-toggle plus" />
                        <a href="#">Mega menu</a>
                        <ul className="mega-menu container">
                            <li className="col-md-3 mega-menu__coloum">
                                <h4 className="mega-menu__heading">Now in the cinema</h4>
                                <ul className="mega-menu__list">
                                    <li className="mega-menu__nav-item"><a href="#">The Counselor</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Bad Grandpa</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Blue Is the Warmest Color</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Capital</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Spinning Plates</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Bastards</a></li>
                                </ul>
                            </li>

                            <li className="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                                <ul className="mega-menu__list">
                                    <li className="mega-menu__nav-item"><a href="#">Gravity</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Captain Phillips</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Carrie</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Cloudy with a Chance of Meatballs 2</a></li>
                                </ul>
                            </li>

                            <li className="col-md-3 mega-menu__coloum">
                                <h4 className="mega-menu__heading">Ending soon</h4>
                                <ul className="mega-menu__list">
                                    <li className="mega-menu__nav-item"><a href="#">Escape Plan</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Rush</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Prisoners</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Enough Said</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">The Fifth Estate</a></li>
                                    <li className="mega-menu__nav-item"><a href="#">Runner Runner</a></li>
                                </ul>
                            </li>

                            <li className="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                                <ul className="mega-menu__list">
                                    <li className="mega-menu__nav-item"><a href="#">Insidious: Chapter 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div className="control-panel">
                <a href="#" className="btn btn--sign login-window">Sign in</a>
                <a href="#" className="btn btn-md btn--warning btn--book login-window">Book a ticket</a>
            </div>
        </div>
    </header>

    <div className="search-wrapper">
        <div className="container container--add">
            <form id="search-form" method="get" className="search">
                <input type="text" className="search__field" placeholder="Search" />
                <select name="sorting_item" id="search-sort" className="search__sort" tabIndex="0">
                    <option value="1" selected="selected">By title</option>
                    <option value="2">By year</option>
                    <option value="3">By producer</option>
                    <option value="4">By title</option>
                    <option value="5">By year</option>
                </select>
                <button type="submit" className="btn btn-md btn--danger search__button">search a movie</button>
            </form>
        </div>
    </div>

    <section className="container">
        <div className="col-sm-12">
            <div className="movie">
                <h2 className="page-heading">{filmData.film_name}</h2>

                <div className="movie__info">
                    <div className="col-sm-4 col-md-3 movie-mobile">
                        <div className="movie__/images">
                            <span className="movie__rating">5.0</span>
                            <img width="100%" src={filmData.images.poster[1].medium.film_image} alt={filmData.film_name} className="img-border"  />
                        </div>
                        <div className="movie__rate">Your vote: <div id="score" className="score" />
                        <div id="score" class="score"><img alt="1" src="/images/rate/star-on.svg" title="bad"/>&nbsp;<img alt="2" src="/images/rate/star-on.svg" title="poor"/>&nbsp;<img alt="3" src="/images/rate/star-on.svg" title="regular"/>&nbsp;<img alt="4" src="/images/rate/star-on.svg" title="good"/>&nbsp;<img alt="5" src="/images/rate/star-on.svg" title="gorgeous"/><input name="score" type="hidden" value="5"/></div>
                        </div>
                
                    </div>

                    <div className="col-sm-8 col-md-9">
                        <p className="movie__time">{filmDetails.duration_mins} mins</p>
                        <p className="movie__option"><strong>Country: </strong> <a href="#">USA</a></p>
                        <p className="movie__option"><strong>Year: </strong><a href="#">{releaseYear}</a></p>
                        <p className="movie__option"><strong>Category: </strong> {filmDetails.genres.map((genre) => ( <a href="#">{genre.genre_name} </a>))}</p>
                        <p className="movie__option"><strong>Release date: {formattedDate} </strong> </p>
                        <p className="movie__option"><strong>Director: </strong><a href="#">{filmDetails.directors[0].director_name}</a></p>
                        <p className="movie__option"><strong>Actors: </strong>{filmDetails.cast.map((member) => ( <a href="#">{member.cast_name}, </a>))}</p>
                        <p className="movie__option"><strong>Age Rating: </strong><a href="#">{filmDetails.age_rating[0].rating}</a></p>

                        <div className="movie__btns movie__btns--full">
                            <a href="#" className="btn btn-md btn--warning">book a ticket for this movie</a>
                            <a href="#" className="watchlist">Add to watchlist</a>
                        </div>

                        {/* <div className="share">
                            <span className="share__marker">Share: </span>
                            <div className="addthis_toolbox addthis_default_style">
                                <a className="addthis_button_facebook_like" />
                                <a className="addthis_button_tweet" />
                                <a className="addthis_button_google_plusone" />
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="clearfix" />

                <h2 className="page-heading">The plot</h2>

                <p className="movie__describe">
                    {filmDetails.synopsis_long}
                </p>


                <h2 className="page-heading">showtime &amp; tickets</h2>
                <div className="choose-container">
                    {/* <form id="select" className="select" method="get">
                        <select name="select_item" id="select-sort" className="select__sort" tabIndex="0">
                            <option value="1" selected="selected">London</option>
                            <option value="2">New York</option>
                            <option value="3">Paris</option>
                            <option value="4">Berlin</option>
                            <option value="5">Moscow</option>
                            <option value="3">Minsk</option>
                            <option value="4">Warsawa</option>
                            <option value="5">Kiev</option>
                        </select>
                    </form>

                    <div className="datepicker">
                        <span className="datepicker__marker"><i className="fa fa-calendar" />Date</span>
                        <input type="text" id="datepicker" value="03/10/2014" className="datepicker__input" />
                    </div>

                    <a href="#" id="map-switch" className="watchlist watchlist--map watchlist--map-full">
                        <span className="show-map">Show cinemas on map</span><span className="show-time">Show cinema time table</span>
                    </a>
                        <div className="clearfix" />
                    */}

                

                    <div className="time-select">
                    {cinemaShowtimes.map((cinema, index) => (
                        <div key={index} className="time-select__group group--first">
                          <div className="col-sm-4">
                            <p className="time-select__place">{cinema.cinema_name}</p>
                          </div>
                          <ul className="col-sm-8 items-wrap">
                            {cinema.showings.Standard.times.map((time, timeIndex) => (
                              <Link href={`/seats`} key={timeIndex}>
                                <li className="time-select__item" data-time={time.start_time}>{convertTimeTo12HourFormat(time.start_time)}</li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
          </div>
        </section>

    <div className="clearfix" />

    <footer className="footer-wrapper">
        <section className="container">
            <div className="col-xs-4 col-md-2 footer-nav">
                <ul className="nav-link">
                    <li><a href="#" className="nav-link__item">Cities</a></li>
                    <li><a href="movie-list-left.html" className="nav-link__item">Movies</a></li>
                    <li><a href="trailer.html" className="nav-link__item">Trailers</a></li>
                    <li><a href="rates-left.html" className="nav-link__item">Rates</a></li>
                </ul>
            </div>
            <div className="col-xs-4 col-md-2 footer-nav">
                <ul className="nav-link">
                    <li><a href="coming-soon.html" className="nav-link__item">Coming soon</a></li>
                    <li><a href="cinema-list.html" className="nav-link__item">Cinemas</a></li>
                    <li><a href="offers.html" className="nav-link__item">Best offers</a></li>
                    <li><a href="news-left.html" className="nav-link__item">News</a></li>
                </ul>
            </div>
            <div className="col-xs-4 col-md-2 footer-nav">
                <ul className="nav-link">
                    <li><a href="#" className="nav-link__item">Terms of use</a></li>
                    <li><a href="gallery-four.html" className="nav-link__item">Gallery</a></li>
                    <li><a href="contact.html" className="nav-link__item">Contacts</a></li>
                    <li><a href="page-elements.html" className="nav-link__item">Shortcodes</a></li>
                </ul>
            </div>
            <div className="col-xs-12 col-md-6">
                <div className="footer-info">
                    <p className="heading-special--small">A.Movie<br /><span className="title-edition">in the social media</span></p>

                    <div className="social">
                        <a href="#" className="social__variant fa fa-facebook" />
                        <a href="#" className="social__variant fa fa-twitter" />
                        <a href="#" className="social__variant fa fa-vk" />
                        <a href="#" className="social__variant fa fa-instagram" />
                        <a href="#" className="social__variant fa fa-tumblr" />
                        <a href="#" className="social__variant fa fa-pinterest" />
                    </div>

                    <div className="clearfix" />
                    <p className="copy">&copy; A.Movie, 2013. All rights reserved. Done by Olia Gozha</p>
                </div>
            </div>
        </section>
    </footer>
</div>


<div className="overlay overlay-hugeinc">
    <section className="container">
        <div className="col-sm-4 col-sm-offset-4">
            <button type="button" className="overlay-close">Close</button>
            <form id="login-form" className="login" method="get" noValidate>
                <p className="login__title">sign in <br /><span className="login-edition">welcome to A.Movie</span></p>

                <div className="social social--colored">
                    <a href="#" className="social__variant fa fa-facebook" />
                    <a href="#" className="social__variant fa fa-twitter" />
                    <a href="#" className="social__variant fa fa-tumblr" />
                </div>

                <p className="login__tracker">or</p>

                <div className="field-wrap">
                    <input type="email" placeholder="Email" name="user-email" className="login__input" />
                    <input type="password" placeholder="Password" name="user-password" className="login__input" />

                    <input type="checkbox" id="informed" className="login__check styled" />
                    <label htmlFor="informed" className="login__check-info">remember me</label>
                </div>

                <div className="login__control">
                    <button type="submit" className="btn btn-md btn--warning btn--wider">sign in</button>
                    <a href="#" className="login__tracker form__tracker">Forgot password?</a>
                </div>
            </form>
        </div>
    </section>
</div>

    </>
  );
}

    

