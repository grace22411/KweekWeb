import React, { useState, useEffect } from "react";
import Layout from "../../../component/Layout";
import "./styles.scss";
import "../global.scss";
import TransactionHistory from "./comp/TransactionHistory";
import { OngoingTransactionAccept, OngoingTransactionInit } from "./comp/OngoingTransaction";
import { CreateInvite } from "../../../component/Modal";

const Transactions = () => {
  const [currentView, setCurrentView] = useState("ongoing");
  

  const proceedToHistory = () => {
      setCurrentView("history");
      document.querySelector('#ongoing').className = "card two";
      document.querySelector('#create').className = "card two";
      document.querySelector('#history').className = "card two active";
  };
  const proceedToOngoing = () => {
    setCurrentView("ongoing");
    document.querySelector('#history').className = "card two";
    document.querySelector('#create').className = "card two";
    document.querySelector('#ongoing').className = "card two active";
  };
 
  useEffect(() => {
    document.querySelector('#ongoing').className = "card two active";
  }, []);

  return (
    <>
      <Layout>
        <div className="page">
          <div className="Transac container">
            <h1>My Transactions</h1>
            <div className="cardie row">
              <div className="col-md-4">
                <div id="ongoing" className="card one" onClick={proceedToOngoing}>
                    <h3>Ongoing<br /> Transactions</h3>
                    <div>
                    <i className="far fa-hourglass"></i>
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div id="history" className="card two" onClick={proceedToHistory}>
                  <h3>Transaction<br /> History</h3>
                  <div>
                  <i className="fas fa-history"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                  <CreateInvite />
              </div>
            </div>
            <div> 
              {currentView === "ongoing" ? (
                <div className="split row">
                  <div className="col-md-6">
                        <OngoingTransactionInit />
                  </div>
                  <div className="col-md-6 right-side">
                        <OngoingTransactionAccept />
                  </div>
                </div>
              ) : currentView === "history" ? (
                <TransactionHistory setCurrentView={setCurrentView} />
              ) : null}
            </div>
          </div>
        </div>
        
      </Layout>
    </>
  );
};

export default Transactions;
