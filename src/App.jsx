import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NetflixNavbar from './components/NetflixNavbar';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import TvShowsPage from './pages/TvShowsPage';
import MoviesPage from './pages/MoviesPage';
import NewPage from './pages/NewPage';
import Footer from './components/Footer';
import './styles/NetflixStyles.css';

const App = () => {
  return (
    <Router>
      <div className="netflix-app">
        <NetflixNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/tv-shows" element={<TvShowsPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/new" element={<NewPage />} />
        </Routes>

<Footer/>
      </div>
    </Router>
  );
};

export default App;
