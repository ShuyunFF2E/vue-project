<template>
    <div class="container">

        <!-- render header -->
        <header>
            <div class="content-container nav-bar">
                <h1 class="title">Vue-project</h1>

                <div class="menus">
                    <router-link
                        v-for="{label, path} in menus"
                        :to="path"
                        :key="path"
                        active-class="active"
                    >
                        {{label}}
                    </router-link>
                </div>
            </div>
        </header>

        <!-- render header -->
        <RouterView class="router-view" />
    </div>
</template>

<script>
    import { menus } from '@routers'

    export default {
        components: {},
        data() {
            return {
                menus
            }
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
    .container {
        font-family: 
            'PingFangSC-Regular',
            'PingFang SC',
            'Franklin Gothic Medium',
            'Arial Narrow',
            Arial,
            sans-serif;
        background-color: #f0f2f5;
    }

    header {
        height: 60px;
        background-color: #20507d;
    }

    .nav-bar {
        position: relative;
        display: flex;

        &,
        > * {
            height: 100%;
        }
    }

    .router-view {
        overflow: auto;
        display: flex;
        min-height: calc(100vh - 60px);

        > * {
            flex: 1 auto;
        }
    }

    .align-center {
        display: flex;
        align-items: center;
    }

    .title {
        &:extend(.align-center);
        margin-right: 160px;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
    }

    .menus {
        &:extend(.align-center);

        > * {
            color: #bbb;
            text-decoration: none;

            &:not(:last-child) {
                margin-right: 56px;
            }

            &:hover,
            &.active {
                color: #fff;
            }
        }
    }

    .header-aside {
        &:extend(.align-center);

        position: absolute;
        right: 0;
        color: #dfdfdf;

        > * {
            margin-left: 20px;
        }
    }
</style>
