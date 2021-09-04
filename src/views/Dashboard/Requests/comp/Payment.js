import React, { useState } from "react";
import "../style.scss";
import { IMAGES } from "../../../../constants";
import { Link } from "react-router-dom";
import { APP_PATHS } from '../../../../constants/appPath';

const Payment = () => {
  const [currentView, setCurrentView] = useState("value");

  const proceedToCard = () => {
    setCurrentView("mastercard");
  };
  const proceedToSuccess = () => {
    setCurrentView("success");
  };
  return (
    <div className="payment-details">
      {currentView === "value" ? (
        <form>
          <h5>Nigeria Bank Details</h5>
          <p>(Enter your receiving bank details before processing payment)</p>
          <input type="email" placeholder="Enter old email" />
          <input type="email" placeholder="Enter new email" />
          <input type="email" placeholder="Enter new email" />
          <button onClick={proceedToCard}>Submit</button>
        </form>
      ) : currentView === "mastercard" ? (
        <div className="cards">
          <h5>Select a Payment Option</h5>
          <div className="payment-image">
            <img src={IMAGES.MASTERCARD} alt="" onClick={proceedToSuccess} />
            <img src={IMAGES.VISA} alt="" />
            <img src={IMAGES.OTHER} alt="" />
          </div>
        </div>
      ) : currentView === "success" ? (
        <div className="succes-payment">
            <i className="fas fa-check-circle"></i>
            <h5>Payment Successful</h5>
            <Link activeClassName="active"  to={APP_PATHS.URLS.DASHBOARD.TRANSACTION}><button>Continue</button></Link>
        </div>
      ) : null}
    </div>
  );
};

export default Payment;
