// MovieDetails.js

import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '7cf423e5a87e0e3b3165c0537b2d334e'; 
  const movieId = match.params.id;
//   const movieId = 234;
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response.json());
        return response.json();
       
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        setError('An error occurred while fetching movie details.');
      });
  }, [apiUrl]);

  return (
    <div>
      {error && <p>{error}</p>}
      {movie && (
        <div>
          <h1 data-testid="movie-title">{movie.title}</h1>
          <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
          <p data-testid="movie-runtime">Runtime (minutes): {movie.runtime}</p>
          <p data-testid="movie-overview">{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const apiKey = '7cf423e5a87e0e3b3165c0537b2d334e';
//   const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           params: {
//             api_key: apiKey,
//           },
//         });

//         setMovie(response.data);
//       } catch (err) {
//         setError('An error occurred while fetching movie details.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovieDetails();
//   }, [apiUrl, apiKey, id]);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {movie && (
//         <div>
//           <h1 data-testid="movie-title">{movie.title}</h1>
//           <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
//           <p data-testid="movie-runtime">Runtime (minutes): {movie.runtime}</p>
//           <p data-testid="movie-overview">{movie.overview}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDetails;
