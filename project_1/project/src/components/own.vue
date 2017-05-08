<template>
    <div>
        <ul class="list">
            <router-link to='/localmusic'>
                <li>
                    <img src="../../static/img/list-1.png">
                    <p>本地音乐</p>
                    <span>(0)</span>
                </li>
            </router-link>
            <router-link to='/recentmusic'>
                <li>
                    <img src="../../static/img/list-2.png">
                    <p>最近播放</p>
                    <span>(11)</span>
                </li>
            </router-link>
            <li>
                <img src="../../static/img/list-3.png">
                <p>下载管理</p>
                <span>(0)</span>
            </li>
            <router-link to='/myradio'>
                <li>
                    <img src="../../static/img/list-4.png">
                    <p>我的电台</p>
                    <span>(11)</span>
                </li>
            </router-link>
            <li>
                <img src="../../static/img/list-5.png">
                <p>我的收藏</p>
                <span>(专辑/歌手/MV/专栏)</span>
            </li>
        </ul>
        <div class="song-sheet">
            <div class="song-sheet-show" @click='ifShow'>
                <b class="tip">
                    <i v-bind:class="{'em1' : show, 'em3' : !show}"></i>
                    <i v-bind:class="{'em2' : show, 'em4' : !show}"></i>
                </b>
                <p>创建的歌单({{playlistsCount}})</p>
                <button class="fit"></button>
            </div>
            <ul class="song-sheet-list" v-show='!show'>
                <li v-for='playlist in playlists'>
                    <img :src="playlist.coverImgUrl">
                    <div>
                        <h1>{{playlist.name}}</h1>
                        <p>{{playlist.playCount}}首</p>
                        <button></button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    data: function () {
        return {
            show: true, /* 控制歌单的显示与否 */
            playlists: [{coverImgUrl: '', name: '', id: '', playCount: 0}],
            playlistsCount: 0
        }
    },
    created: function () {
        let self = this
        this.$http.get('/api/user/playlist?uid=' + self.$store.state.userId)
        .then(function (res) {
            self.playlistsCount = res.data.playlist.length
            self.playlists = res.data.playlist
            self.playlists[0].name = '我喜欢的音乐'
        })
    },
    methods: {
        ifShow () {
            this.show = !this.show
        }
    }
}
</script>

<style type="text/css" scoped>
    .list {
        height: 13.2rem;
        width: 19.2rem;
        padding-left: 0.8rem;
        background-color: #f2f4f5;
    }
    ul li {
        height: 1.2rem;
        padding-top: 0.6rem;
        padding-bottom: 0.8rem;
    }
    li img {
        float: left;
        height: 1.2rem;
        width: 1.2rem;
    }
    li p {
        float: left;
        margin-left: 0.8rem;
        line-height: 1.2rem;
        font-family: "Microsoft Yahei", Arial;
        color: #0a0b0b;
    }
    li span {
        margin-left: 0.3rem;
        line-height: 1.2rem;
        color: #9b9b9b;
        display: block;
        font-family: "Microsoft Yahei", Arial;
        font-size: 0.8rem;
    }
    .song-sheet-show {
        position: relative;
        width: 20rem;
        height: 1.6rem;
        background-color: #e7e9e9;
    }
    .tip {
        width:0.8rem;
        height:0.8rem;
        position:absolute;
        left: 0.5rem;
        top: 0.5rem;
    }
    .em1,.em2 {
        width:0px;
        height:0px;
        display:block;
        position:absolute;
        left:0px;
        top:0px;
        border-top:0.4rem transparent dashed;
        border-right:0.4rem transparent dashed;
        border-bottom:0.4rem transparent dashed;
        border-left:0.4rem white solid;
        overflow:hidden;

    }
    .em1 {
        left:1px;
        border-left:0.4rem gray solid;
    }
    .em2 {
        border-left:0.4rem  #e7e9e9 solid;
    }
    .em3,.em4 {
        width:0px;
        height:0px;
        display:block;
        position:absolute;
        bottom:0px;
        left:0px;
        border-bottom:0.4rem transparent dashed;
        border-right:0.4rem transparent dashed;
        border-top:0.4rem gray solid;
        border-left:0.4rem transparent dashed;
        overflow:hidden;

    }
    .em3 {
        top:2px;
        border-top:0.4rem gray  solid;
    }
    .em4 {
        border-top:0.4rem #e7e9e9 solid;
    }
    .song-sheet-show  p {
        float: left;
        font-size: 0.8rem;
        line-height: 1.6rem;
        color:#6a6b6b;
        font-family: "Microsoft Yahei",Arial;
        margin-left: 1.8rem;
    }
    .fit {
        float: right;
        margin-top: 0.3rem;
        margin-right: 0.8rem;
        width: 0.9rem;
        height: 0.9rem;
        background-image: url('../../static/img/fit.png');
        background-size: 0.9rem 0.9rem;
    }
    .song-sheet-list {
        background-color: #f2f4f5;
    }
    .song-sheet-list li { 
        height: 3rem;
        width: 20rem;
        border-bottom: 0.1rem solid #ebedee;
    }
    .song-sheet-list li img {
        margin-left: 0.3rem;
        width: 2.9rem;
        height: 2.9rem;
    }
    .song-sheet-list li div h1{
        margin-left: 3.5rem;
        padding-top: 0.6rem;
        font-family: "Microsoft Yahei", Arial;
        font-size: 0.7rem;
        line-height: 1rem;
        color:#464747;
    }
    .song-sheet-list li div p {
        font-size: 0.5rem;
        font-family: "Microsoft Yahei", Arial;
        color:#7d7e7e;
    }
</style>
