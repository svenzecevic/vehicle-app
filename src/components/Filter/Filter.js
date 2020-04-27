import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import { observer, inject } from "mobx-react"
import { action, computed } from "mobx"


@inject("store")
@observer
class Filter extends Component {

  constructor(props){
    super(props)
    this.carStore = this.props.store.carStore
    this.listStore = this.props.store.listStore
  }

  @computed get filteredCars(){
    let filterMatch = new RegExp(this.carStore.filterState, "i")
    return this.carStore.caritems.filter(
      (car) => !this.carStore.filterState || filterMatch.test(car.make)
    )
  }

  @action
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex
    let label = e.nativeEvent.target[index].text
    this.carStore.filterState = label
    this.listStore.carsList = this.filteredCars
  }

  @action
  componentDidMount(){
    this.listStore.carsList.forEach(element => {
      if(!this.listStore.dropdownModels.some(e => e.make === element.make)) {
        this.listStore.dropdownModels.push({...element})
      }
    })
  }
  render(){
    return(
      <Aux>
        <label></label>
        <select  onChange={this.filter.bind(this)} defaultValue={"default"}>
          <option disabled value="default">
            Choose a make...
          </option>
          {this.listStore.dropdownModels.map((opt => {
            return <option key={opt.id}> {opt.make} </option>
          }))}
        </select>
      </Aux>
    )
  }
}


export default Filter