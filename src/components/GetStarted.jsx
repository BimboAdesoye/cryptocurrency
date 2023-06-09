import { useState } from "react";
import "../styles/GetStarted.css";
import { Link, useNavigate } from "react-router-dom";

const GetStarted = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [error2, setError2] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (username && email && fullname && number) {
      setUsername("");
      setFullname("");
      setEmail("");
      setNumber("");
    }

    if (!username && !fullname && !email && !number) {
      setError(!error);
    }
    
    // if (!username) {
    //   setError(!error);
    // }
    // if (!fullname) {
    //   setError(!error);
    // }
    // if (!email) {
    //   setError(!error);
    // }
    // if (!number) {
    //   setError(!error);
    // }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormatValid = emailPattern.test(email);
    if (!isFormatValid) {
      setError2(!error2);
    }
    return;
  }

  

  const [data, setData] = useState("Full Name");

  const [isActive, setIsActive] = useState("individual-btn");

  function handleBusiness(btn) {
    setData("Business Name");
    setIsActive(btn);
  }

  function handleIndividual(btn) {
    setData("Full Name");
    setIsActive(btn);
  }

  return (
    <div className="get-started">
      <div className="content">
        <h2>Welcome</h2>
        <div className="btns">
          <button
            onClick={() => handleIndividual("individual-btn")}
            className={isActive === "individual-btn" ? "working" : ""}
          >
            Individual
          </button>
          <button
            onClick={() => handleBusiness("business-btn")}
            className={isActive === "business-btn" ? "working" : ""}
          >
            Business
          </button>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            id="fullname"
            placeholder={data}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error2 && (
            <p className="validate fst-italic">Enter a valid email!</p>
          )}
          <input
            type="number"
            id="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input type="text" placeholder="Referral code (optional)" />
        </form>
        {/* {error && (
          <p className="validate fst-italic">
            All input fields must be filled!
          </p>
        )} */}
        <p className="terms">
          By clicking the Sign Up button below, you agree to TradExpress
          <a href="#"> terms and service</a>
        </p>

        <button onClick={handleSubmit} className="sign-up">
          Sign Up
        </button>

        {/* <Link to="/VerifyMail" className="sign-up">
          <button onClick={handleSubmit} className="sign-up">
            Sign Up
          </button>
        </Link> */}
        <p>
          Already have an account?
          <Link to="/Login" href="#">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
