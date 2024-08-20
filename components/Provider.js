import React, { useContext, useState, useEffect} from 'react';
import ls from 'local-storage';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function Provider({children}){
 
  const tickets = 'aung a-movies';
  ls.set('myList', tickets);

  // Initialize selectedSeats from local storage, or default to an empty array
  const [selectedSeats, setSelectedSeats] = useState(ls.get('selectedSeats') || []);
  const totalSelectedSeats = selectedSeats.length;

  // Effect to keep local storage updated whenever selectedSeats changes
  useEffect(() => {
    ls.set('selectedSeats', selectedSeats);
  }, [selectedSeats]);

  // Function to handle seat selection
  const toggleSeatSelection = (seat) => {
    let updatedSeats;
    if (selectedSeats.includes(seat)) {
      updatedSeats = selectedSeats.filter((s) => s !== seat);
    } else {
      updatedSeats = [...selectedSeats, seat];
    }
    setSelectedSeats(updatedSeats);
    ls.set('selectedSeats', updatedSeats); // Update local storage immediately
  };

  return(
    <StateContext.Provider
    value={{
      tickets,
      selectedSeats,
      setSelectedSeats,
      toggleSeatSelection,
      totalSelectedSeats
    }}>
      {children}
    </StateContext.Provider>
  )
}