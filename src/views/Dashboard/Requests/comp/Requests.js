import React, { useState } from "react";
import { Acceptance } from "../../../../data/AcceptedRequest";
import { IMAGES } from "../../../../constants";
import "../style.scss";
import Payment from "./Payment";

const Requests = () => {
  const [showText, setShowText] = useState(false);

  const proceedToPayment = () => {
    setShowText(true);
  };
  return (
    <>
      <div className="payment-section">
        {Acceptance.map((item, index) => {
          return (
            <>
              <div className="accepted-request-style">
                <div className="user-detail">
                  <div
                    className="user-picture"
                    style={{ backgroundImage: `url(${item.picture})` }}
                  ></div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="user-info">
                  <div className="head-name">
                    <h1>{item.name}</h1>
                    <h5>Reference NO.:{item.ref}</h5>
                  </div>
                  <div className="other-details row">
                    <div className="location col-md-3 col-6">
                      <div className="from col-md-6 col-6">
                        <p>From</p>
                        <h5>
                          <img src={IMAGES.NIGERIA} alt="" />
                          {item.from}
                        </h5>
                      </div>
                      <div className="from col-md-6 col-6">
                        <p>To</p>
                        <h5>
                          <img src={IMAGES.USA} alt="" />
                          {item.to}
                        </h5>
                      </div>
                    </div>
                    <div className="transact col-md-4 col-6">
                      <div className="from col-md-6 col-6">
                        <p>I send</p>
                        <h5>
                          {item.send} <span> USD</span>
                        </h5>
                      </div>
                      <div className="from col-md-6 col-6">
                        <p>I recieve</p>
                        <h5>
                          {item.recieve} <span> NGN</span>
                        </h5>
                      </div>
                    </div>
                    <div className="offer from col-md-1 col-12">
                      <p>Offered Rate</p>
                      <h5>
                        {item.rate} <span> NGN/USD</span>
                      </h5>
                    </div>
                    <div className="status col-md-4 col-12">
                      <h5>
                        Request Status: <span>Accepted</span>
                      </h5>
                      <p>Payment Window time</p>
                    </div>
                    <div className="footer col-md-12 col-12">
                      <p>
                        At timeout, this request will automatically be
                        cancelled.
                      </p>
                      <div className="time">
                        <p>
                          <i class="far fa-clock"></i>05:00 minutes
                        </p>
                        <button onClick={proceedToPayment}>
                          Initiate Payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {showText ? <Payment /> : null}
            </>
          );
        })}
        
      </div>
    </>
  );
};

export default Requests;
