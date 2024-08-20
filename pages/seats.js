import React, { useState } from 'react';
import { useStateContext } from "../components/Provider";
import Link from 'next/link';
import ls from 'local-storage';
import '../public/css/global.css';

const SeatBooking = () => {

  const { selectedSeats, toggleSeatSelection, totalSelectedSeats } = useStateContext();
  // State to keep track of selected seats


  // Example seat layout as a 2D array
  const seats = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
  ];



  return (
    <>
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
    
    <div className='seat-info-container'>
    <div className='selected-seats-container'>
    {selectedSeats.map((selection) =>(
        <h3>{selection}</h3>
    ))}
    </div>
    <p>total seats: {totalSelectedSeats}</p>
    <Link href={`/ticketSelection`}>
    <button className='seats-button'>Book Seats</button>
    </Link>
    </div>


    </>
  );
};

export default SeatBooking;
