
import React from "react";

function Card({movie}){
    return(
        <div className="" data-testid='movie-card'>
            <img className="card-imgg" data-testid='movie-poster' src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
             alt={movie.title + " poster"}/>
             <div className="card-contentt" >
                <h3 className="card-titlee" data-testid='movie-title'>{movie.title}</h3>
                <p data-testid='movie-release-date'><small>Release Date: {movie.release_date}</small></p>
             </div>
        </div>
    )
}
export default Card;