import React, { useState } from "react";
import "../style.scss";

export const ChangePassword = () => {
  const [currentView, setCurrentView] = useState("default");

  const proceedToPasscode = () => {
    setCurrentView("passcode");
  };
  const proceedToOtp = () => {
    setCurrentView("otp");
  };
  const proceedToSuccess = () => {
    setCurrentView("success");
  };
  const backToDefault = () => {
    setCurrentView("default");
  };
  return (
    <>
      {currentView === "default" ? (
        <button onClick={proceedToPasscode} className="defaultButton">
          Change Password 
        </button>
      ) : currentView === "passcode" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Password</button>
          <form>
            <input type="password" placeholder="Enter old password" />
            <input type="password" placeholder="Enter new password" />
            <input type="password" placeholder="Enter new password" />
            <button onClick={proceedToOtp}>Change</button>
          </form>
        </div>
      ) : currentView === "otp" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Password</button>
          <form>
            <input type="number" placeholder="Enter OTP sent your phone" />
            <button onClick={proceedToSuccess}>Change</button>
          </form>
        </div>
      ) : currentView === "success" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Password</button>
          <div className="input">
          <div>
            <i className="fas fa-check-circle"></i>
            <p>Success!</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export const ChangeEmail = () => {
  const [currentView, setCurrentView] = useState("default");

  const proceedToPasscode = () => {
    setCurrentView("passcode");
  };
  const proceedToOtp = () => {
    setCurrentView("otp");
  };
  const proceedToSuccess = () => {
    setCurrentView("success");
  };
  const backToDefault = () => {
    setCurrentView("default");
  };
  return (
    <>
      {currentView === "default" ? (
        <button onClick={proceedToPasscode} className="defaultButton">
          Change Email
        </button>
      ) : currentView === "passcode" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Email</button>
          <form>
            <input type="email" placeholder="Enter old email" />
            <input type="email" placeholder="Enter new email" />
            <input type="email" placeholder="Enter new email" />
            <button onClick={proceedToOtp}>Change</button>
          </form>
        </div>
      ) : currentView === "otp" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Email</button>
          <form>
            <input type="number" placeholder="Enter OTP sent your phone" />
            <button onClick={proceedToSuccess}>Change</button>
          </form>
        </div>
      ) : currentView === "success" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Email</button>
          <div className="input">
              <div>
            <i class="fas fa-check-circle"></i>
            <p>Success!</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export const ChangeNumber = () => {
    const [currentView, setCurrentView] = useState("default");

  const proceedToPasscode = () => {
    setCurrentView("passcode");
  };
  const proceedToOtp = () => {
    setCurrentView("otp");
  };
  const proceedToSuccess = () => {
    setCurrentView("success");
  };
  const backToDefault = () => {
    setCurrentView("default");
  };
  return(
      <>
        {currentView === "default" ? (
        <button onClick={proceedToPasscode} className="defaultButton">
          Change Number
        </button>
      ) : currentView === "passcode" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Email</button>
          <form>
            <input type="number" placeholder="Enter old number" />
            <input type="number" placeholder="Enter new number" />
            <input type="number" placeholder="Enter new number" />
            <button onClick={proceedToOtp}>Change</button>
          </form>
        </div>
      ) : currentView === "otp" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Number</button>
          <form>
            <input type="number" placeholder="Enter OTP sent your phone" />
            <button onClick={proceedToSuccess}>Change</button>
          </form>
        </div>
      ) : currentView === "success" ? (
        <div className="show">
          <button onClick={backToDefault}>Change Number</button>
          <div className="input">
          <div>
            <i class="fas fa-check-circle"></i>
            <p>Success!</p>
            </div>
          </div>
        </div>
      ) : null}
      </>
  )
};
