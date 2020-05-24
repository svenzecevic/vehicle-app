import { observable } from "mobx"


class SignUpStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable username = ""
    @observable email = ""
    @observable passwordOne = ""
    @observable passwordTwo = ""
    @observable error = null
   




}


export default SignUpStore