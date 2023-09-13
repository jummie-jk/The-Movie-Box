import React from "react";

function MovieCard(props){
  const API_IMG = 'http://image.tmdb.org/t/p/w200/';
  return (
  
   <div className="homepage-cards">
    <div className="homepage-card " data-testid='movie-card'>
      <div className="homepage-poster" data-testid='movie-poster'>
        <img src={API_IMG + props.poster_path} alt="movie-poster"/>
      </div>
      <div className="info">
        <p className="movie-title" data-testid='movie-title'> {props.original_title}</p>
        <p data-testid='movie-release-date'><small>Release Date: {props.release_date}</small></p>
        {/* <p className="vote">Rating: {props.vote_average}</p>
        <p className="movie-details">{props.overview}</p> */}
      </div>
    </div>
    </div>
  )
}

export default MovieCard;