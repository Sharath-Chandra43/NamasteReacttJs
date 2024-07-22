
import {useDispatch}  from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import {CDN_URL} from "../utils/constants.js";
const ItemList=({items})=>{
    //console.log(items);
 
   const dispatch=useDispatch();

  const handleAddItem=(item)=>{
     dispatch(addItem(item));
  }
 


    return(
           <div>    
                {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2  border-gray-400 text-left border-b">
                    <div className="flex justify-between" >
                    <div className="py-2 w-19/12" > 
                        <span className="font-serif text-left" >
                             {item.card.info.name}   
                        </span>
                       <span  className="text-left mr-2">
                            - ₹ {item.card.info.price / 100}   
                        </span>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div/>
        
                    <div className="flex justify-end">
                    <img src={ CDN_URL+ item.card.info.imageId} className="w-[260px]" />
                    <div className="absolute">
                        <button className="   bg-black hover:bg-red-700 text-white font-bold py-1 px-2 border border-blue-700 rounded" 
                        onClick={()=> handleAddItem(item)}
                        >Add +</button>
                        </div>
                    </div>
                    </div>
                   
                </div>
            
            ))}
        </div>
    )
}

export default ItemList