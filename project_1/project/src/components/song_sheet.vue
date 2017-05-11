<template>
    <div>
        <p class="title">全部歌单</p>
        <ul>
            <div v-for='list in recommend'>
                <li>
                    <div>
                        <img :src="list.picUrl">
                    </div>
                    <p>{{list.name}}</p>
                </li>
            </div>
        </ul>
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
    .title {
        margin-top: 0.5rem;
        font-family: "Microsoft Yahei", Arial;
        color:#353636;
        padding-left: 1rem;
        border-left: solid 0.2rem #d33a31;
        font-size: 0.8rem;
    }
    ul {
        margin-top: 0.8rem;
    }
    ul li {
        float: left;
        margin: 0 0.05rem;
        width: 9.9rem;
        height: 12.5rem;
    }
    ul li div {
        width: 9.9rem;
        height: 9.5rem;
    }
    ul li div img {
        width: 9.9rem;
        height: 9.5rem;
    }
    ul li p {
        font-family: "Microsoft Yahei", Arial;
        color: #7b7c7c;
        font-size: 0.8rem;
        line-height: 1rem;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
    }
</style>
