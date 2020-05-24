import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import { action, computed } from "mobx"

@inject("store")
@observer
class Search extends Component {

    constructor(props){
        super(props)
        this.carStore = this.props.store.carStore
        this.searchStore = this.props.store.searchStore
        this.listStore = this.props.store.listStore
    }


    @computed get searchCars() {
        let searchMatch = new RegExp(this.searchStore.search, "i")
        return this.carStore.caritems.filter(
            (car) => searchMatch.test(car.model) || searchMatch.test(car.make)
        )
    }

    @action
    searchHandler = (e) => {
        let result = e.target.value
        this.searchStore.search = result
        this.listStore.carsList = this.searchCars
    
    }


    render(){
        return(
            <React.Fragment>
                <input onChange={this.searchHandler.bind(this)} />
            </React.Fragment>
        )
    }
}


export default Search