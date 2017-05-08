<template>
    <div>
        <div class="top">
            <div class="topHelp">
                <button class="back" @click="back"></button>
                <div>
                    <h1 class="getSize">不将就</h1>
                    <P>东南</P>
                </div>
            </div>    
            <div class="content"></div>
            <div class="fun-key">
                <ul>
                    <li class="like-key"></li>
                    <li class="download-key"></li>
                    <li class="comments-key"></li>
                    <li class="more-key"></li>
                </ul>
            </div>
            <div class="progress-bar">
                <p class="play-time">{{ nowTime}}</p>
                <div class="bar">
                    <i class="total-time-bar" ></i>
                    <i class="play-time-bar" :style="{'-webkit-transform':'translateX(' + playTime +'%)' }"></i>
                </div>
                <button class="control-time" @mousedown='changePlayTime' :style="{'left': playTime*13.5/100 + 2 +'rem'}"></button>
                <p class="total-time">{{totalTime}}</p>
            </div>
            <div class="basic-control">
                <div class="basic-control-center">
                    <button class="last-song"></button>
                    <button class="play-button" @click='control' :class="{'play':control_id,'pause':!control_id}"></button>
                    <button class="next-song"></button> 
                </div>
            </div>
            <audio @timeupdate="updateTime" @ended="next" id="audio" src="../../static/source/周杰伦 - 默.mp3" autoplay="autoplay"></audio>
        </div>
    </div>
</template>

<script type="text/javascript">
import router from '../router'
export default {
    data () {
        return {
            audio: '',
            control_id: true,
            durationTime: 0,
            currentTime: 0,
            totalTime: '',
            pxToRem: 0  /* 将px转换为rem */
        }
    },
    methods: {
        back () {
            router.go(-1)
        },
        control () {
            this.audio = document.getElementById('audio')
            if (this.control_id) {
                this.audio.pause()
            } else {
                this.audio.play()
            }
            this.control_id = !this.control_id
        },
        updateTime () {
            this.audio = document.getElementById('audio')
            this.durationTime = this.audio.duration
            this.currentTime = this.audio.currentTime
            this.totalTime = this.changeTime(this.durationTime)   /* 总时间更好的方法是什么 */
        },
        changeTime (sometime) {
            let t = sometime
            let a = Math.floor(t / 60) + ':' + (t % 60 / 100).toFixed(2).slice(-2)
            return a
        },
        next () {
            this.control_id = !this.control_id
            this.currentTime = 0
        },
        changePlayTime (ev) {   /* 进度移动事件,在电脑模式下能动，在移动设备下不管用。待解决 */
            let disX = 0
            let oEvent = ev || event
            let oBar = document.getElementsByClassName('control-time')[0]
            disX = oEvent.clientX - oBar.offsetLeft
            document.onmousemove = function (ev) {  /* 要点击后才能触发 */
                var oEvent = ev || event
                var oLeft = oEvent.clientX - disX
                if (oLeft < 0) {
                    oLeft = 0
                } else if (oLeft > document.documentElement.clientWidth - oBar.offsetWidth) {
                    oLeft = document.documentElement.clientWidth - oBar.offsetWidth
                }
                oBar.style.left = oLeft + 'px'
            }
            let self = this
            document.onmouseup = function () {
                document.onmousemove = null
                document.onmouseup = null
                let left = parseInt(oBar.style.left)
                self.currentTime = self.durationTime / 13.5 * (left / 20 - 2)
                self.audio = document.getElementById('audio')
                self.audio.currentTime = self.currentTime
            }
        },
        test () {
            console.log(1)
        }
    },
    created () {
        let screenWith = screen.width
        this.pxToRem = screenWith / 20
    },
    computed: {
        playTime: function () {
            return this.currentTime / this.durationTime * 100
        },
        nowTime: function () {
            return this.changeTime(this.currentTime)
        }
    }
}
</script>

