import { useState } from "react"
import ItemList from "./ItemsList.js"

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    
    
    const handleClick=()=>{
        setShowIndex();
    }
  

    return (
       <div>
          <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6 ">
             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-sans font-medium text-lg">{data.title}({data.itemCards.length})</span>   
                <span className="text-black text-lg">🔽</span>
            </div>


          {showItems && <ItemList items={data.itemCards} />}

        </div>
        </div>
        )
}

export default RestaurantCategory