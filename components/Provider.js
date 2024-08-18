import React, { useContext, useState} from 'react';
import ls from 'local-storage';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function Provider({children}){
 
  const tickets = 'aung a-movies';
  ls.set('myList', tickets);

  const [selectedSeats, setSelectedSeats] = useState(['A1','A2','A3']);

    // Function to handle seat selection
  //if selectedSeats has the number of the seat then remove it from that array
  const toggleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return(
    <StateContext.Provider
    value={{
      tickets,
      selectedSeats,
      setSelectedSeats,
      toggleSeatSelection
    }}>
      {children}
    </StateContext.Provider>
  )
}