<style type="text/css" scoped>
    div {
        background-color: #535250;
    }
    .top .back {
        float:left;
        background-image: url('../../static/img/song-back.png');
        background-size: 1.2rem 1rem;
        width: 1.2rem;
        height: 1rem;
        margin-top: 1.1rem;
        margin-left: 1rem;
    }
    .top div {
        float: left;
    }
    .top h1 {
        line-height: 0.9rem;
        padding-top: 0.7rem;
        font-size: 1rem;
        margin-left: 1rem;
    }
    .top p {
        line-height: 0.7rem;
        font-family: "Microsoft Yahei", Arial;
        font-size: 0.7rem;
        margin-left: 1rem;
        margin-top: 0.3rem;
    }
    .content {
        height: 21.6rem;
        width: 20rem;
        background-color: #333;
    }
    .fun-key {
        height: 1.25rem;
        width: 13.1rem;
        margin: 0 3.45rem;
        background-color: red;
    }
    .fun-key li {
        float: left;
        width: 1.25rem;
        height: 1.25rem;
        background-color: blue;
        margin-right: 2.7rem;
    }
    .fun-key .more-key {
        margin-right: 0;
        background-image: url('../../static/img/switch.png');
        background-size: 1.25rem 1.25rem;
    }
    .fun-key .download-key {
        background-image: url('../../static/img/download.png');
        background-size: 1.25rem 1.25rem;
    }
    .fun-key .like-key {
        background-image: url('../../static/img/favorite.png');
        background-size: 1.25rem 1.25rem;
    }
    .fun-key .comments-key {
        background-image: url('../../static/img/comments.png');
        background-size: 1.25rem 1.25rem;
    }
    .progress-bar {
        position: relative;
        width: 17.8rem;
        height: 0.8rem;
        margin: 0 1.1rem;
        margin-top: 1.2rem;
        text-align: center;
    }
    .progress-bar .play-time {
        float: left;
        margin: 0;
    }
    .progress-bar .play-time-bar,.progress-bar .total-time-bar {
        position: absolute;
        top:50%;
        margin-top: -0.1rem;
        display: block;
        width: 13.5rem;
        border-bottom: 0.2rem solid red;
        z-index: 3;
    }
    .progress-bar .total-time-bar {
        border-bottom: 0.2rem solid blue;
        z-index: 2;
    }
    .progress-bar .control-time {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
        position: absolute;
        left:2rem;  
        z-index: 4;
    }
    .progress-bar .total-time {
        float: right;
        right: 0;
        margin: 0;
    }
    .basic-control {
        position: relative;
        margin-top: 1.2rem;
        width: 20rem;
        height: 4.99rem;
    }
    .basic-control .basic-control-center {
        width: 10rem;
        height: 2.5rem;
       /* background-color: red;*/
        position: absolute;
        top:50%;
        left: 50%;
        margin-top: -1.25rem;
        margin-left: -5rem;
    }
    .basic-control .basic-control-center .last-song {
        width: 1.3rem;
        height: 1.3rem;
        background-image: url('../../static/img/last.png');
        background-size: 1.3rem 1.3rem;
        position: absolute;
        top:50%;
        margin-top: -0.65rem;
        opacity: 0.5;
    }
    .basic-control .basic-control-center .play-button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 1.25rem;
       /* border:#333 solid 0.1rem;*/
        margin-left: 3.6rem;
        opacity: 0.5;
    }
    .basic-control .basic-control-center .next-song {
        width: 1.3rem;
        height: 1.3rem;
        background-image: url('../../static/img/next.png');
        background-size: 1.3rem 1.3rem;
        position: absolute;
        top:50%;
        right: 0;
        margin-top: -0.65rem;
        opacity: 0.5;
    }
    .play {
        background-image: url('../../static/img/play.png');
        background-size: 2.5rem 2.5rem;
        opacity: 0.6;
    }
    .pause {
        background-image: url('../../static/img/pause.png');
        background-size: 2.5rem 2.5rem;
        opacity: 0.6;
    }
    .bar {
        position: absolute;
        top:50%;
        margin-top: -0.1rem;
        display: block;
        left:2rem;
        width: 13.5rem;
        height: 0.2rem;
        overflow: hidden;
    }
    .top .topHelp {
        width: 20rem;
        height: 3rem;
    }
</style>
