import React, {useState} from "react";
import Header from "./Header";
import {Link} from 'react-router-dom'
import {SideBar} from "./SideBar";
import "./styles.scss"
// import hamburger from "../images/Closed.svg"
// import {MobileSideMenu, Nav, NavItem} from "../styles/ComponentStyles";
// import { SidebarData } from "../data/SideBarData";

const Layout = ({ children }) => {

  const [sideBar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sideBar);
  return (
    <>
      
      <div className="container-fluid" style={{backgroundColor:"#F6F6F6"}}>
      <div className="row">
        <div className="col-md-2" style={{padding:"0"}}>
          <SideBar />
        </div>
        <div className="col-md-10" style={{padding:"0"}}>
        <Header />
          <div className="Content">
            {/* <MobileNavIcon> 
                <img src={hamburger} onClick={showSidebar} alt="" />
            </MobileNavIcon>

            <MobileSideMenu className={sideBar ? 'nav-menu active' : 'nav-menu'}>
          <div className="cancel" onClick={showSidebar}>
            <i className="fas fa-times"></i>
          </div>
        <Nav>
        {SidebarData.map((item, index) => {
              return (
                <NavItem key={index}>
                  <Link to={item.path}>
                  <img src={item.icon} alt="" />
                    {item.title}
                  </Link>
                </NavItem>
              );
            })}
        </Nav>
      </MobileSideMenu> */}

          {children}
          </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default Layout;