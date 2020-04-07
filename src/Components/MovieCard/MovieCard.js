import React from 'react';
import './MovieCard.css';
import FilledUserStar from '../../Images/star-yellow.svg'
import EmptyStar from '../../Images/star-clear-outline.svg'

const MovieCard = () => {
  return (
  <section className="movie-card">
    <img 
      alt="movie poster"
      className="movie-poster" 
      src='https://upload.wikimedia.org/wikipedia/en/7/7a/Spider-Man_3%2C_International_Poster.jpg' 
      />
    <h3>Movie Title</h3>
    <p>Avg. Rating: 6.9</p>
    <section className="rate-movie">
      <img
        alt="" 
        className="filled-yellow-star star"
        src={FilledUserStar} 
        />
      <img
        alt="" 
        className="clear-star star"
        src={EmptyStar} 
        />
    </section>
    <button className="movie-details-btn">View Movie Details</button>
  </section>
  )
}

export default MovieCard