import React, { useState } from "react";
import "./styles.scss";
import { Modal } from "antd";
import { IMAGES } from "../constants";
import Panel from "./Panel";
import { Link } from "react-router-dom";
import { APP_PATHS } from '../constants/appPath';

export const TransactionModal = ({ data, onClose }) => {
    const [currentView, setCurrentView] = useState("initiate");

    const proceedToCard = () => {
        setCurrentView("card");
      };
      const proceedToSent = () => {
        setCurrentView("sent");
      };
      const proceedToRated = () => {
        setCurrentView("rated");
      };
      const backToInit = () => {
        setCurrentView("initiate");
      };

  return (
    <>
      <Modal visible={data ? true : false} width={1000} onCancel={onClose}>
          <header>
        <h2>ONGOING TRANSACTION</h2>
        <div className="userInfo row">
          <div className="col-md-3 col-6">
            <p>Rate</p>
            <h4>420 NGN/USD</h4>
          </div>
          <div className="col-md-3 col-6">
            <p>Reference Number</p>
            <h4>KWKMN57576868</h4>
          </div>
          <div className="col-md-3 col-6">
            <p>Acceptance Reference</p>
            <h4>KWKMN57576868</h4>
          </div>
          <div className="col-md-3 col-6">
            <p>Status</p>
            <h4>Pay-in initiated</h4>
          </div>
          <div className="col-md-12 col-6">
            <p>Negotiable</p>
           
          </div>
        </div>
    </header>
        <div className="row transact-modal">
          <div className="col-md-6 initiator">
            <div className="PerInitiated" style={{marginBottom:"0",filter:'grayscale(0.1)'}}>
              <div className="head">
                <p  style={{backgroundColor:"#7BA9DA"}}>Initiator</p>
              </div>
              <div className="content">
                <div className="picture">
                  <div>
                    <div
                      className="pic"
                      style={{ backgroundImage: `url(${IMAGES.USER})` }}
                    ></div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="text">
                  <p>Transaction Initiator</p>
                  <h2>ALEXA OLUGBENGA IGBAYILOLA</h2>
                  <div className="transactionDetails">
                    <div className="from">
                      <p>From</p>
                      <h5>
                        <img src={IMAGES.USA} alt="" />
                        US
                      </h5>
                    </div>
                    <div className="from">
                      <p>Rate</p>
                      <h5>420 NGN/USD</h5>
                    </div>
                    <div className="from">
                      <p>Initiated Time</p>
                      <h5>
                        <i className="far fa-clock"></i>
                        10 mins ago
                      </h5>
                    </div>
                  </div>
                  <div className="amount">
                    <div className="recieve">
                      <h3 style={{fontSize:"12px"}}>
                        <span style={{fontWeight:'400'}}> Ref. No.</span>KWKMN57576868
                      </h3>
                    </div>
                    <div className="give">
                      <p style={{color:"#37517E"}}> Negotiable <i class="fas fa-shopping-bag"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "underneath">
            <div className="aboutMe">
              <div className="have">
                <p>I Have</p>
                <h5>USD 1,000</h5>
              </div>
              <div className="have">
                <p>Fees</p>
                <h5>USD 100</h5>
              </div>
              <div className="have recipient">
                <p>Recipient Gets</p>
                <h5>USD 900</h5>
              </div>
            </div>

            <div className="country">
              <div className="have">
                <p>Country</p>
                <h5>United States</h5>
              </div>
              <div className="have recipient">
                <p>Currency</p>
                <h5>USD</h5>
              </div>
            </div>
            <div className="account">
              <p>Recieving Account</p>
              <div className="details">
                <h5>Bank Name:</h5>
                <h5>Access Bank</h5>
              </div>
              <div className="details">
                <h5>Account Number:</h5>
                <h5>234*****89</h5>
              </div>
              <div className="details">
                <h5>Account Name: </h5>
                <h5>Arnold Shittu</h5>
              </div>
              <div className="details">
                <h5>Location:</h5>
                <h5>Nigeria</h5>
              </div>
            </div>
            <div className="payment">
              {currentView === "initiate" ? (
                <div className="initiated">
                
                  <p>Send Your Payment</p>
                  <button onClick={proceedToCard}>Initiate Payment</button><br />
                  <span>Your payment is secured by our escrow system</span>
                </div>
              ) : currentView === "card" ? (
                <div className="payCard">
                  <h6>
                    {" "}
                    <i class="fas fa-angle-left" onClick={backToInit}></i> Select a payment option
                  </h6>
                  <div className="payment-image">
                    <img
                      src={IMAGES.MASTERCARD}
                      alt=""
                      onClick={proceedToSent}
                    />
                    <img src={IMAGES.VISA} alt="" />
                    <img src={IMAGES.OTHER} alt="" />
                  </div>
                </div>
              ) : currentView === "sent" ? (
                <div className="sentPayment">
                    <div className="recieve">
                        <p>Payment Sent</p>
                        <div>
                        <h2>USD 1,000</h2>
                        <span>on 11th May 2021</span>
                        </div>
                    </div>
                    <div className="sent">
                        <p>Payment Sent</p>
                        <h2>USD 1,000</h2>
                        <span>on 11th May 2021</span>
                    </div>

                    <div className="rate">
                        <p>Please rate your transacting partner for us to proceed to crediting your account</p>
                        <button onClick={proceedToRated}>Rate your partner</button>
                    </div>
                </div>
              ) : currentView === "rated" ? (
                <div className="ratedd">
                    <div className="sent">
                        <p>Payment Recieved</p>
                        <h2>NGN 4,000,000</h2>
                        <span>on 11th May 2021</span>
                    </div>

                    <div className="rate">
                        <p>Rated Partner</p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i><br />
                        <span>He's a good transacting partner</span>
                    </div>
                </div>
              ) : null}
            </div>
          </div>
          </div>

          <div className="col-md-6 recipi">

          <div className="PerInitiated" style={{marginBottom:"0",filter:'grayscale(0.1)'}}>
              <div className="head">
                <p  style={{backgroundColor:"#7BA9DA"}}>Recipient</p>
              </div>
              <div className="content">
                <div className="picture">
                  <div>
                    <div
                      className="pic"
                      style={{ backgroundImage: `url(${IMAGES.USER})` }}
                    ></div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="text">
                  <p>Transaction Recipient</p>
                  <h2>ALEXA OLUGBENGA IGBAYILOLA</h2>
                  <div className="transactionDetails">
                    <div className="from">
                      <p>From</p>
                      <h5>
                        <img src={IMAGES.NIGERIA} alt="" />
                        NG
                      </h5>
                    </div>
                    <div className="from">
                      <p>Rate</p>
                      <h5>420 NGN/USD</h5>
                    </div>
                    <div className="from">
                      <p>Acceptance Time</p>
                      <h5>
                        <i className="far fa-clock"></i>
                        10 mins ago
                      </h5>
                    </div>
                  </div>
                  <div className="amount">
                    <div className="recieve">
                      <h3 style={{fontSize:"12px"}}>
                        <span style={{fontWeight:'400'}}> Ref. No.</span>KWKMN57576868
                      </h3>
                    </div>
                    <div className="give">
                      <p style={{color:"#37517E"}}> Negotiable <i class="fas fa-shopping-bag"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "underneath">
            <div className="aboutMe">
              <div className="have">
                <p>I Have</p>
                <h5>NGN 4,000,000</h5>
              </div>
              <div className="have">
                <p>Fees</p>
                <h5>NGN 30,000</h5>
              </div>
              <div className="have recipient">
                <p>Recipient Gets</p>
                <h5>NGN 30,000</h5>
              </div>
            </div>

            <div className="country">
              <div className="have">
                <p>Country</p>
                <h5>Nigeria</h5>
              </div>
              <div className="have recipient">
                <p>Currency</p>
                <h5>NGN</h5>
              </div>
            </div>
           
            <div className="payment">
                <div className="sentPayment">
                    <div className="sent">
                        <p>Payment Sent</p>
                        <h2>USD 1,000</h2>
                        <span>on 11th May 2021</span>
                    </div>

                    <div className="rate">
                        <p>Payment Recieved</p>
                        <p>Awaiting Payment from <br /> KweekTransfer</p>
                    </div>
                </div>
              
            </div>
          </div>
          </div>
        </div>
      </Modal>
    </>
  );
};


