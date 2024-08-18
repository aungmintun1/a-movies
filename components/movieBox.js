import React from 'react';
import Link from 'next/link';

const MovieBox = ({ film }) => {
  return (
    <Link href={`/movie/${film.film_id}`}>
    <div className="movie-box">
       <img 
        src={film.images.poster["1"].medium.film_image} 
        alt={film.film_name} 
      />
      <h3 className='film-name'>{film.film_name}</h3>
    </div>
   </Link>
  );
};

export default MovieBox;