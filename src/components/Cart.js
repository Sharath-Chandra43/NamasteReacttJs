
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import  { clearCart}  from "../utils/cartSlice.js";

const cart=()=>{
    
    const cartItems=useSelector((store)=>store.cart.items);

   console.log(cartItems)

   const dispatch=useDispatch();

   const handleClearCart =() =>{
      dispatch(clearCart());

   }
   

    return(
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold ">Cart</h1>

            <div className="w-6/12 m-auto p-2  border mt-8">
                <ItemList items={cartItems} />
            </div>
            {cartItems.length===0 &&<h1 className="font-medium  font-extrabold  font-serif p-10 bg-transparent text-red-500">Cart is Empty</h1>}

            <div>
                <button className="bg-black hover:bg-red-700 text-white font-bold py-1 px-2 border border-blue-700 rounded flex flex-auto"
                onClick ={handleClearCart}
                >Clear Cart</button>
            </div>
        </div>
    )
}

export default cart;