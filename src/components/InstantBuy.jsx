import "../styles/InstantBuy.css";
import arrow from "../assets/arrow-down.png";

const InstantBuy = () => {
  return (
    <div className="instantbuy">
      <div className="instantbuy-content">
        <h2 className="heading">Buy/Sell Instantly</h2>
        <div className="btns">
          <button>Buy</button>
          <button>Sell</button>
        </div>
        <form action="">
          <div className="d-flex flex-column">
            <label className="label" htmlFor="bitcoin">Coin to Buy</label>
            <div>
              <input type="text" placeholder="Bitcoin (BTC)" id="bitcoin" />
              <img className="arrow" src={arrow} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column">
            <label className="label" htmlFor="bitcoin">Currency</label>
            <div>
              <input type="text" placeholder="Naira (NGN)" id="bitcoin" />
              <img className="arrow" src={arrow} alt="" />
            </div>
          </div>
          <div className="d-flex flex-column">
            <label className="label" htmlFor="bitcoin">Amount</label>
            <div>
              <input type="text" placeholder="NGN | 3,000,000" id="bitcoin" />
            </div>
          </div>
        </form>
        <button className="continue">Continue</button>
      </div>
    </div>
  );
};

export default InstantBuy;
