import "../styles/Review.css";
import polygon from "../assets/Polygon 1.png";
import person1 from "../assets/Ellipse 3.png";
import person2 from "../assets/Ellipse 4.png";
import person3 from "../assets/Ellipse 5.png";
import quote from "../assets/clarity_block-quote-line.png";

const Review = () => {
  return (
    <div className="review">
      <div className="mycontainer">
        <h2 className="review-heading text-center">Customers' Review</h2>
        <div className="review-content">
          <div className="review-body">
            <div className="review-inner">
              <img className="quote" src={quote} alt="" />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
            <img className="polygon" src={polygon} alt="" />
            <div className="review-person">
              <img src={person1} alt="" />
              <div className="person">
                <h6>Ireti</h6>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
          <div className="review-body">
            <div className="review-inner">
              <img className="quote" src={quote} alt="" />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
            <img className="polygon" src={polygon} alt="" />
            <div className="review-person">
              <img src={person2} alt="" />
              <div className="person">
                <h6>Bayo</h6>
                <p>USA</p>
              </div>
            </div>
          </div>
          <div className="review-body">
            <div className="review-inner">
              <img className="quote" src={quote} alt="" />
              <p>
                Trading on TradExpress mobile & web platforms has been a smooth
                experience for me quite easy to navigate.
              </p>
            </div>
            <img className="polygon" src={polygon} alt="" />
            <div className="review-person">
              <img src={person3} alt="" />
              <div className="person">
                <h6>Olagoke</h6>
                <p>Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
