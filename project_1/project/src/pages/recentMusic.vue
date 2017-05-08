<template>
    <div>
        <div class="top">
            <button class="back" @click='back'></button>
            <p class="recentp">最近播放</p>
            <p class="cleanp">清空</p>
        </div>
        <div class="playall">
            <ul>
                <li>
                    <img src="../../static/img/pause.png">
                    <p>播放全部</p>
                    <span>(共13首)</span>
                </li>
            </ul>
        </div>
        <div class="songlist">
            <ul>
                <li>
                    <div class="song-name">
                        <h1>Insomnia</h1>
                        <p>Craig David-Insomnia</p>
                    </div>
                    <button class="song-detail"></button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
import router from '../router'
export default {
    methods: {
        back () {
            router.go(-1)
        }
    },
    created () {
        console.log('sorry')
    }
}
</script>

<style type="text/css" scoped>
    .top {
        height: 1.9rem;
        width: 20rem;
        padding-top: 1.1rem;
        background-color: #d33a31;
    }
    .back {
        width: 1.1rem;
        height: 1rem;
        background-image: url('../../static/img/back.png');
        background-size: 1.1rem 1rem;
        float: left;
        margin-left: 1rem;
    }
    .recentp {
        float: left;
        margin-left: 1rem;
        line-height: 1rem;
        font-family: "Microsoft Yahei",Arial;
        color: #fff;
    }
    .cleanp {
        float: right;
        margin-right: 0.5rem;
        font-family: "Microsoft Yahei",Arial;
        color:#fff;
        line-height: 1rem;
    }
    .playall {
        height: 2.6rem;
        width: 20rem;
        border-bottom: 0.1rem solid #ebedee;
    }
    .playall ul li {
        height: 1.2rem;
        padding-top: 0.6rem;
        padding-bottom: 0.8rem;
    }
    .playall li img {
        float: left;
        margin-left: 0.8rem;
        height: 1.2rem;
        width: 1.2rem;
        opacity: 0.5;
    }
    .playall li p {
        float: left;
        margin-left: 0.8rem;
        line-height: 1.2rem;
        font-family: "Microsoft Yahei", Arial;
        color: #0a0b0b;
    }
    .playall li span {
        margin-left: 0.3rem;
        line-height: 1.2rem;
        color: #9b9b9b;
        display: block;
        font-family: "Microsoft Yahei", Arial;
        font-size: 0.8rem;
    }
    .songlist ul li {
        height: 2.9rem;
        width: 20rem;
        border-bottom: 0.1rem solid #eef0f0;
    }
    .song-name {
        float: left;
        margin-left: 0.5rem;
    }
    .song-name h1 {
        font-weight: normal;
        font-family: "Microsoft Yahei",Arial;
        line-height: 1rem;
        font-size: 1rem;
        margin-top: 0.6rem;
        color:#404141;
    }
    .song-name p {
        line-height: 0.7rem;
        margin: 0;
        margin-top: 0.3rem;
        color:#a6a7a8;
        font-size: 0.7rem;
    }
    .song-detail {
        float: right;
        margin-right: 0.6rem;
        margin-top: 1.1rem;
        width: 1rem;
        height: 1rem;
        background-image: url('../../static/img/switch.png');
        background-size: 1rem 1rem;
        opacity: 0.5;
    }
</style>
