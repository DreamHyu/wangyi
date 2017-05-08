<template>
    <div class="wait" @click='back'>
        wait
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
    .wait {
        width: 30px;
        height: 30px;
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
</style>
