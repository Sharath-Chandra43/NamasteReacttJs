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
      <div className="res-card">
        <img src= {CDN_URL + cloudinaryImageId} alt="res-logo" className="res-logo"/>
        <h2 className="name">{name}</h2>
        <h3 className="cuisines">{cuisines.join(",")}</h3>
        <h3 className="rating">{avgRating}</h3>
        <h3 className="cost">{costForTwo}</h3>
        <h4>{sla.slaString}</h4>

      </div>
    );
  };
  export default RestaurantCard;