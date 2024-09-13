import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Form({ closeModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });
  
  const navigate = useNavigate();  // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // On successful form submission, navigate to the Thank You page
        navigate('/thank-you');
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };
  
  return (
    <div className="form-modal">
      <div className="form-container">
        <h2>Contact Us for Your Next Adventure</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Query</label>
            <textarea
              name="query"
              className="form-control"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
