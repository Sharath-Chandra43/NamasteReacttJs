

import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

import ShimmerUI from "./ShimmerUI.js";

import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant,setFilterdReastaurant]=useState([]);

  const [searchText, setSearchText] = useState("");

  

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json =await data.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterdReastaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    



  return listOfRestaurants.length===0 ? <ShimmerUI/> :(
    <>
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
            }} />
              <button 
              onClick={()=>{

            const filterRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilterdReastaurant(filterRestaurant);

            }}
              
              >Search</button>
            
          </div>
          <button className="filter-btn" onClick={()=>{
            const filterList=listOfRestaurants.filter(
              (res)=>res.avgRating > 4.4
            );
            setListOfRestaurants(filterList);
          }}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
      {filterRestaurant.map((restaurant) => {
          return <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link>;
        })}
      </div>
    </>
  );
};

export default Body;