import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NetflixNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-dark bg-dark' : 'navbar-transparent'}`} 
         style={{ transition: 'all 0.3s ease', padding: '20px 0' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-danger fs-2" to="/">
          Movies Dekho
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/tv-shows">TV Shows</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/movies">Movies</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/new">New & Popular</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NetflixNavbar;
