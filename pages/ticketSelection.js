import { useStateContext } from "../components/Provider";

export default function TicketSelection() {

    const { selectedSeats } = useStateContext();

  return (
    <div className="container">
      
      <header>
        <h1 className="title">Ticket Selection</h1>
      </header>

      <section className="ticket-review">
        <h2>Review Your Tickets</h2>
        <p className="seats">
  {selectedSeats.map((selection, index) => (
    <span key={index}>{selection}{index < selectedSeats.length - 1 ? ', ' : ''}</span>
  ))}
</p>


        <div className="ticket">
          <div className="ticket-info">
            <h3>Adult $23.68</h3>
            <p>$21.49 + $2.19 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">3</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Senior $21.68</h3>
            <p>$19.49 + $2.19 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">0</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>

        <div className="ticket">
          <div className="ticket-info">
            <h3>Child $20.68</h3>
            <p>$18.49 + $2.19 Fee*</p>
          </div>
          <div className="ticket-quantity">
            <button className="quantity-btn">-</button>
            <span className="quantity">0</span>
            <button className="quantity-btn">+</button>
          </div>
        </div>

        <p className="fee-note">
          *Fee is the Convenience Fee per ticket. Prices and fees include estimated tax, if any.
        </p>
      </section>

      <div className="footer">
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}
