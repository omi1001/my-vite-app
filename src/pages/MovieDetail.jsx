import React from 'react';
import { useParams, Link } from 'react-router-dom';
import netflixMovies from '../data/netflixMovies';
import NetflixCard from '../components/NetflixCard';

const MovieDetail = () => {
  const { movieId } = useParams();
  const movie = netflixMovies.find(m => m.id === parseInt(movieId));

  if (!movie) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h2 className="text-white">Movie not found</h2>
        <Link to="/" className="btn btn-danger mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="movie-detail-page" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-4">
            <img src={movie.img} alt={movie.title} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-8 text-white">
            <h1 className="display-5 fw-bold mb-3">{movie.title}</h1>
            <div className="mb-3">
              <span className="badge bg-danger me-2">{movie.rating}</span>
              <span className="badge bg-secondary me-2">{movie.year}</span>
              <span className="badge bg-warning text-dark">{movie.genre}</span>
            </div>
            <p className="lead mb-4">{movie.description}</p>
            <button className="btn btn-danger btn-lg me-3">▶ Play</button>
            <button className="btn btn-outline-light btn-lg">+ My List</button>
          </div>
        </div>

        <div className="mt-5" data-aos="fade-up">
  <h3 className="text-white mb-4">More Like This</h3>
<div
  className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"
  style={{ overflowX: 'auto', flexWrap: 'nowrap' }}
>
  {netflixMovies
      .filter(m => m.id !== movie.id)
      .slice(0, 4)
      .map(relatedMovie => (
        <div key={relatedMovie.id} className="col">
          <NetflixCard movie={relatedMovie} />
        </div>
      ))}
</div>
</div>

      </div>
    </div>
  );
};

export default MovieDetail;
