import React from 'react';
import { useStateContext } from "../components/Provider";

const SeatSelector = () => {

    const { selectedSeats, toggleSeatSelection } = useStateContext();

    const seats = [
      ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17'],
      ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18'],
      ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18'],
      ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18'],
      ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18'],
      ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18'],
      ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G16', 'G17', 'G18'],
      ['I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', 'I11', 'I12', 'I13','I14','I15', 'I16'],
      ['J5', 'J6', 'J7', 'J8', 'J9', 'J10', 'J11', 'J12', 'J13', 'J14'],
      ['K5', 'K6', 'K7', 'K8', 'K9', 'K10', 'K11', 'K12', 'K13', 'K14'],
      ['L6', 'L7', 'L8', 'L9', 'L10', 'L11', 'L12', 'L13']
    ];
    
  
  return (
<>

{seats.map((row, rowIndex) => (
<div class="sits__row">
    
{row.map((seat, seatIndex) => {
      // Determine the seat color based on the row index
      let seatColorClass = '';
      if (rowIndex <= 3) {
        seatColorClass = 'sits-price--cheap'; // A to D (Yellow)
      } else if (rowIndex <= 7) {
        seatColorClass = 'sits-price--middle'; // E to I (Red)
      } else {
        seatColorClass = 'sits-price--expensive'; // J to L (Purple)
      }

      return (
        <span 
          key={seatIndex} 
          className={`sits__place ${seatColorClass} ${selectedSeats.includes(seat) ? 'sits-state--your' : ''}`}
          onClick={() => toggleSeatSelection(seat)} 
          data-place={seat} 
          data-price="10"
        >
          {seat}
        </span>
      );
    })}

   
</div>
  ))}
</>
  );
};

export default SeatSelector;