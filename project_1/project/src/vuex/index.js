import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userId: '473125880',
        userName: '',
        playlistsCount: 0,   /* 用户歌单数目 */
        songlist: []    /* 播放列表 */
    },
    mutations: {
        getUserId (state, id) {
            state.userId = id
        },
        setPlaylistsCount (state, count) {
            state.playlistsCount = count
        },
        setSonglist (state, id) {
            state.songlist = state.songlist.concat(id)
        },
        deleteSonglist (state) {
            state.songlist = []
        }
    }
})
