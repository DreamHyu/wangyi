<template>
    <div class="welcome">
        <div class="logo">
            <img src="../../../../static/img/logo.png">
        </div>
        <div class="login">
            <div class="account">
                <label>账号</label>
                <input type="text" name="" placeholder="Enter your account" v-model='account'>
            </div>
            <div class="password">
                <label>密码</label>
                <input type="text" name="" placeholder="Enter your password" v-model='password'>
            </div>
            <div class="login-button">
                <button @click='login'>登陆</button>
                <router-link to='/main'><button>试用登陆</button></router-link>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            account: '',
            password: '',
            url: '',
            data: ''
        }
    },
    created: function () {
    },
    methods: {
        login () {
            if (this.account.indexOf('@') > 0) {
                this.url = '/api/login?email=' + this.account + '&password=' + this.password
            } else {
                this.url = '/api/login/cellphone?phone=' + this.account + '&password=' + this.password
            }
            let self = this
            this.$http.get(this.url)
            .then(function (res) {
                self.$store.commit('getUserId', res.data.account.id)
                let _this = self
                _this.$http.get('/api/user/playlist?uid=' + _this.$store.state.userId)
                .then(function (newRes) {
                    let count = newRes.data.playlist.length
                    _this.$store.commit('setPlaylistsCount', count)
                })
            })
        }
    }
}
</script>

<style scoped>
    .welcome {
        height: 33.8rem;
        width: 20rem;
        /*background-image: url(../../../../static/img/login-back.jpg);*/
        background-size: 33.8rem 20rem;
    }
    .logo {
        position: relative;
        width: 20rem;
        height: 13.2rem;
    }
    .logo img {
        width: 5rem;
        height: 4.8rem;
        position: absolute;
        top:50%;
        left:50%;
        margin-top: -2.5rem;
        margin-left: -2.4rem;
    }
    .login {
        width: 20rem;
        text-align: center;
    }
    .login-button {
        width: 14.4rem;
        margin: 0 auto;
    }
    .login-button button {
        margin-top: 2rem;
        height: 2.3rem;
        width: 14.4rem;
        border-radius: 1.25rem;
        border:1px solid #d3514f;
        background-color: #fff;
        font-size: 1rem;
        color:#d3514f;
        font-family: "Microsoft Yahei";
    }
    .login div {
        margin-bottom: 1rem;
    }
    .login label {
        font-family: "Microsoft Yahei",Arial;
    }
    .login input {
        width: 10rem;
        height: 1.5rem;
        border: none;
        border-bottom: 1px solid #333;
    }
</style>
