import React from 'react';
import { Link } from 'react-router-dom';

const NetflixCard = ({ movie }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" data-aos="fade-up">
      <div className="card netflix-card h-100 border-0">
        <Link to={`/movie/${movie.id}`} className="text-decoration-none">
          <img 
            src={movie.img} 
            alt={`Poster for ${movie.title}`}
            className="card-img-top"
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <div className="card-body p-2">
            <h6 className="card-title text-white mb-1">{movie.title}</h6>
            <div className="d-flex justify-content-between">
              <small className="text-muted">{movie.year}</small>
              <small className="text-danger">{movie.rating}</small>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NetflixCard;
