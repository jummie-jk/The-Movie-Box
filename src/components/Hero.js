import logo from "../images/logo.png";
import imdb from "../images/imdb.png";
import redTomatoes from "../images/Rotten Tomatoes.png"
import play from "../images/Play.png"
import "../App.css";
import "../Featured.css"
import FeaturedMovies from "./Featured";
import { Link } from "react-router-dom";
import Footer from "./footer"



function Hero() {
  return (
    <div className="Appp">
      <header className="header">
        <div className="header-flex">
          <div>
            <img src={logo} className="header-logo" alt="logo" />
          </div>
          <div className="search-container">
          <Link to="/Search">
            <input
              type="text"
              className="search-input"
              placeholder="What do you want to watch?"
            ></input>
             </Link>
          </div>
         
          <div className="sign-in-text sign-in-box">
            <p className="hide">Sign in</p>
            <div className="round-pink-box hide">
              <div className="menu-icon">&#9776;</div>
            </div>
          </div>
        </div>
        <div className="text-block">
            <div className="description-text">
            <h1>John Wick 3 : <br></br> Parabellum</h1>
            <img src={imdb} className="imdb-img" alt="imbd-logo" />
            <img src={redTomatoes} className="" alt="red-tomato" />
            <p>
                John Wick is on the run after killing a member <br></br>
                of the international assassins' guild, and with<br></br>
                 a $14 million price tag on his head, he is the <br></br>
                 target of hit men and women everywhere.
            </p>
            <button className="btn"><img src={play} alt="play icon button" className="play-img"></img>Watch Trailer</button>
            </div>
            <div className="number-block hide">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </div>
      </header>
      <FeaturedMovies />
      <Footer/>
    </div>
  );
}

export default Hero;
