import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/TradExpress.png";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  function handleToggle() {
    setIsActive(!isActive);
  }
  return (
    <div className="navigation d-flex align-items-center stiky-top">
      <div className="container nav">
        <div className="brand">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <ul className={isActive ? "active" : ""}>
          <li className="list-unstyled">
            <Link to="/InstantBuy" className="text-decoration-none text-white">
              Instant Buy/Sell
            </Link>
          </li>
          <li className="list-unstyled">
            <Link to="/Learn" className="text-decoration-none text-white">
              Learn
            </Link>
          </li>
          <li className="list-unstyled">
            <Link to="/Login" className="text-decoration-none">
              <button className="login-btn">Login</button>
            </Link>
          </li>
          <li className="list-unstyled">
            <Link to="/GetStarted" className="text-decoration-none">
              <button className="start-btn">Get Started</button>
            </Link>
          </li>
        </ul>
        <a onClick={handleToggle} className="hamburger">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
