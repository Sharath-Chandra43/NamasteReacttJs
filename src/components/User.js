import { useState } from "react"

const User=(props)=>{
    const {name,location}=props

        const [count]=useState(0)
        const [count2]=useState(1)

    return(
        <div className="User-card">
            <h1>count={count}</h1>
            <h1>count2={count2}</h1>
            <h1>name : {name}</h1>
            <h2>Location: {location}</h2>
            <h2>Contact:@sharathchandra.com</h2>
        </div>
    )
}

export default User