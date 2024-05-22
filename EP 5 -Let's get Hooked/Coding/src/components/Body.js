
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = resList.filter((res) =>
      res.name.includes(searchText)
    );
    return filterData;
  }

const Body=()=>{

    

 const [restaurants,setRestaurant]=useState(resList);
 const [searchText,setSearchText]=useState("");


    return(
      <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            
            const data = filterData(searchText, restaurants);
          
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {resList.map((res) => {
          return (
            <RestaurantCard {...res.data} key={res.id} />
          );
        })}
      </div>
    </>
    )
}

export default Body;