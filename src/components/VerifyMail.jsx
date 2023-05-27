import welcome from "../assets/Rectangle 26.png";
import "../styles/VerifyMail.css";
import { Link } from "react-router-dom";

const VerifyMail = () => {
  return (
    <div className="verify">
      <div className="verify-content">
        <h2 className="heading">You're Almost In!</h2>
        <h2 className="welcome">Welcome Iretiayo</h2>
        <img src={welcome} alt="" />
        <p className="activation">
          An activation link has been sent to Ireti4tech@gmail.com Please click
          on the link to verify your email and activate your TradExpress
          account.
        </p>
        <button className="sign-up">Sign Up</button>
        <p>
          Already have an account? <Link to='/Login' href="#">Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyMail;
