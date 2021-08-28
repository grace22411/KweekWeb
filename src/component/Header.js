import React from "react";
import notification from "../assets/image/notification.png";
import "./styles.scss"



function Header() {

  return (
    <>
      <div className="Head">
         <div className="username">
            <h2>Howdy, <span>Nelson</span></h2>
            <p>Welcome Back!</p>
        </div>
        <div className="noti">
            <img src={notification} alt="" />
           <div className="profile-pic">

           </div>
        </div>
           
        
      </div>
    </>
  );
}

export default Header;
