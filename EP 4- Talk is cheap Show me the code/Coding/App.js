import React from "react";
import  ReactDOM  from "react-dom/client";


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://previews.123rf.com/images/alexkava/alexkava1909/alexkava190900014/130996533-abstract-black-chef-icon-isolated-on-white-background.jpg" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard=(props)=>{

    const {resData}=props;



    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="res-logo" src={resData.image} className="res-logo" />
            <h3>{resData.resName}</h3>
            <h4>{resData.cuisine.join(", ")}</h4>
            <h4>{resData.rating}</h4>
            <h4>{resData.price}</h4>
        </div>
    );
};


const resList = [
    {
     id:"1",
     resName: "Meghana Foods",
     cuisine:["Biryani,North Indian , Asian"],
     rating:"4.4",
     price: "$ 400",
     image:"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg"
    },
    {
     id:"2",
     resName: "KFC",
     cuisine:["Peri peri chicken","KFC"],
     rating:"4.3",
     price: "$ 1300",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfj09vfWTGPoHmHwxj-nloAjfOibY3MgorHeE78ikpQ&s"
    },
    {
     id:"3",
     resName: "McDonald's",
     cuisine:["cripsy chicken,pizza"],
     rating:"4.3",
     price: "$ 500",
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiN-GiRjyZBlbl0mb9haYX7ongohOnhCgjSU0hM98Dg&s"
    },
    {
     id:"4",
     resName: "Dominos",
     cuisine:["Pizza"],
     rating:"4.3",
     price: "$ 900",
     image:"https://stores.dominos.co.in/files/outlet/outlet_facebook_images/outlet_cover_photo/287629/EDV_microsite_creative_1_jpg.jpg"
    },
    {
        id:"5",
        resName: "Meghana Foods",
        cuisine:["Biryani,North Indian , Asian"],
        rating:"4.4",
        price: "$ 400",
        image:"https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg"
       },
       {
        id:"6",
        resName: "KFC",
        cuisine:["Peri peri chicken","KFC"],
        rating:"4.3",
        price: "$ 1300",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfj09vfWTGPoHmHwxj-nloAjfOibY3MgorHeE78ikpQ&s"
       },
       {
        id:"7",
        resName: "McDonald's",
        cuisine:["cripsy chicken,pizza"],
        rating:"4.3",
        price: "$ 500",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiN-GiRjyZBlbl0mb9haYX7ongohOnhCgjSU0hM98Dg&s"
       },
       {
        id:"8",
        resName: "Dominos",
        cuisine:["Pizza"],
        rating:"4.3",
        price: "$ 900",
        image:"https://stores.dominos.co.in/files/outlet/outlet_facebook_images/outlet_cover_photo/287629/EDV_microsite_creative_1_jpg.jpg"
       }
    ]
    

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {resList.map((resList)=>(
                    <RestaurantCard key={resList.id}  resData={resList}/>
                ))} 
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);