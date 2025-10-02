import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import netflixMovies from '../data/netflixMovies';
import NetflixCard from '../components/NetflixCard';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const categories = [
    { title: 'Popular on Movies Dekho', movies: netflixMovies },
    { title: 'Trending Now', movies: [...netflixMovies].reverse() },
    { title: 'Top Picks for You', movies: netflixMovies.slice(0, 4) }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="netflix-app bg-dark text-white" style={{ minHeight: '100vh' }}>
      <HeroSection />
      
      <div className="container-fluid py-5">
        {categories.map((category, index) => (
          <section key={index} className="mb-5" data-aos="fade-up">
            <h3 className="mb-4 ps-3">{category.title}</h3>
            <div className="row">
              {category.movies.map(movie => (
                <NetflixCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
