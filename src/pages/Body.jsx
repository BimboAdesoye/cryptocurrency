import "../styles/Body.css";
import phone from "../assets/cuate.png";
import piggybank from "../assets/rafiki.png";
import coin from "../assets/cuat.png";
import keycap1 from "../assets/emojione-monotone_keycap-1.png";
import keycap2 from "../assets/emojione-monotone_keycap-2.png";
import keycap3 from "../assets/emojione-monotone_keycap-3.png";

const Body = () => {
  return (
    <div className="body">
      <div className="mycontainer">
        <div className="body-heading">
          <h2>Buy and Sell your Cryptocurrency in 3 simple steps</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus
            faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus
            mauris ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla
            aliquam consectetur lectus. Rutrum feugiat et, tellus mattis donec
            et odio molestie amet.
          </p>
        </div>
        <div className="body-content">
          <div className="body-inner">
            <div className="body-text">
              <img src={keycap1} alt="" />
              <div>
                <h2>Create a Free Account</h2>
                <p>
                  Sign up for your free TradExpress Wallet on web, iOS, or
                  Android devices and follow our easy process to set up your
                  profile.
                </p>
              </div>
            </div>
            <div className="body-img">
              <img className="image" src={phone} alt="" />
            </div>
          </div>
          <div className="body-inner">
            <div className="body-text">
              <img src={keycap2} alt="" />
              <div>
                <h2>Deposit</h2>
                <p>
                  Choose your preferred deposit option like bank transfer,
                  credit/debit card or send digital asset directly to your
                  wallet for easy funding/withdrawal.
                </p>
              </div>
            </div>
            <div className="body-img">
              <img className="image" src={piggybank} alt="" />
            </div>
          </div>
          <div className="body-inner">
            <div className="body-text">
              <img src={keycap3} alt="" />
              <div>
                <h2>Buy/ Sell Crypto</h2>
                <p>
                  Sign up for your free TradExpress Wallet on web, iOS, or
                  Android devices and follow our easy process to set up your
                  profile.
                </p>
              </div>
            </div>
            <div className="body-img">
              <img className="image" src={coin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