export const TransactionModalAccepted = ({ data, onClose }) => {
    const [currentView, setCurrentView] = useState("initiate");

    const proceedToCard = () => {
        setCurrentView("card");
      };
      const proceedToSent = () => {
        setCurrentView("sent");
      };
      const proceedToRated = () => {
        setCurrentView("rated");
      };
      const backToInit = () => {
        setCurrentView("initiate");
      };

  return (
    <>
      <Modal visible={data ? true : false} width={1000} onCancel={onClose}>
          <header>
        <h2>ONGOING TRANSACTION</h2>
        <div className="userInfo row">
          <div className="col-md-3 col-6">
            <p>Rate</p>
            <h4>420 NGN/USD</h4>
          </div>
          <div className="col-md-3 col-6">
            <p>Reference Number</p>
            <h4>KWKMN57576868</h4>
          </div>
          <div className="col-md-3 col-6">
            <p>Acceptance Reference</p>
            <h4>KWKMN57576868</h4>
          </div>
          <div className="col-md-3 col-6">
            <p>Status</p>
            <h4>Pay-in initiated</h4>
          </div>
          <div className="col-md-12 col-6">
            <p>Negotiable</p>
           
          </div>
        </div>
    </header>
        <div className="row transact-modal">
        <div className="col-md-6 recipi">
          <div className="PerInitiated" style={{marginBottom:"0",filter:'grayscale(0.1)'}}>
              <div className="head">
                <p  style={{backgroundColor:"#7BA9DA"}}>Recipient</p>
              </div>
              <div className="content">
                <div className="picture">
                  <div>
                    <div
                      className="pic"
                      style={{ backgroundImage: `url(${IMAGES.USER})` }}
                    ></div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="text">
                  <p>Transaction Recipient</p>
                  <h2>ALEXA OLUGBENGA IGBAYILOLA</h2>
                  <div className="transactionDetails">
                    <div className="from">
                      <p>From</p>
                      <h5>
                        <img src={IMAGES.NIGERIA} alt="" />
                        NG
                      </h5>
                    </div>
                    <div className="from">
                      <p>Rate</p>
                      <h5>420 NGN/USD</h5>
                    </div>
                    <div className="from">
                      <p>Acceptance Time</p>
                      <h5>
                        <i className="far fa-clock"></i>
                        10 mins ago
                      </h5>
                    </div>
                  </div>
                  <div className="amount">
                    <div className="recieve">
                      <h3 style={{fontSize:"12px"}}>
                        <span style={{fontWeight:'400'}}> Ref. No.</span>KWKMN57576868
                      </h3>
                    </div>
                    <div className="give">
                      <p style={{color:"#37517E"}}> Negotiable <i class="fas fa-shopping-bag"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "underneath">
            <div className="aboutMe">
              <div className="have">
                <p>I Have</p>
                <h5>NGN 4,000,000</h5>
              </div>
              <div className="have">
                <p>Fees</p>
                <h5>NGN 30,000</h5>
              </div>
              <div className="have recipient">
                <p>Recipient Gets</p>
                <h5>NGN 30,000</h5>
              </div>
            </div>

            <div className="country">
              <div className="have">
                <p>Country</p>
                <h5>Nigeria</h5>
              </div>
              <div className="have recipient">
                <p>Currency</p>
                <h5>NGN</h5>
              </div>
            </div>
           
            <div className="payment">
                <div className="sentPayment">
                    <div className="sent">
                        <p>Payment Sent</p>
                        <h2>USD 1,000</h2>
                        <span>on 11th May 2021</span>
                    </div>

                    <div className="rate">
                        <p>Payment Recieved</p>
                        <p>Awaiting Payment from <br /> KweekTransfer</p>
                    </div>
                </div>
              
            </div>
          </div>
          </div>
          <div className="col-md-6 initiator">
            <div className="PerInitiated" style={{marginBottom:"0",filter:'grayscale(0.1)'}}>
              <div className="head">
                <p  style={{backgroundColor:"#7BA9DA"}}>Initiator</p>
              </div>
              <div className="content">
                <div className="picture">
                  <div>
                    <div
                      className="pic"
                      style={{ backgroundImage: `url(${IMAGES.USER})` }}
                    ></div>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="text">
                  <p>Transaction Initiator</p>
                  <h2>ALEXA OLUGBENGA IGBAYILOLA</h2>
                  <div className="transactionDetails">
                    <div className="from">
                      <p>From</p>
                      <h5>
                        <img src={IMAGES.USA} alt="" />
                        US
                      </h5>
                    </div>
                    <div className="from">
                      <p>Rate</p>
                      <h5>420 NGN/USD</h5>
                    </div>
                    <div className="from">
                      <p>Initiated Time</p>
                      <h5>
                        <i className="far fa-clock"></i>
                        10 mins ago
                      </h5>
                    </div>
                  </div>
                  <div className="amount">
                    <div className="recieve">
                      <h3 style={{fontSize:"12px"}}>
                        <span style={{fontWeight:'400'}}> Ref. No.</span>KWKMN57576868
                      </h3>
                    </div>
                    <div className="give">
                      <p style={{color:"#37517E"}}> Negotiable <i class="fas fa-shopping-bag"></i></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "underneath">
            <div className="aboutMe">
              <div className="have">
                <p>I Have</p>
                <h5>USD 1,000</h5>
              </div>
              <div className="have">
                <p>Fees</p>
                <h5>USD 100</h5>
              </div>
              <div className="have recipient">
                <p>Recipient Gets</p>
                <h5>USD 900</h5>
              </div>
            </div>

            <div className="country">
              <div className="have">
                <p>Country</p>
                <h5>United States</h5>
              </div>
              <div className="have recipient">
                <p>Currency</p>
                <h5>USD</h5>
              </div>
            </div>
            <div className="account">
              <p>Recieving Account</p>
              <div className="details">
                <h5>Bank Name:</h5>
                <h5>Access Bank</h5>
              </div>
              <div className="details">
                <h5>Account Number:</h5>
                <h5>234*****89</h5>
              </div>
              <div className="details">
                <h5>Account Name: </h5>
                <h5>Arnold Shittu</h5>
              </div>
              <div className="details">
                <h5>Location:</h5>
                <h5>Nigeria</h5>
              </div>
            </div>
            <div className="payment">
              {currentView === "initiate" ? (
                <div className="initiated">
                
                  <p>Send Your Payment</p>
                  <button onClick={proceedToCard}>Initiate Payment</button><br />
                  <span>Your payment is secured by our escrow system</span>
                </div>
              ) : currentView === "card" ? (
                <div className="payCard">
                  <h6>
                    {" "}
                    <i class="fas fa-angle-left" onClick={backToInit}></i> Select a payment option
                  </h6>
                  <div className="payment-image">
                    <img
                      src={IMAGES.MASTERCARD}
                      alt=""
                      onClick={proceedToSent}
                    />
                    <img src={IMAGES.VISA} alt="" />
                    <img src={IMAGES.OTHER} alt="" />
                  </div>
                </div>
              ) : currentView === "sent" ? (
                <div className="sentPayment">
                    <div className="recieve">
                        <p>Payment Sent</p>
                        <div>
                        <h2>USD 1,000</h2>
                        <span>on 11th May 2021</span>
                        </div>
                    </div>
                    <div className="sent">
                        <p>Payment Sent</p>
                        <h2>USD 1,000</h2>
                        <span>on 11th May 2021</span>
                    </div>

                    <div className="rate">
                        <p>Please rate your transacting partner for us to proceed to crediting your account</p>
                        <button onClick={proceedToRated}>Rate your partner</button>
                    </div>
                </div>
              ) : currentView === "rated" ? (
                <div className="ratedd">
                    <div className="sent">
                        <p>Payment Recieved</p>
                        <h2>NGN 4,000,000</h2>
                        <span>on 11th May 2021</span>
                    </div>

                    <div className="rate">
                        <p>Rated Partner</p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i><br />
                        <span>He's a good transacting partner</span>
                    </div>
                </div>
              ) : null}
            </div>
          </div>
          </div>

       
        </div>
      </Modal>
    </>
  );
};

