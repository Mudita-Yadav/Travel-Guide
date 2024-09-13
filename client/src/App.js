import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import FormModal from './Components/Form';
import HeroForm from './Components/HeroForm';
import Services from './Components/Home/Services';
import Packages from './Components/Main/Package'; 
import Main from './Components/Main/Main';
import ThankYouPage from './Components/Main/Thankyou'; // Import the Thank You page
import mountainVideo from './Components/Images/sea-2.mp4';

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <header className="hero-section">
                  <video className="background-video" autoPlay muted loop>
                    <source src={mountainVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="overlay">
                    <h1>Explore the Beauty of the World</h1>
                    <p>Discover stunning destinations and unique experiences</p>
                    <button className="btn btn-warning" onClick={toggleForm}>
                      Contact
                    </button>
                  </div>
                </header>
                <HeroForm />
                {/* Form Modal */}
                {showForm && <FormModal closeModal={toggleForm} />}

                {/* Additional Sections */}
                <section className="about-section">
                  <div className="container text-center">
                    <h2>Discover the Wonders of Travel</h2>
                    <p>Our platform helps you plan your dream vacation with ease, offering the best deals and experiences across the globe.</p>
                  </div>
                  <Services />
                   {/* Packages Section */}
      <Packages />
                  <Main />
                </section>
              </>
            }
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
