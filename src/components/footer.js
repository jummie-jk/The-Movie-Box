import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instgram.png";
import youtube from "../images/youtube.png";
function Footer(){
    return(
        <div className="footer">
            <div className="social-logo-block">
            <img src={facebook} className="logo-img" alt="facebook-logo" />
            <img src={instagram} className="logo-img" alt="instagram-logo" />
            <img src={twitter} className="logo-img" alt="twiiter-logo" />
            <img src={youtube} className="logo-img" alt="youtube-logo" />
            </div>
            <div className="footer-text-block">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <div className="copy-right-text">
             <p>© 2021 MovieBox by Adriana Eka Prayudha  </p>
            </div>
        </div>
    )
}
export default Footer;