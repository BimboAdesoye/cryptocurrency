import { useEffect, useState } from "react";
import "../styles/Crypto.css";
import arrowup from "../assets/Vector.svg";
import arrowdown from "../assets/Vector.png";

const Crypto = () => {
  const [data, setData] = useState([]);
  const [percent_change_1h, setPercentChange] = useState(0);

  let apiUrl = "https://api.coinlore.net/api/tickers/?start=0&limit=5";

  let fetcher = async () => {
    try {
      let fetchedData = await fetch(apiUrl);
      let response = await fetchedData.json();
      setData(response.data);
      const { percent_change_1h } = data;
      setPercentChange(percent_change_1h);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  function changeInPrice() {
    if (percent_change_1h > 0) {
      return <img src={arrowup} alt="Increase" />;
    } else if (percent_change_1h < 0) {
      return <img src={arrowdown} alt="Decrease" />;
    }
    return null;
  }

  return (
    <div className="crypto">
      <div className="container">
        {data.map((datum) => {
          const { id, symbol, price_usd, percent_change_1h } = datum;
          return (
            <div className="crypto-inner" key={id}>
              <div className="d-flex justify-content-between">
                <p>{symbol}/NGN</p>
                <p>
                  {percent_change_1h}%{changeInPrice()}
                </p>
              </div>
              <p className="mb-0">{price_usd} NGN</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crypto;
