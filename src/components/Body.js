
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

    
 const [listOfRestaurant,setListOfRestaurant]=useState(resList);


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterdList=listOfRestaurant.filter((res)=>res.rating>4);
                    setListOfRestaurant(filterdList);
                }}>Top Rate Restaurants</button>
            </div>
            <div className="res-container">
            {listOfRestaurant.map((res)=>(
                    <RestaurantCard key={res.id}  resData={res}/>
                ))} 
            </div>
        </div>
    )
}

export default Body;