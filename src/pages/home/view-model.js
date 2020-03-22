import { computed } from 'mobx';
import homeStore from '@stores/home';

export default class ViewModel {
    @computed get content() {
        return homeStore.content;
    }

    fetchContent() {
        return homeStore.fetchContent()
    }
}
