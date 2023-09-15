import React from "react";
import Searchmovies from "./Search";
import "../Search.css"

function SearchPage(){
    return(
        <div className="movie-page">
            <div className="movie-search">
             <Searchmovies/>
            </div>
          
           
      
        </div>
    )
}
export default SearchPage;