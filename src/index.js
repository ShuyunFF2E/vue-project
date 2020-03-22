import Vue from 'vue'
import router from './routers'
import App from './app'

import '@assets/style/normal.less';
import '@assets/style/common.less';

new Vue({
    router,
    render: h => h(App)
}).$mount('#root')
