// pages/index.js

import { useEffect, useState } from 'react';

import MovieBox from '../components/movieBox';

export default function allMovies() {

  const [error, setError] = useState(null);

  const [films, setFilms] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://api-gate2.movieglu.com/filmsNowShowing/?n=10', {
          method: 'GET',
          headers: {
            'Authorization': 'Basic QVVOR19YWDpMZ0huYkZrUkp0ck8=',
            'client': 'AUNG',
            'x-api-key': 'W7aTs2Q4a54LOgfOBxVnI4eFdPEkFtFv8180TGor',
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

  if (error) {
    return <p>Error: {error.message}</p>;
  }

//   if (!filmData) {
//     return <p>Loading...</p>;
//   }

  return (
    <div>
      <h1>All Films</h1>
            
      <div className="movies-container"> 

      {films.map((film) => (
        // <div className="movie-box"> 
        // <img src={film.images.poster["1"].medium.film_image} alt={film.film_name} />

        // <h3 className='film-name'>{film.film_name}</h3>
        // </div>
        <MovieBox key={index} film={film} />
       ))}

      </div>

    </div>
  );
}

    

