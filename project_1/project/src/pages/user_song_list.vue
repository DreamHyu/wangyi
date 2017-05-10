<template>
    <div>
        <div class="top">
            <router-link to='/main'><p class="back" ></p></router-link>
            <p>歌单</p>
            <button class="search"></button>
            <p class="more"></p>
        </div>
        <div class="show" :style="'background-image:url('+playlist.creator.backgroundUrl+')'">
            <div class="show-item">
                <div class="pic"><img :src="playlist.picUrl"></div>
                <div class="show-item-name">
                    <p>{{playlist.name}}</p>
                    <div class="head">
                        <div class="head-pic" :style="'background-image:url('+playlist.creator.avatarUrl+')'"></div>
                        <p class="head-name">{{playlist.creator.nickname}}</p>
                    </div>
                </div>
                <div class="cleanfix"></div>
            </div>
            <div class="show-detail">
                <ul>
                    <li>
                        <img src="../../static/img/collect.png">
                        <p>收藏</p>
                    </li>
                    <li>
                        <img src="../../static/img/comments.png">
                        <p>评论</p>
                    </li>
                    <li>
                        <img src="../../static/img/share.png">
                        <p>分享</p>
                    </li>
                    <li>
                        <img src="../../static/img/download.png">
                        <p>下载</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="playall">
            <ul>
                <li>
                    <img src="../../static/img/pause.png">
                    <p>播放全部</p>
                    <span>(共{{playlist.trackCount}}首)</span>
                </li>
            </ul>
        </div>
        <div class="songlist">
            <ul>
                <div v-for="track in playlist.tracks">
                    <router-link :to="{name: 'song',params: { id: track.id} }">
                        <li>
                            <div class="song-name">
                                <h1>{{track.name}}</h1>
                                <p>{{track.ar[0].name}}-{{track.al.name}}</p>
                            </div>
                            <p class="song-detail"></p>
                        </li>
                    </router-link>
                </div>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
// import router from '../router'
export default {
    data () {
        return {
            playlist: {
                name: '',
                picUrl: '',
                creator: { /* 创建人 */
                    nickname: '',
                    backgroundUrl: '',
                    avatarUrl: ''
                },
                trackCount: 0,
                tracks: [{  /* 歌曲 */
                    id: '',
                    name: '',
                    ar: [{    /* 作者 */
                        id: '',
                        name: ''
                    }],
                    al: {   /* 专辑 */
                        id: '',
                        name: ''
                    }
                }]
            }
        }
    },
    created () {
        let songListId = this.$route.path.slice(14)
        let self = this
        self.$http.get('/api/playlist/detail?id=' + songListId)
        .then(function (res) {
            self.playlist = res.data.playlist
            self.$store.commit('deleteSonglist')
            for (let i in res.data.playlist.tracks) {
                self.$store.commit('setSonglist', res.data.playlist.tracks[i].id)
            }
        })
    }
}
</script>

<style type="text/css" scoped>
    .top {
        position: fixed;
        top: 0;
        width: 20rem;
        padding-top: 1rem;
        height: 1.2rem;
    }
    .top .back {
        float: left;
        width: 1.2rem;
        height: 1.2rem;
        background-image: url('../../static/img/last.png');
        background-size: 1.2rem 1.2rem;
        margin-left: 0.9rem;
    }
    .top p {
        line-height: 1.2rem;
        font-family: "Microsoft Yahei", Arial;
        color: #000;
        font-size: 1rem;
        float: left;
        margin-left: 1rem;
    }
    .top .search {}
    .top .more {
        width: 1.2rem;
        height: 1.2rem;
        background-image: url('../../static/img/switch.png');
        background-size: 1.2rem 1.2rem;
        float: right;
        margin-right: 0.6rem;
    }
    .show {
        width: 20rem;
    }
    .show-item {
        padding-top: 3.2rem;
        margin-left: 1.2rem;
    }
    .show-item .pic {
        float: left;
        width: 7rem;
        height: 6.7rem;
    }
    .show-item .pic img {
        width: 7rem;
        height: 6.7rem;
    }
    .show-item .show-item-name {
        float: left;
        margin-left: 1rem;
    }
    .show-item .show-item-name p {
        height: 2.1rem;
        font-family: "Microsoft Yahei", Arial;
        color: #f2f0f0;
        font-size: 1rem;
        width: 10.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .show-item .show-item-name .head-pic {
        float: left;
        margin-top: 0.6rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.75rem;
    }
    .show-item .show-item-name .head-name {
        float: left;
        width: 6.2rem;
        margin-left: 0.3rem;
        line-height: 2.7rem;
        font-family:  0.7rem;
        font-family: "Microsoft Yahei", Arial;
        color:#ada7a5;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
    }
    .show-detail {
        width: 20rem;
        height: 3.5rem;
    }
    .show-detail li {
        float: left;
        padding-top: 1rem;
        width: 5rem;
        height: 2.5rem;
        text-align: center;
    }
    .show-detail li img {
        width: 1.2rem;
        height: 1rem;
    }
    .show-detail li p {
        font-family: "Microsoft Yahei", Arial;
        line-height: 0.8rem;
        color:#9c9594;
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
</style>
