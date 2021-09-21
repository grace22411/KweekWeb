import React,{useState} from "react";
import Layout from "../../../component/Layout";
import "./style.scss";
import { IMAGES } from "../../../constants";
import { Initiated } from "../../../data/InviteData";
import {AcceptRequest} from "./comp/AcceptRequest";

const Invite = () => {
    const [currentView, setCurrentView] = useState("select");

  const proceedToList = () => {
      setCurrentView("accepted");
  };


  return (
    <>
      <Layout>
        <div className="page">
          <div className="Transac container">
            <div className="cardie row">
              <div className="col-md-6 option">
              <h4>My Initiated Invites</h4>
                {Initiated.map((item, index) => {
                  return (
                    <div className="InvitedInitiated" key={index}>
                      <div className="content">
                        <div className="subcontent">
                          <div className="picture">
                            <div>
                              <div
                                className="pic"
                                style={{
                                  backgroundImage: `url(${item.picture})`,
                                }}
                              ></div>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                          <div className="text">
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
                                <h5>
                                  <i className="far fa-clock"></i>
                                  {item.time}
                                </h5>
                              </div>
                            </div>
                            <div className="amount">
                              <div className="recieve">
                                <p>Trading Amount</p>
                                <h3>
                                  {item.tradingAmount} <span>USD</span>
                                </h3>
                              </div>
                              <div className="give">
                                <p>Initial Rate</p>
                                <h3>
                                  {item.intialRate} <span>NGN/USD</span>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ref">
                          <div className="recieve">
                            <p>Negotiation Range</p>
                            <h3>
                              {item.range} <span>NGN/USD</span>
                            </h3>
                          </div>
                          <div className="give">
                            <p>Reference Number</p>
                            <h3>
                              {item.ref}
                            </h3>
                          </div>
                        </div>
                        <button onClick={proceedToList}>View Acceptance Request</button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-6 multi-select">
              {currentView === "select" ? (
                <>
                <p style={{fontSize:"20px",color:"#37517E"}}>Select an invite to view Acceptance Requests</p>
                </>
              ) : currentView === "accepted" ? (
                  <AcceptRequest />
              ) : null}
              <div>
              
            </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Invite;
