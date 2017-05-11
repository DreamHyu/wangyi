<template>
    <div>
        <div class="show-pic"></div>
        <div class="center">
            <ul>
                <li class="personal-fm">
                    <button></button>
                    <p>私人FM</p>
                </li>
                <li class="daily-song">
                    <button></button>
                    <p>每日歌曲推荐</p>
                </li>
                <li class="hot-rank">
                    <button></button>
                    <p>云音乐热歌榜</p>
                </li>
                <div class="cleanfix"></div>
            </ul>
        </div>
        <div class="nominate-sheet">
            <div></div>
            <p>推荐歌单 ></p>
            <div></div>
        </div>
        <div class="sheet-list">
            <ul>
                <div v-for='list in recommend'>
                    <router-link :to="{name: 'usersonglist',params: { id: list.id} }">
                        <li>
                            <img :src="list.picUrl">
                            <p>{{list.name}}</p>
                        </li>
                    </router-link>
                </div>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data: function () {
        return {
            recommend: [{
                id: '',
                name: '',
                picUrl: '',
                playCount: 0
            }]
        }
    },
    methods: {},
    created () {
        let self = this
        this.$http.get('/api//recommend/resource')
        .then(function (res) {
            self.recommend = res.data.recommend
        })
    }
}
</script>

<style type="text/css" scoped>
    .show-pic {
        height: 7.4rem;
        width: 20rem;
    }
    .center {
        width: 20rem;
        height: 5.3rem;
        border-bottom: 0.05rem solid #999;
        background-color: #f2f4f5;
    }
    .center ul {
        background-color: #f2f4f5;
        height: 5.3rem;
        width: 18rem;
        margin: 0 1rem;
    }
    .center ul li {
        margin-top: 0.8rem;
        float: left;
        height: 2.8rem;
        width: 6rem;
        text-align: center;
        border: 0;
    }
    .personal-fm button {
        width: 2.9rem;
        height: 2.8rem;
        background-image: url('../../static/img/person-1.png');
        background-size: 2.9rem 2.8rem;
    }
    .daily-song button {
        width: 2.9rem;
        height: 2.8rem;
        background-image: url('../../static/img/person-2.png');
        background-size: 2.9rem 2.8rem;
    }
    .hot-rank button {
        width: 2.9rem;
        height: 2.8rem;
        background-image: url('../../static/img/person-3.png');
        background-size: 2.9rem 2.8rem;
    }
    .center ul li p {
        line-height: 0.8rem;
        font-size: 0.8rem;
        color:#555656;
        font-family: "Microsoft Yahei",Arial;
    }
    .nominate-sheet {
        background-color: #f2f4f5;
    }
    .nominate-sheet div {
        height: 0.1rem;
    }
    .nominate-sheet p {
        margin-top: 1.1rem;
        margin-bottom: 0.7rem;
        line-height: 1rem;
        font-family: "Microsoft Yahei", Arial;
        padding-left: 0.4rem;
        border-left: solid 0.1rem #d12d23;
    }
    .sheet-list li {
        height: 9.2rem;
        float: left;
        margin-left: 0.05rem;
        width: 6.6rem;
    }
    .sheet-list li img {
        width: 6.6rem;
        height: 6.2rem;
    }
    .sheet-list li p {
        font-family: "Microsoft Yahei", Arial;
        color: #1e1f20;
        font-size: 0.7rem;
        margin-left: 0.3rem;
    }
</style>
