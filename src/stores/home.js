import { observable, action } from 'mobx';
import http from '@commons/http'

class Store {
    @observable content = '加载中...';

    @action fetchContent() {
        return http.get('/home/content').then(res => {
            this.content = res;

            return res;
        });
    }
}

export default new Store();
