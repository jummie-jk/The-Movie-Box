import React from "react";

function Card({movie}){
    return(
        <div className="card">
            <img className="card-img" src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
             alt={movie.title + " poster"}/>
             <div className="card-content">
                <h3 className="card-title">{movie.title}</h3>
                <p><small>Release Date: {movie.release_date}</small></p>
                <p><small>Rating: {movie.vote_average}</small></p>
                <p className="card-description">{movie.overview}</p>
             </div>
        </div>
    )
}
export default Card;