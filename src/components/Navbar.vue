<template>
	<div class="navbar navbar-expand-sm" id="header">
        <div class="container">
            <router-link 
                class="navbar-brand" 
                to="/">
                <img 
                    src="../assets/logo.png" 
                    width="auto" 
                    height="20" 
                />
            </router-link>
            <button 
                class="navbar-toggler navbar-toggler-right" 
                type="button" data-toggle="collapse" 
                data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link 
                            to="/home" 
                            class="nlink">Articles
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="!authUser">
                        <router-link 
                            to="/login" 
                            class="nlink">Login
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="!authUser">
                        <router-link 
                            to="/signup"
                            class="nlink">Sign up
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="authUser">
                        <router-link 
                            to="/home"
                            class="nlink">
                            {{ authUser.name }}
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="authUser">
                        <a @click="logout()" href="#" class="nlink btn">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        authUser(){
            if(this.$root.auth){
                return this.$root.auth
            } else if(this.$root.admin){
                return this.$root.admin
            } else {return null}
        }
    },
    methods: {
        logout(){
            this.$root.auth = null; 
            this.$root.admin = null;
            localStorage.removeItem('auth');
            localStorage.removeItem('admin');
            this.$router.push('login');
        }
    }
}

</script>

<style scoped>
.navbar {
    height: auto; 
    background:#fff; 
    border-top: 1px solid #e4e9f2; 
    box-shadow: 0 0px 9px rgba(0,0,0,0.3);
}
.navbar-brand {
    margin-top: -5px;
}
.navbar .navbar-nav {
    margin: 10px auto 10px; 
    margin-right: 0; 
    margin-left: auto;
}
.navbar .navbar-nav .nlink {
    color:#251f68; 
    text-decoration: none;
    padding:5px; 
    display: block; 
    font-weight:500; 
    font-size:18px; 
    line-height:20px; 
    margin:0 20px;
}
.navbar .navbar-nav .nlink:hover, 
.navbar .navbar-nav .nlink:focus {
    outline:none; 
    text-decoration: none;
}
.navbar .navbar-toggler {
    color: #251f68; 
    padding: 0; 
    margin: 0 -10px; 
    outline: none;
}
.navbar .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(68,68,68,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");}
@media (max-width: 992px){
    .navbar .navbar-nav .nlink {
        padding: 2px 6px; 
        margin:0 15px; 
        display: block; 
        text-align: center;
    }
}


</style>
