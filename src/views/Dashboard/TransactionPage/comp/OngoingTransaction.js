import React from "react";
import {
  OngoingTransactionAccepted,
  OngoingTransactionInitiated,
} from "../../../../data/TransactionData";
import { IMAGES } from "../../../../constants";
import "../styles.scss";

export const OngoingTransactionInit = () => {
  return (
    <>
      <div className="Initiated">
        <h4>My Initiated Invites</h4>
        {OngoingTransactionInitiated.map((item, index) => {
          return (
            <div className="PerInitiated" key={index}>
              <div className="head">
                <p>{item.tag}</p>
              </div>
              <div className="content">
                <div className="picture">
                  <div>
                    <div
                      className="pic"
                      style={{ backgroundImage: `url(${item.picture})` }}
                    ></div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="text">
                  <p>{item.type}</p>
                  <h2>{item.name}</h2>
                  <div className="transactionDetails">
                    <div className="from">
                      <p>From</p>
                      <h5>
                        <img src={IMAGES.USA} alt="" />
                        {item.from}
                      </h5>
                    </div>
                    <div className="from">
                      <p>To</p>
                      <h5>
                        <img src={IMAGES.NIGERIA} alt="" />
                        {item.to}
                      </h5>
                    </div>
                    <div className="from">
                      <p>Time</p>
                      <h5>
                        <i className="far fa-clock"></i>
                        {item.time}
                      </h5>
                    </div>
                  </div>
                  <div className="amount">
                    <div className="recieve">
                      <p>To Recieve</p>
                      <h3>
                        {item.recieve} <span>USD</span>
                      </h3>
                    </div>
                    <div className="give">
                      <p>To Give</p>
                      <h3>
                        {item.give} <span>NGN</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const OngoingTransactionAccept = () => {
  return (
    <>
      <div className="InitiatedTwo">
        <h4>My Accepted Invites</h4>
        {OngoingTransactionAccepted.map((item, index) => {
          return (
            <>
              <div className="PerInitiated" key={index}>
                <div className="head">
                  <p>{item.tag}</p>
                </div>
                <div className="content">
                  <div className="picture">
                    <div>
                      <div
                        className="pic"
                        style={{ backgroundImage: `url(${item.picture})` }}
                      ></div>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="text">
                    <p>{item.type}</p>
                    <h2>{item.name}</h2>
                    <div className="transactionDetails">
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
                      <div className="from">
                        <p>Time</p>
                        <h5>
                          <i className="far fa-clock"></i>
                          {item.time} 
                        </h5>
                      </div>
                    </div>
                    <div className="amount">
                      <div className="recieve">
                        <p>To Recieve</p>
                        <h3>
                          {item.recieve} <span>NGN</span>
                        </h3>
                      </div>
                      <div className="give">
                        <p>To Give</p>
                        <h3>
                          {item.give} <span>USD</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
