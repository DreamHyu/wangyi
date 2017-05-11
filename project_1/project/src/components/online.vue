<template>
    <div>
        <ul>
            <router-link to='/main/online/personal'><li @click="change('one')" :class="{'choose' : one}">个性推荐</li></router-link>
            <router-link to='/main/online/songsheet'><li @click="change('two')" :class="{'choose': two}">歌单</li></router-link>
            <router-link to='/main/online/404'><li @click="change('three')" :class="{'choose': three}">主播电台</li></router-link>
            <router-link to='/main/online/rank'><li @click="change('four')" :class="{'choose': four}">排行榜</li></router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            one: true,
            two: false,
            three: false,
            four: false
        }
    },
    methods: {
        change (str) {
            this.one = false
            this.two = false
            this.three = false
            this.four = false
            switch (str) {
            case 'one':
                this.one = true
                break
            case 'two':
                this.two = true
                break
            case 'three':
                this.three = true
                break
            case 'four':
                this.four = true
                break
            default:
                break
            }
        }
    }
}
</script>

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
    .choose {
        border-bottom: solid 0.1rem #d33a31;
    }
</style>
