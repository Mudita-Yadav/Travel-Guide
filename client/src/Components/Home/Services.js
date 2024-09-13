import React from 'react';
import './Services.css'; // Add this CSS file for the styles
import guideIcon from '../Images/guide.png'; // Adjust the path based on your folder structure
import trustedIcon from '../Images/trusted.png';
import experienceIcon from '../Images/experience.png';
import happyIcon from '../Images/happy.png';

const Services = () => {
  return (
    <section className="services">
      <div className="service-item">
        <img src={guideIcon} alt="Local Guides" />
        <h2>8000+ Our Local Guides</h2>
      </div>
      <div className="service-item">
        <img src={trustedIcon} alt="Trusted Tour Agency" />
        <h2>100% Trusted Tour Agency</h2>
      </div>
      <div className="service-item">
        <img src={experienceIcon} alt="Travel Experience" />
        <h2>28+ Years of Travel Experience</h2>
      </div>
      <div className="service-item">
        <img src={happyIcon} alt="Happy Travelers" />
        <h2>98% Our Travelers are Happy</h2>
      </div>
    </section>
  );
};

export default Services;
