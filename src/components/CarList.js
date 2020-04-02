import React, { Component } from "react"
import CarItem from "./CarItem"
import Filter from "./Filter"
import Sort from "./Sort"
import "./CarList.css"
import { observer } from "mobx-react"


@observer
class CarList extends React.Component {
filter(e) {
    this.props.store.filter = e.target.value
}
    render(){
        const cars  = this.props.store.caritems 
        const filter = this.props.store.filter
        const filteredCars = this.props.store.filteredCars
        const carsList = filteredCars.map (car => {
            return <CarItem make={car.make} model={car.model} className="car"/>
        })
        return(
            <div>
                 
                    
                <Filter value={filter} onChange={this.filter.bind(this)} className="filter"/>
                
                
                <Sort className="sort"/>
                
                
        <li className="cars-list">
            {carsList}
        </li>
        </div>
        )
    }
}



export default CarList;