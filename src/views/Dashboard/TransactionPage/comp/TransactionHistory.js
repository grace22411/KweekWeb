import React from "react";
import { TransactionHistoryData } from "../../../../data/TransactionData";

const TransactionHistory = () => {
  return (
    <>
      <div className="historyPage">
        {TransactionHistoryData.map((item, index) => {
          return (
            <div className="history">
              <div className="picture">
                <div>
                  <div
                    className="pic"
                    style={{ backgroundImage: `url(${item.picture})` }}
                  ></div>
                  <p>Rated you</p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="text">
                <div className="nameStatus">
                  <h2>{item.name}</h2>
                  <p>{item.completed}</p>
                </div>
                <div className="info">
                  <div className="from">
                    <p>Sent</p>
                    <h5>{item.sent}</h5>
                  </div>
                  <div className="from">
                    <p>Recieved</p>
                    <h5>
                      <h5>{item.recieve}</h5>
                    </h5>
                  </div>
                  <div className="from">
                    <p>Ref. No</p>
                    <h5>{item.ref}</h5>
                  </div>
                  <div className="from">
                    <p>Date</p>
                    <h5>{item.date}</h5>
                  </div>
                  <div className="from">
                    <p>Time</p>
                    <h5>{item.time}</h5>
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
export default TransactionHistory;
