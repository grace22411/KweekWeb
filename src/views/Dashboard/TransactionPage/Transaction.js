import React, { useState } from "react";
import Layout from "../../../component/Layout";
import "./styles.scss";
import "../global.scss";
import TransactionHistory from "./comp/TransactionHistory";
import { OngoingTransactionAccept, OngoingTransactionInit } from "./comp/OngoingTransaction";

const Transactions = () => {
  const [currentView, setCurrentView] = useState("ongoing");

  const proceedToHistory = () => {
      setCurrentView("history");
  };
  const proceedToOngoing = () => {
    setCurrentView("ongoing");
};

  return (
    <>
      <Layout>
        <div className="page">
          <div className="Transac container">
            <h1>My Transactions</h1>
            <div className="cardie row">
              <div className="col-md-4">
                <div className="card one" onClick={proceedToOngoing}>
                    <h3>Ongoing<br /> Transactions</h3>
                    <div>
                    <i className="far fa-hourglass"></i>
                    </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card two" onClick={proceedToHistory}>
                <h3>Transaction<br /> History</h3>
                <div>
                <i className="fas fa-history"></i>
                </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card two" >
                <h3>Create<br /> New Invite</h3>
                <div>
                <i className="fas fa-plus-circle"></i>
                </div>
                </div>
              </div>
            </div>
            <div> 
              {currentView === "ongoing" ? (
                <div className="split row">
                  <div className="col-md-6">
                        <OngoingTransactionInit />
                  </div>
                  <div className="col-md-6">
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
