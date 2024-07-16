
import React from "react"

class UserClass extends React.Component {
    constructor(props) {
    super(props)

    this.state={
        userInfo:{
            login:"Dummy",
            location:"Default",
            avatar_url:"http://dummy-phoyo.com",
        },
    };
    }


    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/Sharath-Chandra43")
        const json=await data.json();
        

        this.setState({
            userInfo:json,
        })
    }


    componentDidUpdate(){
        console.log("Component  did update");

    }

    componentWillUnmount(){
        console.log("Component will unmounted")
    }
    render(){
        const{login,location,avatar_url}=this.state.userInfo;

       
        return(
            <div className="User-card">
                <img src={avatar_url} /> 
            <h1>name : {login}</h1>
            <h2>Location: {location}</h2>
            <h2>Contact:@sharathchandra.com</h2>
        </div>
        )
    }
}

export default UserClass