<template>
<div id="app">
    <b-navbar type="dark" class="nav" toggleable="md">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Pix</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item href="#">
                    <router-link to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link to="/albums">Albums</router-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <background-anim/>
    <router-view />
</div>
</template>

<script>
import BackgroundAnim from './components/BackgroundAnim.vue'
export default {
    name: "app",
    components: {
        BackgroundAnim
    },
    data() {
        return {
            msg: "moja apka"
        };
    }
};
</script>

<style lang="scss">
#app {
    background-color: #dcdcdd;
    position: relative;
    overflow: hidden;
}
.nav {
    z-index: 10;
    background-color: #231F20;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
    position: fixed;
    width: 100%;
}

a {
    color: #DCDCDD;

    :hover {
        color: inherit;
        text-decoration: none;
    }
}

.navbar-dark .navbar-brand {
    color: #FEB914;
    font-weight: 900;
}
</style>
