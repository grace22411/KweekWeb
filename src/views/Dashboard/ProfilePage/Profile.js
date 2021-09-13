import React from "react";
import Layout from "../../../component/Layout";
import "../global.scss";
import { ChangeEmail, ChangeNumber, ChangePassword } from "./comp/ChangeProfile";
import "./style.scss";

const Profile = () => {
  return (
    <>
      <Layout>
        <div className="page">
          <div className="profilePage">
            <h2>My Profile</h2>
            <div className="profile">
              <div className="details row">
                <div className="name col-md-2 col-7">
                  <p>First Name</p>
                  <h6>Adebowale</h6>
                </div>
                <div className="name col-md-2 col-5">
                  <p>Last Name</p>
                  <h6>Emmanuek</h6>
                </div>
                <div className="name col-md-3 col-7">
                  <p>Phone number</p>
                  <h6>+2347068946099</h6>
                </div>
                <div className="name col-md-2 col-5">
                  <p>Country</p>
                  <h6>NG</h6>
                </div>
                <div className="name col-md-1 col-7">
                  <p>State</p>
                  <h6>Oyo</h6>
                </div>
                <div className="name col-md-2 col-5">
                  <p>Zip Code</p>
                  <h6>234154</h6>
                </div>
              </div>
              <div className="other">
                <p className="mail">
                  Email <span>Confirmation required</span>
                </p>
                <h5>adeyemojay@gmail.com</h5>
                <p className="resend">If you didn't receive our email, please click <span>Resend</span></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                    <ChangePassword />
              </div>
              <div className="col-md-4">
                    <ChangeEmail />
              </div>
              <div className="col-md-4">
                    <ChangeNumber />
              </div>
          </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
