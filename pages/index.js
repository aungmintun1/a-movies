// pages/index.js

import { useEffect, useState } from 'react';
import MovieBox from '../components/movieBox';

export default function allMovies() {



  const [error, setError] = useState(null);

  const [films, setFilms] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://api-gate2.movieglu.com/filmsNowShowing/?n=7', {
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

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>All Films</h1>
      
      <div className="movies-container"> 

      {films.map((film) => (
        <MovieBox film={film} />
       ))}

      </div>

    </div>
  );
}

    

