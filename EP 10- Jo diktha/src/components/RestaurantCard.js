import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
  const {resData}=props;

  const {
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla,
  } =resData?.info;


    return (
      <div className="m-4 p-4 w-[200px] h-auto border border-solid black shadow-lg rounded-lg hover:bg-gray-800 hover:text-white">
        <img src= {CDN_URL + cloudinaryImageId} alt="res-logo" className="rounded-lg"/>
        <div className="flex-col flex-wrap ">
        <h2 className="font-bold py-2 text-lg">{name}</h2>
        <h3 className="mr-5 font-medium  ">{cuisines.join(",")}</h3>
        <h3 className="rating font-medium  ">{avgRating}</h3>
        <h3 className="cost font-medium  ">{costForTwo}</h3>
        <h4>{sla.slaString}</h4>
        </div>
      </div>
    );
  };
  export default RestaurantCard;