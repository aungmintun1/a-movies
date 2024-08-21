// pages/index.js

import { useEffect, useState } from 'react';
import MovieBox from '../components/movieBox';
import HomeSlider from '../components/homeSlider';
import FeatureMovies from '@/components/FeatureMovies';
import CinemaBox from '@/components/cinemaBox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function all() {

  const [error, setError] = useState(null);

  const [films, setFilms] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://api-gate2.movieglu.com/filmsNowShowing/?n=8', {
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
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setFilms(result.films); // Store the film data
       
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

 // Function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

  return (
  <>
   <div class="wrapper">
     
   

        <Header/>

       <HomeSlider/>
       
   
        <section class="container">
            <div class="movie-best">
                 <div class="col-sm-10 col-sm-offset-1 movie-best__rating">Today Best choice</div>
                 <div class="col-sm-12 change--col">
                 {films.slice(0, 6).map((film) => (
                    <FeatureMovies key={film.film_id} film={film} />
                    ))}
                   
                 </div>
                <div class="col-sm-10 col-sm-offset-1 movie-best__check">check all movies now playing</div>
            </div>

            
            <div class="clearfix"></div>

            <h2 id='target' class="page-heading heading--outcontainer">Now in the cinema</h2>

            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-8 col-md-9">

                    {shuffleArray(films).map((film) => (
                     <CinemaBox key={film.film_id} film={film} />
                     ))}

                        <div class="row">
                            <div class="social-group">
                              <div class="col-sm-6 col-md-4 col-sm-push-6 col-md-push-4">
                                    <div class="social-group__head">Join our social groups</div>
                                    <div class="social-group__content">A lot of fun, discussions, queezes and contests among members. <br class="hidden-xs"/><br/>Always be first to know about best offers from cinemas and our partners</div>
                                </div>

                                <div class="col-sm-6 col-md-4 col-sm-pull-6 col-md-pull-4">
                                     <div class="facebook-group">

                                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNetflix&tabs=timeline&width=240px&height=330px&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=353861661473733
" width="240px" height="330px" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                                    </div>
                                </div>
                                
                        
                            </div>
                        </div>
                    </div>

                    <aside class="col-sm-4 col-md-3">
                        <div class="sitebar first-banner--left">
                            <div class="banner-wrap first-banner--left">
                                <img alt='banner' src="images/sale.jpg"/>
                            </div>

                             <div class="banner-wrap">
                                <img alt='banner' src="images/sport.jpg"/>
                            </div>

                             <div class="banner-wrap banner-wrap--last">
                                <img alt='banner' src="images/boots.jpg"/>
                            </div>

                            <div class="promo marginb-sm">
                              <div class="promo__head">A.Movie app</div>
                              <div class="promo__describe">for all smartphones<br/> and tablets</div>
                              <div class="promo__content">
                                  <ul>
                                      <li class="store-variant"><a href="#"><img alt='' src="images/apple-store.svg"/></a></li>
                                      <li class="store-variant"><a href="#"><img alt='' src="images/google-play.svg"/></a></li>
                                      <li class="store-variant"><a href="#"><img alt='' src="images/windows-store.svg"/></a></li>
                                  </ul>
                              </div>
                          </div>
    
                        </div>
                    </aside>
                </div>
            </div>

          
                
        </section>
        
      <Footer/>
        </div>
  
  </>
  );
}

    

