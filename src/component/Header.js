import React from "react";
import notification from "../assets/image/notification.png";
import "./styles.scss"
import { IMAGES} from "../constants/index";
import { Link} from "react-router-dom";
import { APP_PATHS } from '../constants/appPath';
<<<<<<< HEAD
import { SideBar } from "./SideBar";
=======
>>>>>>> 5ef75fbd3639bd5b818ad85401684580cfcc179c


function Header() {

  const openNav = () => {
    return (
      <SideBar nav={true} />
    )
  }

  return (
    <>
      <div className="Head">
        <i className="fas fa-bars toggle-menu" onClick={openNav}></i>
         <div className="username">
            <h2>Howdy, <span>Adebowale</span></h2>
            <p>Welcome Back!</p>
        </div>
        <div className="noti">
            <img src={notification} alt="" />
            <Link activeClassName="active"  to={APP_PATHS.URLS.DASHBOARD.PROFILE}><div className="profile-pic" style={{backgroundImage:`url(${IMAGES.USER})`}}></div></Link> 
        </div>
           
        
      </div>
    </>
  );
}

export default Header;
