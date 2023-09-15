
import React from "react";

function Card({movie}){
    return(
        <div className="">
            <img className="card-imgg" src={`http://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
             alt={movie.title + " poster"}/>
             <div className="card-contentt">
                <h3 className="card-titlee">{movie.title}</h3>
                <p><small>Release Date: {movie.release_date}</small></p>
             </div>
        </div>
    )
}
export default Card;