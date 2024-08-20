import React from 'react';
import Link from 'next/link';

const CinemaBox = ({ film }) => {
  return (
    <Link href={`/movie/${film.film_id}`}>

    <div class="movie movie--test movie--test--dark movie--test--left">
       <div class="movie__images">
           <a href="movie-page-left.html" class="movie-beta__link">
               <img alt={film.film_name}src={film.images.poster["1"].medium.film_image}/>
           </a>
       </div>
       <div class="movie__info">
           <a href='movie-page-left.html' class="movie__title">{film.film_name}</a>
           <p class="movie__time">91 min</p>
           <p class="movie__option"><a href="#">Sci-Fi</a> | <a href="#">Thriller</a> | <a href="#">Drama</a></p>
           <p class="cinema-description">{film.synopsis_long.split(" ").slice(0, 16).join(" ")}...</p>

     
            <div class="rating-container"> 
           <div class="cinema__rating ">4.1</div>  
           </div>               
        </div>
       
       </div>
   </Link>
  );
};

export default CinemaBox;