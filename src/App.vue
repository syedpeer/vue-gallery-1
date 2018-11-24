<template>
<div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
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
    <router-view />
</div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            msg: "moja apka"
        };
    }
};
</script>

<style lang="scss">
  a {
    color: inherit;
    :hover {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
