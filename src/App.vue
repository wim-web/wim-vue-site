<template>
    <div id="app">
        <main class="main">
            <profile class="profile"/>
            <menu-bar class="menu-bar"/>
            <transition mode="out-in">
                <router-view/>
            </transition>
        </main>
    </div>
</template>

<script>
  import Profile from "./components/Profile";
  import MenuBar from "./components/MenuBar";

  export default {
    components: {MenuBar, Profile},
  }
</script>

<style scoped lang="scss">
    .main {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .profile {
        margin-top: 50px;
    }
    
    .menu-bar {
        margin: 40px 0;
    }
    
    .v-enter-active, .v-leave-active {
        transition: .3s;
    }
    
    .v-enter, .v-leave-to {
        opacity: 0;
    }
</style>