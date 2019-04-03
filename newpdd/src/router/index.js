import Vue from 'vue';
import VueRouter from 'vue-router';

// 一级路由引入
import Home from './../pages/Home/Home'; // 主页
import Recommend from './../pages/Recommend/Recommend'; // 推荐
import Chat from './../pages/Chat/Chat'; // 聊天
import Me from './../pages/Me/Me'; // 个人中心
import Search from './../pages/Search/Search'; // 搜索


// 二级路由引入
import Hot from './../pages/Home/Children/Hot/Hot';
import Box from './../pages/Home/Children/Box';
import Dress from './../pages/Home/Children/Dress';
import Ele from './../pages/Home/Children/Ele';
import Food from './../pages/Home/Children/Food';
import General from './../pages/Home/Children/General';
import Man from './../pages/Home/Children/Man';
import Mbaby from './../pages/Home/Children/Mbaby';
import Shirt from './../pages/Home/Children/Shirt';

Vue.use(VueRouter);
export default new VueRouter({
    // 一级路由
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: '/home',
                    redirect: '/home/hot'
                },
                {
                    path: 'hot',
                    component: Hot
                },
                {
                    path: 'box',
                    component: Box
                },
                {
                    path: 'dress',
                    component: Dress
                },
                {
                    path: 'ele',
                    component: Ele
                },
                {
                    path: 'food',
                    component: Food
                },
                {
                    path: 'general',
                    component: General
                },
                {
                    path: 'man',
                    component: Man
                },
                {
                    path: 'mbaby',
                    component: Mbaby
                },
                {
                    path: 'shirt',
                    component: Shirt
                },

            ]
        },
        {
            path: '/recommend',
            component: Recommend
        },
        {
            path: '/chat',
            component: Chat
        },
        {
            path: '/me',
            component: Me
        },
        {
            path: '/search',
            component: Search
        },
    ]
});