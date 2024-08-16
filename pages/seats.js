import React, { useState } from 'react';

const SeatBooking = () => {
  // State to keep track of selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Example seat layout as a 2D array
  const seats = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
  ];

  // Function to handle seat selection
  //if selectedSeats has the number of the seat then remove it from that array
  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="seat-container">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat) => (
            <div
              key={seat}
              className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
              //if selectedSeats has seat number in array, then it will add selected class if not its empty
              onClick={() => toggleSeatSelection(seat)}
            >
              {seat}
            </div>
          ))}
        </div>

        //we will go iterate through an array of rows, and in each iteration we iterate through the seats in that row.

      ))}
    </div>
  );
};

export default SeatBooking;