export const CreateInvite = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentView, setCurrentView] = useState("begin");

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const proceedToInfo = () => {
    setCurrentView("info");
  };
  const proceedToSuccess = () => {
    setCurrentView("success");
  };

  return (
    <>
      <div id="create" className="card two" onClick={showModal}>
        <h3>
          Create
          <br /> New Invite
        </h3>
        <div>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
      <Modal visible={isModalVisible} width={800} onCancel={handleCancel}>
        <div className="row rate">
          {currentView === "begin" ? (
            <>
              <div className="col-md-8">
                <div className="calculator" style={{marginLeft:"-50px"}}>
                  <Panel />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <p>To begin, please input your rate and amount you have.</p>
                  <button onClick={proceedToInfo}>Continue</button>
                </div>
              </div>
            </>
          ) : currentView === "info" ? (
            <>
              <div className="info-calc">
                <div className="calculator" style={{marginLeft:"-50px"}}>
                  <Panel />
                </div>
              </div>
              <div className="row details-form">
                <div className="col-md-6">
                  <p>Country</p>
                  <form>
                    <select className="form-control">
                      <option value>Which Country are you sending from?</option>
                    </select>
                    <select className="form-control">
                      <option>Which Country are you sending to?</option>
                    </select>
                    <div className="form-group forgot-password">
                      <p style={{ marginTop: "15px", marginBottom: "0" }}>
                        Negotiation
                      </p>
                      <div style={{ display: "flex" }}>
                        <input type="checkbox" />
                        <label style={{ marginTop: "5px", marginLeft: "10px" }}>
                          Allow negotiation{" "}
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <p>Bank Details</p>
                  <form>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Bank Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Account Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Account Number"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  <input type="checkbox" />
                  <label>Accept Terms and Conditions </label>
                </div>
                <button onClick={proceedToSuccess}>Create Invite</button>
              </div>
            </>
          ) : currentView === "success" ? (
            <div className="containSuccess">
                <div className="blackBgSuccess">
                    <div className="message">
                    <i class="fas fa-check-circle"></i><br />
                    <h5>Invite successfully created</h5>
                    <p>Please check your Initiated invites for more details or click continue below</p>
                    <Link activeClassName="active"  to={APP_PATHS.URLS.DASHBOARD.INVITE}><button>Continue</button></Link>
                    </div>
                </div>
            </div>
          ): null}
        </div>
      </Modal>
    </>
  );
};
