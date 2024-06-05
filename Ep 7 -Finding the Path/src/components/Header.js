

import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{

    const [btnName,setBtnName]=useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="link-text"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link-text">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="link-text">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="link-text">
                        <Link >Cart</Link>
                    </li>
                    <button  className="login-btn" 
                    onClick={()=>{
                        btnName==="Login"?
                        setBtnName("Logout"):setBtnName("Login");
                    }}
                    >{btnName}</button>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;

                                                    