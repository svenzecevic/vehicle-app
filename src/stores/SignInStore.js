import { observable } from "mobx"


class SignInStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }
    @observable email = ""
    @observable password = ""
    @observable error = null
}




export default SignInStore