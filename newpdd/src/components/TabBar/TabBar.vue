<template>
    <div class="tabbar">
        <span class="tab-item" @click="switchTo('/home')">
            <img :src="$route.path.includes('/home') ? tabBarImgArr[0].selected:tabBarImgArr[0].normal" alt="images in home">
            <span :class="{on:$route.path.includes('/home')}">首页</span>
        </span>
        <span class="tab-item" @click="switchTo('/recommend')">
            <img :src="$route.path.includes('/recommend') ? tabBarImgArr[1].selected:tabBarImgArr[1].normal" alt="images in recommend">
            <span :class="{on:$route.path.includes('/recommend')}">推荐</span>
        </span>
        <span class="tab-item" @click="switchTo('/search')">
            <img :src="$route.path.includes('/search')? tabBarImgArr[2].selected:tabBarImgArr[2].normal" alt="images in search">
            <span :class="{on:$route.path.includes('/search')}">搜索</span>
        </span>
        <span class="tab-item" @click="switchTo('/chat')">
            <img :src="$route.path.includes('/chat') ? tabBarImgArr[3].selected:tabBarImgArr[3].normal" alt="images in chat">
            <span :class="{on:$route.path.includes('/chat')}">聊天</span>
        </span>
        <span class="tab-item" @click="switchTo('/me')"> 
            <img :src="$route.path.includes('/me') ? tabBarImgArr[4].selected:tabBarImgArr[4].normal" alt="images in me">
            <span :class="{on:$route.path.includes('/me')}">我的</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'TabBar',
        data() {
            return {
                tabBarImgArr:[
                    {
                        normal: require('./../../../static/images/home.png'),
                        selected:require('./../../../static/images/home_selected.png')
                    },
                    {
                        normal: require('./../../../static/images/recommend.png'),
                        selected:require('./../../../static/images/recommend_selected.png')
                    },
                    {
                        normal: require('./../../../static/images/search.png'),
                        selected:require('./../../../static/images/search_selected.png')
                    },
                    {
                        normal: require('./../../../static/images/chat.png'),
                        selected:require('./../../../static/images/chat_selected.png')
                    },
                    {
                        normal: require('./../../../static/images/me.png'),
                        selected:require('./../../../static/images/me_selected.png')
                    },
                ]
            }
        },
        methods:{
            switchTo(path) {
                // console.log(this.$router);
                this.$router.replace(path);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .tabbar
        width 100%
        height 50px
        background-color #fff
        position fixed
        left 0
        bottom 0
        display flex
        z-index 999
        .tab-item
            display flex
            flex 1
            flex-direction column
            align-items center
            justify-content center
            font-size 14px
            color rgb(0,0,0)
            img 
                width 35%
                margin-bottom 2px
            .on
                color rgb(216,30,6)


        
</style>
