<template>
  <div class="shop-content">
    <ul class="shop-list">
      <li class="shop-list-item" v-for="(shop,index) in homeshoplist" :key="index">
        <img :src="shop.image_url" style="width:100%" alt>
        <h4 class="list-item-title">{{shop.short_name}}</h4>
        <div class="list-item-bottom">
          <span class="item-price">￥{{shop.normal_price/100}}</span>
          <span class="item-counter">{{shop.sales_tip}}</span>
          <span class="item-user">
            <img :src="user.avatar"  v-for="(user,index) in shop.bubble"  :key="index" alt>
          </span>
          <span class="item-by">
            <button>去拼单</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "HotShopList",
  data() {
    return {};
  },
  computed:{
    ...mapState(['homeshoplist'])
  }
};
</script>

<style lang="stylus" scoped>
  .shop-content
    margin-bottom 50px
    background-color #f5f5f5
    .shop-list
      .shop-list-item
        margin-bottom 10px
        background-color #f5f5f5
        display flex
        flex-direction column
        .list-item-title
          line-height 22px
          width 94%
          margin-left 3%
          height 44px
          overflow hidden
        .list-item-bottom
          margin 10px 0
          display flex
          flex-direction row
          justify-content space-around
          align-items center
          .item-price
            font-size 18px
            text-align center
            font-weight bolder
            color red
          .item-counter
            flex 2
            font-size 12px
            color #cccccc
          .item-user
            display flex
            justify-content center
            align-items center
            flex 1
            img 
              width 40px
              border-radius 50%
            img:nth-child(2)
              margin-left -6px
          .item-by
            flex 2
            button
              font-size 15px
              border none 
              width 80%
              height 34px
              display flex
              color #ffffff
              justify-content center
              align-items center
              margin-left 10px
              border-radius 8px
              background-color red
          



</style>