import React, { useState } from 'react';
import './HeroForm.css';

const HeroForm = () => {
  // State to manage input values
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  // Handle form submission (we can integrate booking API or WhatsApp submission here)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking destination: ${destination}, Date: ${date}`);
    // Add further actions such as form validation or submission here
  };

  return (
    <div className="banner-text-item">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          list="mylist" 
          placeholder="Where would you like to go?" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <datalist id="mylist">
          <option>Agra</option>
          <option>Rajasthan</option>
          <option>Sikkim</option>
          <option>Delhi</option>
          <option>West Bengal</option>
          <option>Chennai</option>
          <option>Maharashtra</option>
        </datalist>
        <input 
          type="date" 
          className="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className="book">
          Book
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
