
import React from 'react';
import Link from 'next/link';

const FeatureMovies = ({ film }) => {
  return (
    <Link href={`/movie/${film.film_id}`}>
    <div class="movie-beta__item ">
       <img alt={film.film_name}  src={film.images.poster["1"].medium.film_image}/>
        <span class="best-rate">5.0</span>
        <ul class="movie-beta__info">
            <li><span class="best-voted">{film.film_name}</span></li>
            <li>
               <p class="movie__time">169 min</p>
               <p>Age Rating: {film.age_rating[0].rating}</p>
               <p>{film.age_rating[0].age_advisory}</p>
           
            </li>
            <li class="last-block">
                <a href="movie-page-left.html" class="slide__link">more</a>
            </li>
        </ul>
    </div>
   </Link>
  );
};

export default FeatureMovies;