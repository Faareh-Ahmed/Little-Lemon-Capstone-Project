import Headerrestaurant from '../images/restaurantsurrounding.jpg'
import { useState } from 'react';
// import './Reserve.css'; // import CSS styles

export default function Reserve() {
  // define state variables for form inputs and error message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && phone && date && time && guests) {
      console.log('Form submitted:', name, email, phone, date, time, guests);
      // handle form data submission to backend or external API here
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setGuests('');
      }, 2000);
    } else {
      setShowError(true); 
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };

  return (
    <div>
      <header className="reserve-table">
        <img
          className="header-reserve"
          src={Headerrestaurant}
          alt="Fries Little Lemon"
        ></img>
        <div className="reserve-header-text">
          <h1>Reserve</h1>
        </div>
      </header>
      <form onSubmit={handleSubmit} className="reserve-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />

        <label htmlFor="guests">Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />

        {showError && (
          <p className="error-message">Please fill in all form fields.</p>
        )}

        <button type="submit">Reserve Table</button>

        {showMessage && (
          <p className="message-pop-up">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
}
