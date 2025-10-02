import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section position-relative" style={{ height: '70vh', marginTop: '70px' }}>
      <div className="position-absolute w-100 h-100" style={{
        background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))',
        zIndex: 1
      }}></div>
      
      <div className="position-absolute w-100 h-100" style={{
        backgroundImage: 'url(https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.6)'
      }}></div>
      
      <div className="container position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
        <div className="hero-content text-white" data-aos="fade-right">
          <h1 className="display-4 fw-bold mb-3">Unlimited movies, TV shows, and more.</h1>
          <p className="lead mb-4">Watch anywhere. Cancel anytime.</p>
          <button className="btn btn-danger btn-lg px-4">Watch Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
