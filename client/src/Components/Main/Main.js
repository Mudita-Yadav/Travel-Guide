import React from 'react';
import './main.css'; // Import the custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { Carousel } from 'react-responsive-carousel'; // Import the carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

// Import the images from the src/Components/images folder
import pic10 from '../Images/pic-10.jpg';
import img4 from '../Images/img4.jpg';
import pic3 from '../Images/pic3.jpg';
import bengal from '../Images/bengal.jpg';
import hampi from '../Images/hampi.jpg';
import neemrana from '../Images/Neemrana.webp';
import aboutVideo from '../Images/about.mp4';

// Customer images
import customer1 from '../Images/customer-1.jpg';
import customer2 from '../Images/customer-4.jpg';
import customer3 from '../Images/customer-3.jpg';

const Main = () => {
  const placesData = [
    {
      image: pic10,
      title: 'Taj Mahal',
      cost: '$1870 / Per Person',
      time: '2 Days',
      location: 'Agra, India',
    },
    {
      image: img4,
      title: 'Shankaracharya Hill',
      cost: '$1870 / Per Person',
      time: '3 Days',
      location: 'Kashmir, India',
    },
    {
      image: pic3,
      title: 'Backwaters',
      cost: '$1870 / Per Person',
      time: '3 Days',
      location: 'Kerala, South India',
    },
    {
      image: bengal,
      title: 'National Park',
      cost: '$1870 / Per Person',
      time: '3 Days',
      location: 'Madhya Pradesh, India',
    },
    {
      image: hampi,
      title: 'Hampi',
      cost: '$1870 / Per Person',
      time: '2 Days',
      location: 'Karnataka, India',
    },
    {
      image: neemrana,
      title: 'Neemrana Fort',
      cost: '$1870 / Per Person',
      time: '3 Days',
      location: 'Rajasthan, India',
    },
  ];

  const reviews = [
    {
      name: 'Nora',
      review:
        'Amazing service! The team at Tourism Travels made my vacation one of the best experiences I’ve ever had.',
      rating: 5,
      image: customer1, // Customer image
    },
    {
      name: 'Justin',
      review:
        'They helped me with everything from flights to accommodations. Highly recommend!',
      rating: 4,
      image: customer2, // Customer image
    },
    {
      name: 'Michael ',
      review:
        'I was so impressed with their local insights and personalized itineraries.',
      rating: 5,
      image: customer3, // Customer image
    },
  ];

  return (
    <div>
      {/* Places Section */}
      <section className="places">
        <div className="places-text text-center">
          <small>FEATURED TOURS PACKAGES</small>
          <h2>Favourite Places</h2>
        </div>

        <div className="container">
          <div className="row">
            {placesData.map((place, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="card">
                  <div className="zoom-img">
                    <div className="img-card">
                      <img src={place.image} alt={place.title} className="img-fluid" />
                    </div>
                  </div>
                  <div className="text">
                    <span className="rating">⭐⭐⭐⭐⭐</span>
                    <h2>{place.title}</h2>
                    <p className="cost">{place.cost}</p>
                    <div className="card-box">
                      <p className="time">🕓 {place.time}</p>
                      <p className="location">✈ {place.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Video Section */}
      <header className="book-section">
        <div className="overlay">
          <h1>Book Your Destination Now</h1>
          <p>Special offers are running</p>
          <button className="btn btn-warning">Book Now</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id='#about'>
        <div className="about-img">
          <video className="video-background" autoPlay muted loop>
            <source src={aboutVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="about-text">
          <small>ABOUT OUR COMPANY</small>
          <h2>We are Tourism Travels Support Company</h2>
          <p>
            At Tourism, we believe that travel is more than just a journey—it's an
            opportunity to explore new cultures, create unforgettable memories, and
            discover the world from a fresh perspective. Our mission is to make your
            travel dreams come true by providing you with the best resources, insights,
            and personalized services.
          </p>
          <div className="checkbox-group">
            <label><input type="checkbox" checked readOnly /> Personalized Itineraries</label>
            <label><input type="checkbox" checked readOnly /> Local Insights</label>
            <label><input type="checkbox" checked readOnly /> Exclusive Deals</label>
            <label><input type="checkbox" checked readOnly /> Travel Resources</label>
          </div>
          <a href="#">ABOUT US</a>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-review-section">
        <h2 className="section-title">What Our Happy Customers Say</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
          className="review-carousel"
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.image} alt={review.name} className="reviewer-img" />
              <p className="review-text">{review.review}</p>
              <div className="reviewer-info">
                <strong>{review.name}</strong>
                <p>Rating: {`${'⭐'.repeat(review.rating)}`}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Main;
