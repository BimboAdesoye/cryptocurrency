import "../styles/Hero.css";
// import ellipse1 from "../assets/Ellipse 1.svg";
// import ellipse2 from "../assets/Ellipse 2.svg";
import appstore from "../assets/Group 68@2x.svg";
import googleplay from "../assets/Group 69.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container hero">
        <div className="hero-content">
          <h1 className="text-white">
            Buy, Sell and Manage your Crypto on TradExpress.
          </h1>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN.
          </p>
          <Link className='w-100' to="/GetStarted">
            <button className="start-btn">Get Started</button>
          </Link>
          <div className="hero-img">
            <div>
              <img src={appstore} alt="" />
            </div>
            <div>
              <img src={googleplay} alt="" />
            </div>
          </div>
        </div>
        <div className="hero-ellipse1">
          {/* <img src={ellipse2} alt="" /> */}
        </div>
        <div className="hero-ellipse2">
          {/* <img src={ellipse1} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
