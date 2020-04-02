import React from "react"
import "./CarItem.css"



const CarItem = (props) => {



    return(
        < div className="car-item">
            <p> Make: {props.make}</p>
            <p> Model: {props.model}</p>
        </div>
    )
}


export default CarItem;