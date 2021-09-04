import React, { useState } from "react";
//import { IoPersonOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png"
import { SidebarData } from "../data/SideBarData";
import { APP_PATHS } from '../constants/appPath';

export const SideBar = () => {
  return (
      <div className="SideMenu">
        <img src={logo} alt="" className="logo"/>
      <nav>
        {SidebarData.map((item, index) => {
              return (
                <div className="NavItem" key={index}>
                  <NavLink activeClassName="active"  to={item.path}>
                  <img src={item.icon} alt="" />
                    {item.title}
                  </NavLink>
                </div>
              );
            })}
            <Link activeClassName="active"  to={APP_PATHS.URLS.AUTH.LOGOUT}><button>Log Out <i class="fas fa-sign-out-alt"></i></button></Link>
        </nav>
        
      </div>

    //   {/* <MobileBottomMenu>
    //         <li><NavLink to="/dashboard"><img src={dashboard} alt="" /><br/>Dashboard</NavLink></li>
    //             <li><NavLink to="/my-wallet"><img src={wallet} alt="" /><br/>Wallets</NavLink></li>
    //             <li><NavLink to="/project-fund"><img src={investment} alt="" /><br/>Project Fund</NavLink></li>
    //             <li><NavLink to="/my-savings"><img src={savings} alt="" /><br/>Savings</NavLink></li>
    //             <li><NavLink to="/my-loan"><img src={loan} alt="" /><br/>Loan</NavLink></li>
    //         </MobileBottomMenu> */}
  );
};

