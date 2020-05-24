import { observable } from "mobx"


class SearchStore {

    constructor(rootStore){
        this.rootStore = rootStore
    }

    @observable search = []
}


export default SearchStore