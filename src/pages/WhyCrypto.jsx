import "../styles/WhyCrypto.css";

const WhyCrypto = () => {
  return (
    <div className="whycrypto">
      <div className="container">
        <div className="whycrypto-heading text-center">
          <h2 className="">
            Why do people get involved with Cryptocurrencies?
          </h2>
          <button>See Less</button>
        </div>
        <div className="whycrypto-content">
          <div className="whycrypto-content-inner">
            <div className="image"></div>
            <h6>Easy Mode of Payment</h6>
            <p>
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services.
            </p>
          </div>
          <div className="whycrypto-content-inner">
            <div className="image"></div>
            <h6>Financial Freedom</h6>
            <p>
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money.
            </p>
          </div>
          <div className="whycrypto-content-inner">
            <div className="image"></div>
            <h6>Investment</h6>
            <p>
              The constant demand as made Cryptocurrencies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCrypto;
