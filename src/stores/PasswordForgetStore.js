import { observable } from "mobx"





class PasswordForgetStore {

    constructor(rootStore){
        this.rootStore = rootStore
    }

    @observable email = ""
    @observable error = null
    @observable info = false
}





export default PasswordForgetStore