import "../styles/Account.css";
import logoapple from "../assets/ion_logo-apple.png";
import logogoogle from "../assets/logos_google-play-icon.png";

const Account = () => {
  return (
    <div className="account">
      <div className="container text-center">
        <p className="account-text">
          Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
        </p>
        <h2 className="account-heading">
          Create your account for free and start trading today!
        </h2>
        <button className="account-btn">Get Started</button>
        <div className="account-logos">
          <div className="account-logo">
            <img src={logoapple} alt="" />
            <div>
              <p>Download on the</p>
              <h6>App Store</h6>
            </div>
          </div>
          <div className="account-logo">
            <img src={logogoogle} alt="" />
            <div>
              <p>Download on the</p>
              <h6>Google Play </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
