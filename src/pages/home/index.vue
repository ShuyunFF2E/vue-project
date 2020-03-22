<template>
    <section class="content-container content">
        <div>
            <h3>Vue-project</h3>
            <p>{{state.content}}</p>
        </div>
    </section>
</template>

<script>
    import { observer } from 'mobx-vue';
    import ViewModel from './view-model';

    export default observer({
        name: 'Home',
        data() {
            return {
                state: new ViewModel()
            }
        },
        method: {
        },
        mounted() {
            this.state.fetchContent()
        }
    });
</script>

<style lang="less" scoped>
    .content {
        padding: 20px;
        background-color: #fff;
    }

    h3 {
        margin-bottom: 20px;
        font-size: 20px;
        color: #333;
    }

    p {
        font-size: 16px;
        color: #666;
    }
</style>