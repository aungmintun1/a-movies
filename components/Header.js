import React from 'react'

export default function Header() {
  return (
   <>
   
    <header class="header-wrapper header-wrapper--home">
            <div class="container">
             
                <a href='/' class="logo">
                    <img alt='logo' src="images/logo.png"/>
                </a>
                
              
                <nav id="navigation-box">
                   
                    <ul id="navigation">
                        <li>
                            <span class="sub-nav-toggle plus "></span>
                            <a href="/">Home</a>
                    
                        </li>
                        <li>
                            <span class="sub-nav-toggle plus "></span>
                            <a href="/search">Search</a>
                    
                        </li>
                        <li>
                            <span class="C plus"></span>
                            <a href="/contact">Contact</a>
                     
                        </li>
                   
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="/offers">Offers</a>
                     
                        </li>
                        <li>
                            <span class="sub-nav-toggle plus"></span>
                            <a href="/news">News</a>
                        </li>
                      
                    </ul>
                </nav>
                
               
                <div class="control-panel">
                    <div class="auth auth--home">
                      <div class="auth__show">
                      
                      </div>
                      <a href="#" class="btn btn--sign btn--singin">
                          me
                      </a>
                        <ul class="auth__function">
                            <li><a href="#" class="auth__function-item">Watchlist</a></li>
                            <li><a href="#" class="auth__function-item">Booked tickets</a></li>
                            <li><a href="#" class="auth__function-item">Discussion</a></li>
                            <li><a href="#" class="auth__function-item">Settings</a></li>
                        </ul>

                    </div>
                    <a href="/" class="btn btn-md btn--warning btn--book btn-control--home login-window">Book a ticket</a>
                </div>

            </div>
        </header>
   </>
  )
}
