import React from 'react';
import './Thankyou.css';  // Optional CSS for styling
import ThankYou from '../Images/thanks-1.avif';

const Thankyou = () => {
  return (
    <div className="thank-you-container">
           
        <img src={ThankYou} alt="Local Guides" />
      <h1>Thank You for Contacting Us!</h1>
      <p>We will get back to you shortly.</p>
    </div>
  );
};

export default Thankyou;
