
import ShimmerUI from "./ShimmerUI.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";


const RestaurantMenu =()=>{

    const {resId}=useParams()

   const resInfo=useRestaurantMenu(resId);


   
    if(resInfo===null) return <ShimmerUI />;
    
   const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
     
const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   // const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    //    console.log(itemCards);
 

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map(item=>(
                    <li key={item.card.info.id }>
                        {item.card.info.name}-{"RS."}
                        {item.card.info.price /100 || item.card.info.defaultPrice /100}</li>
            ))} 
            </ul>
        </div>
    );
};

export default RestaurantMenu;