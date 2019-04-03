<template>
  <div class="hot">
    <div class="swiper-container" v-if="homecasual">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(casual,index) in homecasual" :key="index">
          <img :src="casual.imgurl" style="width:100%" alt>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <hot-nav/>
    <!-- 广告位  -->
    <div class="hot-ad">
      <img src="./../../imags/center_banner.jpeg" style="width:100%" alt>
    </div>
    <hot-shop-list/>
  </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import HotNav from "./HotNav.vue"
import HotShopList from "./HotShopList"
import {
  mapState
} from 'vuex'
export default {
  name: "Hot",
  data() {
    return {};
  },
  computed:{
    ...mapState(['homecasual'])
  },
  mounted() {
    // 请求轮播数据
    this.$store.dispatch('reqHomeCasual');
    this.$store.dispatch('reqHomeNav');
    this.$store.dispatch('reqHomeShoplist');
    
    
  },
  watch:{
    homecasual() {
      this.$nextTick(()=>{
        new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 1000
      },

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
      })
    }
  },
  components: {
    HotNav,
    HotShopList
  }
}
</script>

<style lang="stylus" scoped>
.hot {
  height: 100%;
  margin-top: 42px;

  .hot-ad {
    background-color: #ffffff;
    margin: 8px 0;
    padding: 5px;
  }
}
</style>