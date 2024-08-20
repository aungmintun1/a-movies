import { useStateContext } from "../components/Provider";
import {useState, useEffect} from 'react';
export default function TicketSelection() {

    const { selectedSeats,totalSelectedSeats} = useStateContext();
    const [adultTickets,setAdultTickets] = useState(totalSelectedSeats);
    const [seniorTickets,setSeniorTickets] = useState(0);
    const [childTickets,setChildTickets] = useState(0);

    const inputtedSeats = adultTickets + seniorTickets + childTickets;
    const seatLimit = totalSelectedSeats;

  return (
 <>
      <section className="ticket-review">
        <div>
        <h1 className="title">Ticket Selection</h1>
        <h2 className="review-title">Review Your Tickets</h2>
        <p className="seats">Selected Seats: 
          {selectedSeats.map((selection, index) => (
            <span key={index}>{selection}{index < selectedSeats.length - 1 ? ', ' : ''}</span>
          ))}
       </p>
       
{/* 
       <span> inputted Seats: {inputtedSeats}</span>
       <span> Seat Limit: {seatLimit}</span> */}
       </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Adult $23.68</h3>
            <p>$21.49 + $2.19 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button onClick={()=> adultTickets > 0 ? setAdultTickets(adultTickets-1) : null} className="quantity-btn">-</button>
            <span className="quantity">{adultTickets}</span>
            <button className="quantity-btn" onClick={()=> inputtedSeats < seatLimit ? setAdultTickets(adultTickets+1) : null}>+</button>
          </div>
        </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Senior $21.68</h3>
            <p>$19.49 + $2.19 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button onClick={()=> seniorTickets > 0 ? setSeniorTickets(seniorTickets-1) : null} className="quantity-btn">-</button>
            <span className="quantity">{seniorTickets}</span>
            <button className="quantity-btn" onClick={()=>  inputtedSeats < seatLimit ? setSeniorTickets(seniorTickets+1) : null}>+</button>
          </div>
        </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Child $20.68</h3>
            <p>$18.49 + $2.19 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button onClick={()=> childTickets > 0 ? setChildTickets(childTickets-1) : null} className="quantity-btn">-</button>
            <span className="quantity">{childTickets}</span>
            <button className="quantity-btn" onClick={()=>  inputtedSeats < seatLimit ? setChildTickets(childTickets+1) : null}>+</button>
          </div>
        </div>
        <button className="next-btn">Next</button>
        <p className="fee-note">
          *Fee is the Convenience Fee per ticket. Prices and fees include estimated tax, if any.
        </p>

      </section>

   
      </>
  );
}
