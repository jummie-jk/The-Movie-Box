import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props){
  const API_IMG = 'http://image.tmdb.org/t/p/w200/';
  return (
  
   <div className="homepage-cards">
    <Link to="/movies/:movieId">
      <div className="homepage-card " data-testid='movie-card'>
        <div className="homepage-poster" data-testid='movie-poster'>
          <img src={API_IMG + props.poster_path} alt="movie-poster"/>
        </div>
        <div className="info">
          <p className="movie-title" data-testid='movie-title'> {props.original_title}</p>
          <p data-testid='movie-release-date'><small>Release Date: {props.release_date}</small></p>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default MovieCard;