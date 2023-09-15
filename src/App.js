import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from './components/SearchPage';
import MovieDetails from './components/MovieDetails';
function App() {
  return (
   <>
    {/* <Hero/> */}
    <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Hero />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/movies/:movieId" element={<MovieDetails/>} />
                {/* {
                path: '/movies/:movieId',
                element: <MovieDetails />,
                loader: movieLoader
              } */}
                {/* <Route path="/crypto" element={<CryptoPrice />} />
                <Route path="/signin" element={<Signin />} /> */}
                </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
