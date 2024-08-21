import React, { useEffect } from 'react';
import { useStateContext } from "../components/Provider";
import Link from 'next/link';
import ls from 'local-storage';

import SeatSelector from '@/components/SeatSelector';

const SeatBooking = () => {
  const {setSelectedSeats} = useStateContext();

  useEffect(() => {
  // Set the selected seats to an empty array when the component mounts
  ls.set('selectedSeats', []);
  setSelectedSeats([]);
}, []); 



  return (
<>
<div class="wrapper place-wrapper">
      
        <div class="banner-top">
            <img alt='top banner' src="images/banners/bra.jpg"/>
        </div>

       
        <header class="header-wrapper">
            <div class="container">
             
                <a href='index.html' class="logo">
                    <img alt='logo' src="images/logo.png"/>
                </a>
                
              
                <nav id="navigation-box">
                
                    <a href="#" id="navigation-toggle">
                        <span class="menu-icon">
                            <span class="icon-toggle" role="button" aria-label="Toggle Navigation">
                              <span class="lines"></span>
                            </span>
                        </span>
                    </a>
                    
                 
                    <ul id="navigation">
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="#">Pages</a>
                            <ul>
                                <li class="menu__nav-item"><a href="movie-page-left.html">Single movie (rigth sidebar)</a></li>
                                <li class="menu__nav-item"><a href="movie-page-right.html">Single movie (left sidebar)</a></li>
                                <li class="menu__nav-item"><a href="movie-page-full.html">Single movie (full widht)</a></li>
                                <li class="menu__nav-item"><a href="movie-list-left.html">Movies list (rigth sidebar)</a></li>
                                <li class="menu__nav-item"><a href="movie-list-right.html">Movies list (left sidebar)</a></li>
                                <li class="menu__nav-item"><a href="movie-list-full.html">Movies list (full widht)</a></li>
                                <li class="menu__nav-item"><a href="single-cinema.html">Single cinema</a></li>
                                <li class="menu__nav-item"><a href="cinema-list.html">Cinemas list</a></li>
                                <li class="menu__nav-item"><a href="trailer.html">Trailers</a></li>
                                <li class="menu__nav-item"><a href="rates-left.html">Rates (rigth sidebar)</a></li>
                                <li class="menu__nav-item"><a href="rates-right.html">Rates (left sidebar)</a></li>
                                <li class="menu__nav-item"><a href="rates-full.html">Rates (full widht)</a></li>
                                <li class="menu__nav-item"><a href="offers.html">Offers</a></li>
                                <li class="menu__nav-item"><a href="contact.html">Contact us</a></li>
                                <li class="menu__nav-item"><a href="404.html">404 error</a></li>
                                <li class="menu__nav-item"><a href="coming-soon.html">Coming soon</a></li>
                                <li class="menu__nav-item"><a href="login.html">Login/Registration</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="page-elements.html">Features</a>
                            <ul>
                                <li class="menu__nav-item"><a href="typography.html">Typography</a></li>
                                <li class="menu__nav-item"><a href="page-elements.html">Shortcodes</a></li>
                                <li class="menu__nav-item"><a href="column.html">Columns</a></li>
                                <li class="menu__nav-item"><a href="icon-font.html">Icons</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="page-elements.html">Booking steps</a>
                            <ul>
                                <li class="menu__nav-item"><a href="book1.html">Booking step 1</a></li>
                                <li class="menu__nav-item"><a href="book2.html">Booking step 2</a></li>
                                <li class="menu__nav-item"><a href="book3-buy.html">Booking step 3 (buy)</a></li>
                                <li class="menu__nav-item"><a href="book3-reserve.html">Booking step 3 (reserve)</a></li>
                                <li class="menu__nav-item"><a href="book-final.html">Final ticket view</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="gallery-four.html">Gallery</a>
                            <ul>
                                <li class="menu__nav-item"><a href="gallery-four.html">4 col gallery</a></li>
                                <li class="menu__nav-item"><a href="gallery-three.html">3 col gallery</a></li>
                                <li class="menu__nav-item"><a href="gallery-two.html">2 col gallery</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="news-left.html">News</a>
                            <ul>
                                <li class="menu__nav-item"><a href="news-left.html">News (rigth sidebar)</a></li>
                                <li class="menu__nav-item"><a href="news-right.html">News (left sidebar)</a></li>
                                <li class="menu__nav-item"><a href="news-full.html">News (full widht)</a></li>
                                <li class="menu__nav-item"><a href="single-page-left.html">Single post (rigth sidebar)</a></li>
                                <li class="menu__nav-item"><a href="single-page-right.html">Single post (left sidebar)</a></li>
                                <li class="menu__nav-item"><a href="single-page-full.html">Single post (full widht)</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="#">Mega menu</a>
                               <ul class="mega-menu container">
                                    <li class="col-md-3 mega-menu__coloum">
                                        <h4 class="mega-menu__heading">Now in the cinema</h4>
                                         <ul class="mega-menu__list">
                                            <li class="mega-menu__nav-item"><a href="#">The Counselor</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Bad Grandpa</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Blue Is the Warmest Color</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Capital</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Spinning Plates</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Bastards</a></li>
                                          </ul>
                                      </li>
                                        
                                      <li class="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                                          <ul class="mega-menu__list">
                                            <li class="mega-menu__nav-item"><a href="#">Gravity</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Captain Phillips</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Carrie</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Cloudy with a Chance of Meatballs 2</a></li>
                                          </ul>
                                      </li>
                                      
                                      <li class="col-md-3 mega-menu__coloum">
                                        <h4 class="mega-menu__heading">Ending soon</h4>
                                          <ul class="mega-menu__list">
                                            <li class="mega-menu__nav-item"><a href="#">Escape Plan</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Rush</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Prisoners</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Enough Said</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">The Fifth Estate</a></li>
                                            <li class="mega-menu__nav-item"><a href="#">Runner Runner</a></li>
                                          </ul>
                                      </li>
                                    
                                      <li class="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                                          <ul class="mega-menu__list">
                                            <li class="mega-menu__nav-item"><a href="#">Insidious: Chapter 2</a></li>
                                          </ul>
                                      </li>
                               </ul>
                        </li>
                    </ul>
                </nav>
                
              
                <div class="control-panel">
                    <a href="#" class="btn btn--sign login-window">Sign in</a>
                    <a href="#" class="btn btn-md btn--warning btn--book login-window">Book a ticket</a>
                </div>

            </div>
        </header>
        
  
        <div class="search-wrapper">
            <div class="container container--add">
                <form id='search-form' method='get' class="search">
                    <input type="text" class="search__field" placeholder="Search"/>
                    <select name="sorting_item" id="search-sort" class="search__sort" tabindex="0">
                        <option value="1" selected='selected'>By title</option>
                        <option value="2">By year</option>
                        <option value="3">By producer</option>
                        <option value="4">By title</option>
                        <option value="5">By year</option>
                    </select>
                    <button type='submit' class="btn btn-md btn--danger search__button">search a movie</button>
                </form>
            </div>
        </div>
   
   <div class="place-form-area">
   <section class="container"> 
            <div class="order-container">
                <div class="order">
                    <img class="order__images" alt='' src="images/tickets.png"/>
                    <p class="order__title">Book a ticket <br/><span class="order__descript">and have fun movie time</span></p>
                    <div class="order__control">
                        <a href="#" class="order__control-btn active">Purchase</a>
                        <a href="#" class="order__control-btn">Reserve</a>
                    </div>
                </div>
            </div>
                <div class="order-step-area">
                    <div class="order-step first--step order-step--disable ">1. What &amp; Where &amp; When</div>
                    <div class="order-step second--step">2. Choose a sit</div>
                </div>
            
            <div class="choose-sits">
                <div class="choose-sits__info choose-sits__info--first">
                    <ul>
                        <li class="sits-price marker--none"><strong>Price</strong></li>
                        <li class="sits-price sits-price--cheap">$10</li>
                        <li class="sits-price sits-price--middle">$20</li>
                        <li class="sits-price sits-price--expensive">$30</li>
                    </ul>
                </div>

                <div class="choose-sits__info">
                    <ul>
                        <li class="sits-state sits-state--not">Not available</li>
                        <li class="sits-state sits-state--your">Your choice</li>
                    </ul>
                </div>
                
                <div class="col-sm-12 col-lg-10 col-lg-offset-1">
                <div class="sits-area hidden-xs">
                    <div class="sits-anchor">screen</div>

                    <div class="sits">
                        <aside class="sits__line">
                            <span class="sits__indecator">A</span>
                            <span class="sits__indecator">B</span>
                            <span class="sits__indecator">C</span>
                            <span class="sits__indecator">D</span>
                            <span class="sits__indecator">E</span>
                            <span class="sits__indecator">F</span>
                            <span class="sits__indecator">G</span>
                            <span class="sits__indecator">I</span>
                            <span class="sits__indecator additional-margin">J</span>
                            <span class="sits__indecator">K</span>
                            <span class="sits__indecator">L</span>
                        </aside>

                      {/* row start */}
                       <SeatSelector/>
                       {/* row end */}

                        <aside class="sits__checked">
                            <div class="checked-place">
                                
                            </div>
                            <div class="checked-result">
                                $0
                            </div>
                        </aside>
                        <footer class="sits__number">
                            <span class="sits__indecator">1</span>
                            <span class="sits__indecator">2</span>
                            <span class="sits__indecator">3</span>
                            <span class="sits__indecator">4</span>
                            <span class="sits__indecator">5</span>
                            <span class="sits__indecator">6</span>
                            <span class="sits__indecator">7</span>
                            <span class="sits__indecator">8</span>
                            <span class="sits__indecator">9</span>
                            <span class="sits__indecator">10</span>
                            <span class="sits__indecator">11</span>
                            <span class="sits__indecator">12</span>
                            <span class="sits__indecator">13</span>
                            <span class="sits__indecator">14</span>
                            <span class="sits__indecator">15</span>
                            <span class="sits__indecator">16</span>
                            <span class="sits__indecator">17</span>
                            <span class="sits__indecator">18</span>
                        </footer>
                    </div>
                </div>
            </div>
                
            <div class="col-sm-12 visible-xs"> 
                <div class="sits-area--mobile">
                    <div class="sits-area--mobile-wrap">
                        <div class="sits-select">
                            <select name="sorting_item" class="sits__sort sit-row" tabindex="0">
                                    <option value="1" selected='selected'>A</option>
                                    <option value="2">B</option>
                                    <option value="3">C</option>
                                    <option value="4">D</option>
                                    <option value="5">E</option>
                                    <option value="6">F</option>
                                    <option value="7">G</option>
                                    <option value="8">I</option>
                                    <option value="9">J</option>
                                    <option value="10">K</option>
                                    <option value="11">L</option>
                            </select>
 
                            <select name="sorting_item" class="sits__sort sit-number" tabindex="1">
                                    <option value="1" selected='selected'>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                            </select>

                            <a href="#" class="btn btn-md btn--warning toogle-sits">Choose sit</a>
                        </div>
                    </div>

                    <a href="#" class="watchlist add-sits-line">Add new sit</a>

                    <aside class="sits__checked">
                            <div class="checked-place">
                                <span class="choosen-place"></span>
                            </div>
                            <div class="checked-result">
                                $0
                            </div>
                    </aside>

                    <img alt="" src="images/components/sits_mobile.png"/>
                </div>
              </div>   
             </div>
       
   </section>
  </div>
        
        

        <div class="clearfix"></div>
        <form id='film-and-time' class="booking-form" method='get' action='book3-buy.html'>

            <input type='text' name='choosen-number' class="choosen-number"/>
            <input type='text' name='choosen-number--cheap' class="choosen-number--cheap"/>
            <input type='text' name='choosen-number--middle' class="choosen-number--middle"/>
            <input type='text' name='choosen-number--expansive' class="choosen-number--expansive"/>
            <input type='text' name='choosen-cost' class="choosen-cost"/>
            <input type='text' name='choosen-sits' class="choosen-sits"/>


            <div class="booking-pagination booking-pagination--margin">
                    <a href="/allMovies" class="booking-pagination__prev">
                        <span class="arrow__text arrow--prev">prev step</span>
                        <span class="arrow__info">what&amp;where&amp;when</span>
                    </a>
                    <a href="/ticketSelection" class="booking-pagination__next">
                        <span class="arrow__text arrow--next">next step</span>
                        <span class="arrow__info">checkout</span>
                    </a>
            </div>
        </form>
        
        <div class="clearfix"></div>

        <footer class="footer-wrapper">
            <section class="container">
                <div class="col-xs-4 col-md-2 footer-nav">
                    <ul class="nav-link">
                        <li><a href="#" class="nav-link__item">Cities</a></li>
                        <li><a href="movie-list-left.html" class="nav-link__item">Movies</a></li>
                        <li><a href="trailer.html" class="nav-link__item">Trailers</a></li>
                        <li><a href="rates-left.html" class="nav-link__item">Rates</a></li>
                    </ul>
                </div>
                <div class="col-xs-4 col-md-2 footer-nav">
                    <ul class="nav-link">
                        <li><a href="coming-soon.html" class="nav-link__item">Coming soon</a></li>
                        <li><a href="cinema-list.html" class="nav-link__item">Cinemas</a></li>
                        <li><a href="offers.html" class="nav-link__item">Best offers</a></li>
                        <li><a href="news-left.html" class="nav-link__item">News</a></li>
                    </ul>
                </div>
                <div class="col-xs-4 col-md-2 footer-nav">
                    <ul class="nav-link">
                        <li><a href="#" class="nav-link__item">Terms of use</a></li>
                        <li><a href="gallery-four.html" class="nav-link__item">Gallery</a></li>
                        <li><a href="contact.html" class="nav-link__item">Contacts</a></li>
                        <li><a href="page-elements.html" class="nav-link__item">Shortcodes</a></li>
                    </ul>
                </div>
                <div class="col-xs-12 col-md-6">
                    <div class="footer-info">
                        <p class="heading-special--small">A.Movie<br/><span class="title-edition">in the social media</span></p>

                        <div class="social">
                            <a href='#' class="social__variant fa fa-facebook"></a>
                            <a href='#' class="social__variant fa fa-twitter"></a>
                            <a href='#' class="social__variant fa fa-vk"></a>
                            <a href='#' class="social__variant fa fa-instagram"></a>
                            <a href='#' class="social__variant fa fa-tumblr"></a>
                            <a href='#' class="social__variant fa fa-pinterest"></a>
                        </div>
                        
                        <div class="clearfix"></div>
                        <p class="copy">&copy; A.Movie, 2013. All rights reserved. Done by Olia Gozha</p>
                    </div>
                </div>
            </section>
        </footer>
    </div>

  
        <div class="overlay overlay-hugeinc">
            
            <section class="container">

                <div class="col-sm-4 col-sm-offset-4">
                    <button type="button" class="overlay-close">Close</button>
                    <form id="login-form" class="login" method='get' novalidate=''>
                        <p class="login__title">sign in <br/><span class="login-edition">welcome to A.Movie</span></p>

                        <div class="social social--colored">
                                <a href='#' class="social__variant fa fa-facebook"></a>
                                <a href='#' class="social__variant fa fa-twitter"></a>
                                <a href='#' class="social__variant fa fa-tumblr"></a>
                        </div>

                        <p class="login__tracker">or</p>
                        
                        <div class="field-wrap">
                        <input type='email' placeholder='Email' name='user-email' class="login__input"/>
                        <input type='password' placeholder='Password' name='user-password' class="login__input"/>

                        <input type='checkbox' id='#informed' class='login__check styled'/>
                        <label for='#informed' class='login__check-info'>remember me</label>
                         </div>
                        
                        <div class="login__control">
                            <button type='submit' class="btn btn-md btn--warning btn--wider">sign in</button>
                            <a href="#" class="login__tracker form__tracker">Forgot password?</a>
                        </div>
                    </form>
                </div>

            </section>
</div>


</>
  );
};

export default SeatBooking;
