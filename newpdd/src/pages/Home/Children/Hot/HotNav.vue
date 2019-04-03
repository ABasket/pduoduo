<template>
  <div class="hot-nav">
    <div class="hot-nav-content" v-if="homenav.length>0">
      <div class="nav-content-inner">
        <a class="inner-item" v-for="(nav,index) in homenav" :key="index">
          <img :src="nav.iconurl" alt>
          <span>{{nav.icontitle}}</span>
        </a>
      </div>
    </div>
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarSytle"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "HotNav",
  data() {
    return {
      // 屏幕宽度
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      // 滚动内容的宽度
      scrollContentW: 500,
      // 滚动条背景的长度
      bgBarW: 100,
      // 滚动条长度
      barXwidth: 0,
      // 起点
      startX: 0,
      // 记录结束点
      endFlag: 0,
      // 移动的距离
      barMoveWidth: 0
    };
  },
  mounted() {
    
    this.getBottomBarWidth();
    this.bindEvent();
  },
  methods: {
    getBottomBarWidth() {
      /**
       *  公式：this.screenW / this.scrollContentW = this.barXwidth/this.bgBarW
       *  ===> (this.screenW / this.scrollContentW)*this.bgBarW  = this.barXwidth
       */
      this.barXwidth = this.bgBarW * (this.screenW / this.scrollContentW);
    },
    // 移动端事件监听
    bindEvent() {
      this.$el.addEventListener("touchstart", this.handleTouchStart, false);
      this.$el.addEventListener("touchmove", this.handleTouchMove, false);
      this.$el.addEventListener("touchend", this.handleTouchEnd, false);
    },
    // 开始触摸
    handleTouchStart(event) {
      let touch = event.touches[0];
      this.startX = Number(touch.pageX);
    },
    // 开始移动
    handleTouchMove() {
      let touch = event.touches[0];
      let moveWidth = Number(touch.pageX) - this.startX;
      this.barMoveWidth = -(
        (this.bgBarW / this.scrollContentW) * moveWidth -
        this.endFlag
      );
      // 左右两边边界值处理
      if (this.barMoveWidth <= 0) {
        this.barMoveWidth = 0;
      } else if (this.barMoveWidth >= this.bgBarW - this.barXwidth) {
        this.barMoveWidth = this.bgBarW - this.barXwidth;
      }
    },
    // 触摸结束
    handleTouchEnd() {
      this.endFlag = this.barMoveWidth;
    }
  },
  computed: {
    ...mapState(['homenav']),
    /**
     * innerBarSytle 返回滚动条长度
     */
    innerBarSytle() {
      return {
        width: `${this.barXwidth}px`,
        left: `${this.barMoveWidth}px`
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.hot-nav {
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #fff;
  padding-bottom: 10px;

  .hot-nav-content {
    width: 100%;
    overflow-x: scroll;

    .nav-content-inner {
      width: 720px;
      height: 180px;
      display: flex;
      flex-wrap: wrap;

      .inner-item {
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
          width: 40%;
          margin-bottom: 5px;
        }
      }
    }
  }

  .hot-nav-content::-webkit-scrollbar {
    display: none;
  }

  .hot-nav-bottom {
    width: 100px;
    height: 2px;
    background-color: #cccccc;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: 8px;

    .hot-nav-bottom-inner {
      position: absolute;
      left: 0;
      height: 100%;
      background-color: orangered;
      width: 50px;
    }
  }
}
</style>

