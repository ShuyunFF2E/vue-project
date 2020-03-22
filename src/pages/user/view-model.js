import { computed } from 'mobx';
import userStore from '@stores/user';

export default class ViewModel {
    @computed get name() {
        return userStore.user.name;
    }

    @computed get mobile() {
        return userStore.user.mobile;
    }

    @computed get address() {
        const { province, city, district, address } = userStore.user;

        return `${province} ${city} ${district} ${address}`;
    }

    fetchUser(userId) {
        return userStore.fetchUser(userId)
    }
}
