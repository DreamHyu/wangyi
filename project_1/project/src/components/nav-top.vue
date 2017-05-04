<template>
    <div class="top">
        <div class="state-button">
            <button class="side" @click='back'></button>
            <button class="search"></button>
            <div class="state-center">
                <router-link to='/main/own'><button class="local-music"></button></router-link>
                <router-link to='/main/online'><button class="music"></button></router-link>
                <router-link to='/song'><button class="community"></button></router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
import router from '../router/index.js'

export default {
    data: function () {
        return {}
    },
    methods: {
        back () {
            router.go(-1)
        }
    }
}
</script>

<style type="text/css" scoped>
    .top {
        height: 3rem;
        width: 20rem;
        background-color: #d33a31;
    }
    .state-button {
        width: 20rem;
        height: 1.3rem;
        padding-top: 1rem;
    }
    .side {
        float: left;
        background-image: url('../../static/img/side.png');
        background-size: 1.2rem 1.3rem;
        width: 1.2rem;
        height: 1.3rem;
        margin-left: 0.8rem;
    }
    .state-center {
        width: 7.6rem;
        margin: 0 auto;
        height: 1.3rem;
        text-align: center;   /*使居中*/
    }
    .local-music {
        float: left;
        width: 1.35rem;
        height: 1.3rem;
        background-image: url('../../static/img/local-music.png');
        background-size: 1.35rem 1.3rem;
    }
    .music {
        width: 1.2rem;
        height: 1.3rem;
        background-image: url('../../static/img/2.png');
        background-size: 1.2rem 1.3rem;
    }
    .community {
        float: right;
        width: 1.5rem;
        height: 1.3rem;
        background-image: url('../../static/img/talk.png');
        background-size: 1.5rem 1.3rem;
    }
    .search {
        float: right;
        width: 1.1rem;
        height: 1.3rem;
        background-image: url('../../static/img/search.png');
        background-size: 1.1rem 1.3rem;
        margin-right: 0.8rem;
    }
</style>
