<template>
    <div>
        <div class="top">
            <button class="back" @click='back'></button>
            <p class="recentp">我的电台</p>
        </div>
        <div class="song-sheet-show" @click='ifShow'>
            <p>我创建的电台()</p>
        </div>
        <div class="radio-list">
            <ul>
                <li>
                    <img src="">
                    <div class="radio-list-name">
                        <h1>苏三</h1>
                        <p>by 冯提莫</p>
                        <p>搁浅</p>
                    </div>
                    <button class="radio-list-detail"></button>
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
     .song-sheet-show  p {
        float: left;
        font-size: 0.8rem;
        line-height: 1.6rem;
        color:#6a6b6b;
        font-family: "Microsoft Yahei",Arial;
        margin-left: 0.8rem;
    }
    .song-sheet-show {
        position: relative;
        width: 20rem;
        height: 1.6rem;
        background-color: #e7e9e9;
    }
    .radio-list ul li {
        position: relative;
        margin-left: 0.3rem;
        height: 4rem;
        width: 19.7rem;
        border-bottom: 0.1rem solid #eaeced;
    }
    .radio-list ul li img {
        float: left;
        margin-top: 0.1rem;
        width: 4rem;
        height: 3.8rem;
    }
    .radio-list .radio-list-name {
        float: left;
        margin-left: 1rem;
    }
    .radio-list .radio-list-name h1 {
        margin-top: 0.4rem;
        line-height: 1rem;
        font-size: 1rem;
        font-family: "Microsoft Yahei", Arial;
        color: #333434;
    }
    .radio-list .radio-list-name p {
        line-height: 0.7rem;
        font-size: 0.7rem;
        font-family: "Microsoft Yahei", Arial;
        color:#838485;
        margin-top: 0.4rem;
    }
    .radio-list-detail {
        float: right;
        width: 1rem;
        height: 1rem;
        background-image: url('../../static/img/switch.png');
        background-size: 1rem 1rem;
        opacity: 0.5;
        margin-right: 0.7rem;
        margin-top: 1.5rem;
    }
</style>
