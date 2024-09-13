import React from 'react';
import './Package.css';
import luxuryVideo from '../Images/luxury.mp4';
import adventureVideo from '../Images/adventure.mp4';
import familyVideo from '../Images/family.mp4';

const Package = () => {
  return (
    <section className="packages py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Special Packages</h2>
        <div className="row">
          {/* Package Item */}
          <div className="col-md-4 mb-4">
            <div className="card package-card">
              <video className="card-video" autoPlay muted loop>
                <source src={luxuryVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">Luxury Getaway</h5>
                <p className="card-text">Indulge in a luxury getaway with premium accommodations and exclusive experiences. Perfect for a occasion.</p>
                <a href="#" className="btn btn-primary">Explore Package</a>
              </div>
            </div>
          </div>
          {/* Package Item */}
          <div className="col-md-4 mb-4">
            <div className="card package-card">
              <video className="card-video" autoPlay muted loop>
                <source src={adventureVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">Adventure Package</h5>
                <p className="card-text">Experience the thrill of adventure with activities such as hiking, rafting, and zip-lining. Ideal for thrill-seekers and outdoor.</p>
                <a href="#" className="btn btn-primary">Explore Package</a>
              </div>
            </div>
          </div>
          {/* Package Item */}
          <div className="col-md-4 mb-4">
            <div className="card package-card">
              <video className="card-video" autoPlay muted loop>
                <source src={familyVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body">
                <h5 className="card-title">Family Fun</h5>
                <p className="card-text">Enjoy quality time with your family in a fun-filled package that includes activities for all ages. Create memories that last a lifetime.</p>
                <a href="#" className="btn btn-primary">Explore Package</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
