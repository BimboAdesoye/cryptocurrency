import "../styles/Footer.css";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import copyright from "../assets/copyright.png";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="">
      <div className="foot">
        <div className="container">
          <ul>
            <li>
              <b>Products</b>
            </li>
            <li>Bitcoin</li>
            <li>Alt</li>
            <li>Fiat</li>
            <li>Refill</li>
            <li>P2P</li>
          </ul>
          <ul>
            <li>
              <b>Learn</b>
            </li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
          <ul>
            <li>
              <b>Contact</b>
            </li>
            <li>hello@tradexpress.com</li>
            <li>support@tradexpress.com</li>
            <div className="footer-logos">
              <img src={twitter} alt="" />
              <img src={telegram} alt="" />
              <img src={whatsapp} alt="" />
              <img src={facebook} alt="" />
            </div>
          </ul>
          <ul className="five">
            <li>
              <b>Company</b>
            </li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Rates</li>
            <li>Mobile</li>
          </ul>
          <ul className="six">
            <li>
              <b>Legal</b>
            </li>
            <li>Privacy Policy</li>
            <li>Anti-Money Laundering</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div className="copyright text-center">
        <img src={copyright} alt="" />
        {year} Tradexpress Technologies. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
