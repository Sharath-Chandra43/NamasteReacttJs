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


export default RestaurantCard;