import Hero from "../pages/Hero";
import Crypto from "../pages/Crypto";
import WhyCrypto from "../pages/WhyCrypto";
import Body from "../pages/Body";
import Account from "../pages/Account";
import Review from "../pages/Review";
import Footer from "../pages/Footer";
import "../styles/Home.css";
import arrow from "../assets/up-arrow.png";

const Home = () => {
  const btn = document.querySelector("#scrollToTop");
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  function handleClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      <Hero></Hero>
      <button onClick={handleClick} id="scrollToTop">
        <img className="scroll-img" src={arrow} alt="" />
      </button>
      <Crypto></Crypto>
      <WhyCrypto></WhyCrypto>
      <Body></Body>
      <Account></Account>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
