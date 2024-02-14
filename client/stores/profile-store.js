import { makeAutoObservable } from 'mobx';

class ProfileInfoStore {
    isLoggedIn = false;
    constructor() {
        makeAutoObservable(this)
    }
    setIsLoggedIn(state) {
        this.isLoggedIn = state
    }
}

const profileInfoStore = new ProfileInfoStore();
export default profileInfoStore;