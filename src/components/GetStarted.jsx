import "../styles/GetStarted.css";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="content">
        <h2>Welcome</h2>
        <div className="btns">
          <button>Individual</button>
          <button>Business</button>
        </div>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Full Name" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="number" name="" id="" placeholder="Phone Number" />
          <input type="text" placeholder="Referral code (optional)" />
        </form>
        <p className="terms">
          By clicking the Sign Up button below, you agree to TradExpress
          <a href="#"> terms and service</a>
        </p>
        <Link to="/VerifyMail" className="sign-up">
          <button className="sign-up">Sign Up</button>
        </Link>
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
