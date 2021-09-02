import React from "react";
import { Acceptance } from "../../../../data/AcceptedRequest";
import { IMAGES } from "../../../../constants";
import '../style.scss'
import Payment from "./Payment";

const Requests = () => {
  return (
    <>
    <div className="payment-section">
      {Acceptance.map((item, index) => {
        return (
          <>
            <div className="accepted-request-style">
              <div className="user-detail">
                <div className="user-picture" style={{ backgroundImage: `url(${item.picture})` }}></div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div className="user-info">
                <div className="head-name">
                  <h1>{item.name}</h1>
                  <h5>Reference NO.:{item.ref}</h5>
                </div>
                <div className="other-details">
                  <div className="location">
                    <div className="from">
                      <p>From</p>
                      <h5>
                        <img src={IMAGES.NIGERIA} alt="" />
                        {item.from}
                      </h5>
                    </div>
                    <div className="from">
                      <p>To</p>
                      <h5>
                        <img src={IMAGES.USA} alt="" />
                        {item.to}
                      </h5>
                    </div>
                  </div>
                  <div className="transact">
                    <div className="from">
                      <p>I send</p>
                      <h5>
                        {item.send} <span> USD</span>
                      </h5>
                    </div>
                    <div className="from">
                      <p>I recieve</p>
                      <h5>
                        {item.recieve} <span> NGN</span>
                      </h5>
                    </div>
                  </div>
                  <div className="offer from">
                    <p>Offered Rate</p>
                    <h5>
                      {item.rate} <span> NGN/USD</span>
                    </h5>
                  </div>
                  <div className="status">
                      <h5>Request Status: <span>Accepted</span></h5>
                      <p>Payment Window time</p>
                  </div>
                </div>
              </div>
             
            </div>
            <div className="payment-option">
                  <Payment />
                </div>
          </>
        );
      })}

      </div>
    </>
  );
};

export default Requests;
