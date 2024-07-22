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
      <div className="m-4 p-4 w-[250px] h-auto border border-solid black shadow-lg rounded-lg hover:bg-gray-800 hover:text-white overflow-hidden">
        <img src= {CDN_URL + cloudinaryImageId} alt="res-logo" className="rounded-lg w-[180px] h-auto"/>
        <div className="flex-col flex-wrap ">
        <h2 className="font-bold py-2 text-lg">{name}</h2>
        <h3 className="mr-5 font-medium ">{cuisines.join(",")}</h3>
        <h3 className="rating font-medium  ">{avgRating}</h3>
        <h3 className="cost font-medium  ">{costForTwo}</h3>
        <h4>{sla.slaString}</h4>
        </div>
      </div>
    );
  };



  //Higher order component 
  
  //input - RestaurantCard => RestaurantCardPromoted


  export const withOpendLabel =(RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
          <label className="bg-gray-800 text-white rounded-lg m-2 p-2 absolute hover:bg-green-600">Opend</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  }
  
  export default RestaurantCard;