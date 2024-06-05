import { useRouteError } from "react-router-dom"

const Error =()=>{
    const err=useRouteError()
    return(
        <div className="error">
            <h1 className="error-text">Oops !!!</h1>
            <h3>{err.status}:{err.statusText}</h3>

            <img src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png" />
        </div>
    )
}


export default Error