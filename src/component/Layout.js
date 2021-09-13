import React, {useState} from "react";
// import Header from "./Header";
import notification from "../assets/image/notification.png";
import logo from "../assets/image/logo.png"
import { IMAGES} from "../constants/index";
import { Link, NavLink } from "react-router-dom";
import { APP_PATHS } from '../constants/appPath';
import "./styles.scss"
import { SidebarData } from "../data/SideBarData";

const Layout = ({ children }) => {

  const [openNav, setNav] = useState(false);
  const close = () => {
    setNav(false);
  }
  const open = () => {
    setNav(true);
  }
  return (
    <>
      
      <div className="container-fluid" style={{backgroundColor:"#F6F6F6"}}>
        <div className="row">
          <div className="col-md-2" style={{padding:"0"}}>
            <div className={openNav ? 'SideMenu': 'collapsed SideMenu'}>
              <img src={logo} alt="" className="logo"/>
              <i className="fas fa-times" onClick={close}></i>
              <nav>
                {SidebarData.map((item, index) => {
                      return (
                        <div className="NavItem" key={index}>
                          <NavLink activeClassName="active"  to={item.path}>
                          <i className={`fas fa-${item.icon}`}></i>
                            {item.title}
                          </NavLink>
                        </div>
                      );
                    })}
                    <Link activeClassName="active"  to={APP_PATHS.URLS.AUTH.LOGOUT}><button>Log Out <i class="fas fa-sign-out-alt"></i></button></Link>
                </nav>
            </div>
          </div>
          <div className="col-md-10" style={{padding:"0"}}>
            <div className="Head">
              <i className="fas fa-bars toggle-menu" onClick={open}></i>
              <div className="username">
                  <h2>Howdy, <span>Adebowale</span></h2>
                  <p>Welcome Back!</p>
              </div>
              <div className="noti">
                  <img src={notification} alt="" />
                  <Link activeClassName="active"  to={APP_PATHS.URLS.DASHBOARD.PROFILE}><div className="profile-pic" style={{backgroundImage:`url(${IMAGES.USER})`}}></div></Link> 
              </div>
            </div>
            <div className="Content">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;