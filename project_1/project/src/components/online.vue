<template>
    <div>
        <ul>
            <router-link to='/main/online/personal'><li>个性推荐</li></router-link>
            <router-link to='/main/online/songsheet'><li>歌单</li></router-link>
            <router-link to='/main/online/404'><li>主播电台</li></router-link>
            <router-link to='/main/online/rank'><li>排行榜</li></router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript"></script>

<style type="text/css" scoped>
    ul {
        height: 2rem;
        width: 20rem;
        background-color: #feffff;
    }
    ul li {
        float: left;
        width: 5rem;
        text-align: center;
        line-height: 1.9rem;
        border-bottom: solid 0.1rem #fff;
        font-family: "Microsoft Yahei",Arial;
        color: #888;
    }
    ul li:hover {
        border-bottom: solid 0.1rem #d33a31;
    }
</style>
