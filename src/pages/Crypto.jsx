import { useEffect, useState } from "react";
import "../styles/Crypto.css";
import arrowup from "../assets/Vector.svg";
import arrowdown from "../assets/Vector.png";

const Crypto = () => {
  const [data, setData] = useState([]);

  let apiUrl = "https://api.coinlore.net/api/tickers/?start=0&limit=5";

  let fetcher = async () => {
    try {
      let fetchedData = await fetch(apiUrl);
      let response = await fetchedData.json();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div className="crypto">
      <div className="container">
        {data.map((datum) => {
          const { id, symbol, price_usd, percent_change_24h } = datum;
          return (
            <div className="crypto-inner" key={id}>
              <div className="d-flex justify-content-between">
                <p>{symbol}/NGN</p>
                <p>{percent_change_24h}%</p>
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
