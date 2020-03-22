<template>
    <section class="content-container content">
        <dl>
            <dt>User Info</dt>
            <dd><span>name：</span>{{state.name}}</dd>
            <dd><span>mobile：</span>{{state.mobile}}</dd>
            <dd><span>address：</span>{{state.address}}</dd>
        </dl>
    </section>
</template>

<script>
    import { observer } from 'mobx-vue';
    import ViewModel from './view-model';

    export default observer({
        name: 'User',
        data() {
            return {
                state: new ViewModel()
            }
        },
        computed: {
        },
        method: {
        },
        mounted() {
            this.state.fetchUser(1);
        }
    });
</script>

<style lang="less" scoped>
    .content {
        padding: 20px;
        background-color: #fff;
    }

    dl {
        line-height: 2;
    }

    dt {
        font-size: 18px;
    }

    dd {
        color: #666;
        font-size: 16px;
    }

    span {
        display: inline-block;
        width: 80px;
        text-align: right;
        color: #333;
    }
</style>