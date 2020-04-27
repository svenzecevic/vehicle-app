import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import { action } from "mobx"




@inject("store")
@observer
class AddButton extends Component{
    constructor(props){
        super(props)
        this.listStore = this.props.store.listStore
    }
    @action
    editingHandler = () => {
        this.listStore.editing = true
    }

    render(){
        return(
            <button className="btn btn-info" onClick={this.editingHandler} >Add new vehicles</button>
        
        )
    }
}



export default AddButton