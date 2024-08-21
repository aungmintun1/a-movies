// pages/index.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

    <>
    <div className="wrapper">
    
    <Header/>

    <div className="search-wrapper">
    
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

    <Footer/>
</div>

    </>
  );
}

    

