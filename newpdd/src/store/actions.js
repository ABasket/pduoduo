import {
    getHomeCasual,
    getHomeNav,
    getHomeShoplist,
    getRecommendShopList
} from '../api'
import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST
} from './mutation-types'
export default {
    // 获取首页轮播图数据
    async reqHomeCasual({commit}){
        const result =  await getHomeCasual();
        commit(HOME_CASUAL,{homecasual : result.message.data})
    },
      // 获取首页导航数据
      async reqHomeNav({commit}){
        const result =  await getHomeNav();
        commit(HOME_NAV,{homenav : result.message.data})
    },
     // 获取首页商品列表数据
     async reqHomeShoplist({commit}){
        const result =  await getHomeShoplist();
        commit(HOME_SHOP_LIST,{homeshoplist : result.message.goods_list})
    },
     // 获取
     async reqRecommendShopList({commit}){
        const result =  await getRecommendShopList();
        commit(RECOMMEND_SHOP_LIST,{recommendshoplist : result.message.data})
    }
}