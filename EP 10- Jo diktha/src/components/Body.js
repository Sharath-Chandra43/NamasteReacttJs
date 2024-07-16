
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

import ShimmerUI from "./ShimmerUI.js";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";


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

    
  const OnlineStatus=useOnlineStatus();

  if (OnlineStatus===false) return <h1>Looks like You're Offline !!! Please check Your Internet connection</h1>
    console.log(OnlineStatus);

  return listOfRestaurants.length===0 ? <ShimmerUI/> :(
      <><div className="body">
      <div className="filter flex  items-start ">
        <div className=" m-4 p-4  ">
          <input type="text" className="border border-soild border-black" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          } } />
          <button className="bg-orange-300 m-4 px-4 py-2 rounded-lg"
            onClick={() => {

              const filterRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              setFilterdReastaurant(filterRestaurant);

            } }

          >Search</button>
        </div>
      
      <div className="search m-4 p-4 ">
        <button className="bg-gray-300 m-4 px-4 py-2 rounded-lg" onClick={() => {
          const filterList = listOfRestaurants.filter(
            (res) => res.avgRating > 4.4
          );
          setListOfRestaurants(filterList);
        } }>
          Top Rated Restaurants
        </button>
      </div>
      </div>
    </div><div className="flex flex-wrap mb-4">
        {filterRestaurant.map((restaurant) => {
          return <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}> <RestaurantCard resData={restaurant} /> </Link>;
        })}
      </div><div /></>
  );
};

export default Body;