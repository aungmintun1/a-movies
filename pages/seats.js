import React, { useEffect } from 'react';
import { useStateContext } from "../components/Provider";
import Link from 'next/link';
import ls from 'local-storage';

import SeatSelector from '@/components/SeatSelector';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
     
     <Header/>
  
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
        
      <Footer/>
</div>


</>
  );
};

export default SeatBooking;
