<template>
    <div id="app">
        <router-view></router-view>
        <TabBar />
    </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar.vue";
export default {
        name: 'App',
        data() {
            return {
                
            }
        },
        components:{
            TabBar
        }
    }
</script>

<style lang="stylus">
#app
    height 100%
    width 100%
    
    
</style>
