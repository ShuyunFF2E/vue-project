import { observable, action } from 'mobx';
import http from '@commons/http'

class Store {
    @observable user = {};

    @action fetchUser(userId) {
        return http.get(`/user/${userId}`).then(res => {
            this.user = res;

            return res;
        });
    }
}

export default new Store();
