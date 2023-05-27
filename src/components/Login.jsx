import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-content">
        <h2>Welcome Back</h2>
        <form className="form1" action="">
          <input type="text" placeholder="Username" />
          <input type="password" name="" id="" placeholder="Password" />
        </form>
        <div className="check">
          <form className="form2" action="|">
            <input
              className="checkbox"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <label className="pass" htmlFor="checkbox">Remember Password</label>
          </form>
          <a className="pass" href="#">Forgot Password?</a>
        </div>
        <button>Log In</button>
        <p>
          New User? <Link to="/GetStarted">Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
