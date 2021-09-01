import React from "react";
import { Link } from 'react-router-dom';
import { APP_PATHS } from '../../../constants/appPath';
import loginImage from "../../../assets/image/login.png"
import google from "../../../assets/image/google.png"
import "./styles.scss";

const LoginView = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 hero-image">
              <img src={loginImage} alt="" />
              <p>welcome to the future of secured FX transactions</p>
          </div>
          <div className="col-md-8">
            <div className="form-div">
              <h2>Welcome Back</h2>
              <p>
                Please enter your <b>email</b> or <b>username</b> and
                <br /> <b>password</b> to login.
              </p>
              <form>
                <div className="form-group">
                  <label>Email or Username</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email or Username"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group forgot-password">
                  <div>
                    <input type="checkbox" />
                    <label>Remember me</label>
                  </div>
                  <p>Forgot Password</p>
                </div>
                <button>Login</button>
              </form>
              <div className="signUpWithGoogle">
                <h6>
                  Do not have an account? <Link
                to={APP_PATHS.URLS.AUTH.REGISTER}><span>Sign Up</span></Link>
                </h6>
                <div className="horizontal-line">
                  <div className="firstLine"></div>
                  <p>Or</p>
                  <div className="firstLine"></div>
                </div>
                <button className="signUpGoogle"> <img src={google} alt="" />Sign in with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>{APP_PATHS.NAMES.AUTH.LOGIN} page</h1> */}
    </>
  );
};

export default LoginView;
