

import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [btnName,setBtnName]=useState("Login");

    const OnlineStatus=useOnlineStatus();

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg ">
            <div className="logo-container">
                <img src={LOGO_URL} className="w-60" />
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ml-4 ">
                    <li className="px-4">OnlineStatus:{OnlineStatus ? "✅":"🔴"} </li>
                    <li className="link-text"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
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

                                                    