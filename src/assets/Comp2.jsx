import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'
import Image4 from '../assets/Image4.png'
import Image5 from '../assets/Image5.png'
import Image6 from '../assets/Image6.png'
import AOS from "aos";
import "aos/dist/aos.css";

export const Comp2 = () => {
  useEffect(() => {
    AOS.init({duration: 1000, once: true});
  }, [])
  const Container = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '30px',
    paddingTop: '70px',

  }

  const Imagestyle = {
    borderRadius: '10px 10px 0 0',
    height: '200px',
    width: '100%',
    objectFit: 'cover',
  }

  const Cardbox = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  }

  const Content = {
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontSize: '15px',
  }

  const Button = {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(135deg, #06beb6, #48b1bf)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }

  const ButtonHover = {
    background: 'linear-gradient(135deg, #04868b, #1a8f9d)',
    transform: 'scale(1.05)',
  }

  // Improved Heading Style
  const HeadingWrapper = {
    textAlign: 'center',
    margin: '40px 0 10px 0',
    position: 'relative',
  }

  const Heading = {
    display: 'inline-block',
    color: 'white',
    fontSize: '2.8rem',
    fontWeight: '300', // thinner font
    padding: '10px 20px',
    background: 'rgba(0, 0, 0, 0.5)', // dark overlay behind text
    borderRadius: '8px',
    textShadow: '0 0 8px #00f7ff, 0 0 15px #00f7ff', // neon glow
    letterSpacing: '3px',
  }

  const Underline = {
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00f7ff, transparent)',
    margin: '15px auto 30px auto',
    borderRadius: '2px',
  }

  const cards = [
    { id: 1, title: 'Explore Galaxies', img: Image2 },
    { id: 2, title: 'Discover Stars', img: Image3 },
    { id: 3, title: 'About Planets', img: Image4 },
    { id: 4, title: 'Black Holes', img: Image5 },
    { id: 5, title: 'Journey to Space', img: Image6 },
  ]

  return (
    <>
      {/* Futuristic Heading */}
      <div style={HeadingWrapper} data-aos="fade-up">
        <h1 style={Heading}>SPACE TOUR</h1>
      </div>
      <div style={Underline} data-aos="zoom-in"></div>

      {/* Cards */}
      <div style={Container} data-aos="zoom-out">
        {cards.map((card) => (
          <div
            key={card.id}
            style={Cardbox}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={card.img} alt={card.title} style={Imagestyle} />
            <div style={Content}>
              <h3>{card.title}</h3>
              <Link to = {`/Comp3/${card.id}`}><button
                style={Button}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, ButtonHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, Button)}
                
              >
                Click Here
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
