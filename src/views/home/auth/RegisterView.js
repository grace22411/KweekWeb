import React from 'react';
import registerImage from "../../../assets/image/register.png"
import { Link } from 'react-router-dom';
import { APP_PATHS } from '../../../constants/appPath';
import google from "../../../assets/image/google.png"
import "./styles.scss";

export const RegisterView = () => {
    return (
        <>
         <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 hero-image">
              <img src={registerImage} alt="" />
              <p>welcome to the future of secured FX transactions</p>
          </div>
          <div className="col-md-8">
            <div className="form-div">
              <h2>Sign Up</h2>
              <p>
              Hi, we would love to know you
              </p>
              <form>
                <div className="form-group">
                  <label>First Name*</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email or Username"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name*</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address*</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
                {/* <div className="form-group forgot-password">
                  <div>
                    <input type="checkbox" />
                    <label>Remember me</label>
                  </div>
                  <p>Forgot Password</p>
                </div> */}
                <button>Continue</button>
              </form>
              <div className="signUpWithGoogle">
                <h6>
                Already have an account? <Link
                to={APP_PATHS.URLS.AUTH.LOGIN}><span>Sign In</span></Link>
                </h6>
                <p>Your Info is safely secured</p>
                <div className="horizontal-line">
                  <div className="firstLine"></div>
                  <p>Or</p>
                  <div className="firstLine"></div>
                </div>
                <button className="signUpGoogle"> <img src={google} />Sign up with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        </>
        
    )
}

export default RegisterView;