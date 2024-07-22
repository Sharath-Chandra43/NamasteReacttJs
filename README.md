two types of Export/Import 

-Default Export/Import

export default Component;
import Component from "path" 

-Name Export/Import 

export const Component;
import {Component} from "path";

# React Hooks 
(normal JS utility functions)

-useState() - superpowerful state variables in react
-useEffect()

state?
when ever a state variable update react re renders the component

Reconciliation Algorithum(react fiber)?
A)

virtual DOM ?
virutal DOM is a representation of actual DOM


# 2 types Routing in web apps
 -client side Routing
 -Server Side Routing


 # Redux Toolkit 

 when you click a button it "dispatches" An "Action" a which calls a "reducer" function which updates the "slice" of the "Redux store" then slice will be updated ....

 To read the data from the store we use a SELECTOR and these selector will update the data in cart

 this phenomenon is known as "Subscribing to the Store"

              dispatch    reducer
click ADD --> Action--->Function--- update store  | 

     Updated Cart -------- Selector--------------|'

### Redux Toolkit ###
 -Install @reduxjs/toolkit and react Redux
 -Build our store
 -connect our store to our app
 -Slice (cartSlice)
 -dispatch(action)
 -Selector

                

### Build store ###
-create appStore in utils 
 const appStore =configureStore();

### Adding Store to Application 
 
 To add store to application 

 to Provide Store to our application 

 import "Provider" from react-redux 

 wrap up the Provider around you main application

 <Provider store={appStore}> 
 our whole application (App.js)
 </Provider>



### Creating CartSlice ### 

TO create a js file in uitls

cartSlice.js

to create Slice we use "createSlice"

import {createSlice} from "@reduxjs/toolkit"


first configuration is to create name in slice
and second connfi is to create intial state

then 
we will a write reducer functions
we create actions and state in reducer function 
actions like addItem ,removeItem,clearItem 
this reducer funtion actions modify the cart 
then we will export of our actions and reducers

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
    },
});

export const {addItem,removeItem,clearItem}=cartSlice.actions
export default carSlice.reducer


## Adding slice to Store ##

 in appStore 

import cartReducer fromm cartSlice  

const appStore=configureStore ({
     reducer:{
          cart :cartReducer
     },
}) ;

#  We use "Selector" to subscribing to the store 

we have a Selector Hook to subscribe 

useSelector 

this hook basically gives us acceses to our store  

const cartItems =useSelector=((store)=> store.cart.items);

### Dispatch an Action ### 

there is Dispatch Hook to Dispatch an Action  

  ### useDispatch 
  import {useDispatch } from "react-redux" 

  const handleAddItem=()=>{
     dispacth(addItem(cartItem))
  }


### Reading Cart items 
we will subsccribing to storre 

const cartItem=useSelector((store)=>store.cart.items)



