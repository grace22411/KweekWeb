import React, { useState } from "react";
import { AcceptanceRequest } from "../../../../data/InviteData";
import "../style.scss";
import {IMAGES} from '../../../../constants'; 

export const AcceptRequest = () => {
  const [currentView, setCurrentView] = useState("list");

  const proceedToDetails = () => {
    setCurrentView("details");
  };
  const proceedToAccept = () => {
    setCurrentView("accept");
  };
  const backToList = () => {
    setCurrentView("list");
  };
  return (
    <>
      <div className="section">
        <div className="header">
          <h3>Incoming Acceptance Requests</h3>
          <p>Reference NO.</p>
          <h2>KWKM23679568</h2>
        </div>
        <div className="requests">
          {currentView === "list" ? (
            <>
              {AcceptanceRequest.map((item, index) => {
                return (
                  <div className="accepted" key={index}>
                    <div
                      className="picture"
                      style={{ backgroundImage: `url(${item.picture})` }}
                    ></div>
                    <div className="details">
                      <p>{item.type}</p>
                      <h2>{item.name}</h2>
                      <p className="trans">
                        {item.noOfTransaction} transactions
                      </p>
                      <p className="trans">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        {item.rate}.0
                      </p>
                    </div>
                    <div className="refNumber">
                      <p>{item.ref}</p>
                      <button onClick={proceedToDetails}>View Details</button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : currentView === "details" ? (
            <div className="request-details">
              <div className="picture">
                <div className="pic" style={{backgroundImage:`url(${IMAGES.USER})`}}></div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <h5>Alexa Olugbenga</h5>
                <p><i className="far fa-clock"></i>5 mins ago</p>
              </div>
              <div className="textDetails">
                <div className="det">
                  <div className="tex">
                    <p>Initial Rate</p>
                    <h3>
                      500 <span>NGN/USD</span>{" "}
                    </h3>
                    <p>Negotiation Range</p>
                    <h3>
                      450-480<span>NGN/USD</span>
                    </h3>
                  </div>
                  <div className="offered-rate">
                    <div className="offered">
                      <p>Offered Rate</p>
                      <h3>450NGN/USD</h3>
                    </div>
                  </div>
                </div>
                <div className="option">
                  <button onClick={proceedToAccept}>Accept</button>
                  <button onClick={backToList}>View Others</button>
                </div>
              </div>
            </div>
          ) : currentView === "accept" ? (
            <>
              <div className="accept-details">
                <div className="head">
                  <p onClick={backToList}>
                    <i className="fas fa-arrow-left"></i>Back
                  </p>
                </div>
                <div className="det-contain">
                  <div className="picture">
                    <div className="pic"  style={{backgroundImage:`url(${IMAGES.USER})`}}></div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <h5>Alexa Olugbenga</h5>
                    <p><i className="far fa-clock"></i>5 mins ago</p>
                  </div>
                  <div className="textDetails">
                    <div className="tex">
                      <p>Initial Rate</p>
                      <h3>
                        500 <span>NGN/USD</span>{" "}
                      </h3>
                      <p>Negotiation Range</p>
                      <h3>
                        450-480<span>NGN/USD</span>
                      </h3>
                      <p>Reference No.</p>
                      <h3>KWKM23678568</h3>
                      <p>Request Status</p>
                      <h3>Accepted</h3>
                      <p>Payment Window time</p>
                      <h3>05:00 Remaining</h3>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
