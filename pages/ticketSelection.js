import { useStateContext } from "../components/Provider";
import {useState, useEffect} from 'react';
import '../public/css/global.css';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StripeCheckoutBtn from "@/components/StripeCheckoutBtn";

export default function TicketSelection() {

    const {selectedSeats,totalSelectedSeats} = useStateContext();
    const [cartItems, setCartItems] = useState([{title:'Adult',quantity:totalSelectedSeats,price:23.00},]);
    const [inputtedSeats,setInputtedSeats] = useState(totalSelectedSeats);
      

      const addTicket = (title,amount) => {

      if(inputtedSeats<totalSelectedSeats){
        let ticket = cartItems.find((item) => item.title === title);
        if (ticket) {
          setCartItems(cartItems.map(item => item.title === ticket.title ? { ...item, quantity: item.quantity + 1 } : item));
          setInputtedSeats(inputtedSeats+1);
        } else {
          setCartItems([...cartItems, { title: title, quantity: 1, price: amount}]);
          setInputtedSeats(inputtedSeats+1);
        }
      }
      };
      
  
      const removeTicket = (name) => {
        let ticket = cartItems.find((item) => item.title === name);

      if(ticket){
        if (ticket.quantity > 1) {
          setCartItems(cartItems.map(item =>
            item.title === ticket.title ? { ...item, quantity: item.quantity - 1 } : item
          ));
          setInputtedSeats(inputtedSeats-1);
        } else {
          let removeList = cartItems.filter((item) => ticket.title != item.title)
          setCartItems(removeList);
          setInputtedSeats(inputtedSeats-1);
        }
      }
      };

      const ticketAmount = (name) =>{

        let ticket = cartItems.find((item) => item.title === name);
        let number = ticket ? ticket.quantity : 0;
        return number;
      }

      // if inputted seats is = to totalseats do nothing, if inputtedSeats is < totalSeats then perform function
      
  
  return (
 <>
 <div class="wrapper">
   <Header/>
      <section className="ticket-review">
        <div>
        <h1 className="title">Ticket Selection</h1>
     
        <p className="seats">Selected Seats: 
          {selectedSeats.map((selection, index) => (
            <span key={index}> {selection}{index < selectedSeats.length - 1 ? ', ' : ''}</span>
          ))}
       </p>

       </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Adult $23.00</h3>
            <p>$21.00 + $2.00 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button onClick={()=> removeTicket('Adult')} className="quantity-btn">-</button>
            <span className="quantity">{ticketAmount('Adult')}</span>
            <button className="quantity-btn" onClick={()=>addTicket('Adult',23)}>+</button>
          </div>
        </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Senior $21.00</h3>
            <p>$19.00 + $2.00 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button onClick={()=> removeTicket('Senior')} className="quantity-btn">-</button>
            <span className="quantity">{ticketAmount('Senior')}</span>
            <button className="quantity-btn" onClick={()=>addTicket('Senior',21)}>+</button>
          </div>
        </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Child $20.00</h3>
            <p>$18.00 + $2.00 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button onClick={()=> removeTicket('Child')} className="quantity-btn">-</button>
            <span className="quantity">{ticketAmount('Child')}</span>
            <button className="quantity-btn" onClick={()=>addTicket('Child',20)}>+</button>
          </div>
        </div>


        <StripeCheckoutBtn cartItems={cartItems}/>
        <p className="fee-note">
          *Fee is the Convenience Fee per ticket. Prices and fees include estimated tax, if any.
        </p>

      </section>

   <Footer/>
    </div>
      </>
  );
}
