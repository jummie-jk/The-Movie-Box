import React, {useState, useEffect} from "react";
import MovieCard from "../components/FeaturedCards";
function FeaturedMovies (){
    
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '7cf423e5a87e0e3b3165c0537b2d334e';
    const url = `${API_URL}movie/top_rated?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.results.slice(0,10)))
        .catch((err) => {
            setError('An error occurred while fetching movie details.');
          });
    },[url])
    console.log(movies)
    return(
        <div> 
              {error && <p>{error}</p>}
            <div className="featured-box">
             <p className="featured-text">Featured Movie</p>
             <p className="featured-text-small hide">See More </p>
            </div>
            
            <div className="movies-grid" data-testid='movie-card'>
            {movies.map((movie) => (
                <MovieCard {...movie}/>
            ))}
            </div>
        </div>
        
    )
}

export default FeaturedMovies;