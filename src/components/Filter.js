import React from "react"



const Filter = (props) => {

    return (
        <div className="filter">
        <h3>Search cars:</h3>
        <input value={props.value} onChange={props.onChange} />
        </div>
    )
}


export default Filter;