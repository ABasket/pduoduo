<template>
    <div class="home">
        <ly-tab v-model="selectedId"
                :items="items"
                :options="options"
                @change="handleChange"
                class="lay-tab"
        />
    <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                selectedId:0,
                items:[
                    {
                        label: '热门'
                    },
                    {
                         label: '服饰'
                    },
                    {
                         label: '鞋包'
                    },
                    {
                         label: '母婴'
                    },
                    {
                         label: '百货'
                    },
                    {
                         label: '食品'
                    },
                    {
                         label: '内衣'
                    },
                    {
                        label: '男装'
                    },
                    {
                        label: '电器'
                    }

                        
                        
                ],
                options:{
                    activeColor:'#e9232c'
                },
                subRouterUrl:[
                    '/home/hot',
                    '/home/dress',
                    '/home/box',
                    '/home/mbaby',
                    '/home/general',
                    '/home/food',
                    '/home/shirt',
                    '/home/man',
                    '/home/ele'
                ]
            }
        },
        methods:{
            handleChange(item,index) {
                 // console.log(item,index);
                 this.$router.replace(this.subRouterUrl[index])
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .home
        background-color #f1f1f1;
        height 100%
        width 100%
        .lay-tab
            position fixed
            left 0
            top 0
            width 100%
            z-index 999
        
</style>