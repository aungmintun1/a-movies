// pages/index.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function singleMovie() {
  const [filmData, setFilmData] = useState(null); //film data is a single object so null
  const [cinemaShowtimes, setCinemaShowtimes] = useState([]); //cinemaShowTimes are an array so []
  const [error, setError] = useState(null);

  const { id } = router.query; 
  useEffect(() => {

    const fetchData = async () => {
    
      const currentTime = new Date().toISOString().split('T')[0];
      try {
        const response = await fetch(`https://api-gate2.movieglu.com/filmShowTimes/?n=3&film_id=${id}&date=${currentTime}`, {
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
        setFilmData(result.film); // Store the film data
        setCinemaShowtimes(result.cinemas || []); // Store the cinemas array
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!filmData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Film Showtimes</h1>
      
      {/* Display Film Information */}
      <h2>{filmData.film_name}</h2>
      <img src={filmData.images.poster[1].medium.film_image} alt={filmData.film_name} />
      
      {/* Display Cinema Showtimes */}
      {cinemaShowtimes.map((cinema, index) => (
        <div key={index}>
          <h3>{cinema.cinema_name}</h3>
          {cinema.showings.Standard.times.map((time, timeIndex) => (
            <p key={timeIndex}>{time.start_time}</p>
          ))}

        </div>
      ))}

    </div>
  );
}

    

