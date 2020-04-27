import CarStore from "./CarStore"
import ListStore from "./ListStore"




class RootStore {
    constructor(){
        this.carStore = new CarStore(this)
        this.listStore = new ListStore(this)
    }
}

const rootStore = new RootStore()

export default rootStore