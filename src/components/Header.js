

import {LOGO_URL} from "../utils/constants";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnName,setBtnName]=useState("Login");

    const OnlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext); 
  //  console.log(loggedInUser);

// Subscribing to the store using a selector

  const cartItems=useSelector((store)=>store.cart.items);
  
    return(
        <div className="flex justify-between p-3 m-1 bg-pink-100 shadow-lg p-16">
            <div className="logo-container">
                <img src={LOGO_URL} className="w-[120px]" />
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
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart({cartItems.length} items)
                        
                        </Link>
                    </li>
                  

                    <button  className="login-btn" 
                    onClick={()=>{
                        btnName==="Login"?
                        setBtnName("Logout"):setBtnName("Login");
                    }}
                    >{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;

                                                    