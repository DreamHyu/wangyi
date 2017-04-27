<template>
    <div>
        <router-link to="/home"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import hello from './hello'
export default {
    components: {
        hello
    }
}
</script>

<style>
</style>
