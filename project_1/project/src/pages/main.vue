<template>
    <div>
        <navTop></navTop>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
import navTop from '../components/nav-top'
export default {
    data: function () {
        return {
        }
    },
    components: {
        navTop
    },
    created: function () {
    }
}
</script>

<style type="text/css" scoped></style>
