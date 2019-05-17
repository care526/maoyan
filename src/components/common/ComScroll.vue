<template>
  <div :ref="name" :class="name">
    <div class="content">
      <slot name="list"></slot>
      <slot value="123" msg="1234"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { setTimeout } from 'timers';
export default {
  name: 'ComScroll',
  data(){
    return {
      params:{
        a:1,
        b:2
      }
    }
  },
  props: {
    name: String, 
    scrollX: {
      type: Boolean,
      default :false
    },
    scrollY: {
      type: Boolean,
      default :false
    },
    click: {
      type: Boolean, 
      default: false
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    myPullDownRefresh: {
      type: Function,
      default: null
    },
    myPullUpLoad: {
      type: Function,
      default: null
    },
    time: {
      type: Number,
      default: 20
    }
  },
  methods: {
    initScroll () {
      //初始化scroll
      this.scroll = new BScroll(this.$refs[this.name], {
        scrollX: this.scrollX,
        scrollY: this.scrollY,
        click: this.click,
        pullDownRefresh: this.myPullDownRefresh,
        pullUpLoad: this.myPullUpLoad
      })
      //顶部的下拉事件
      if (this.pullDownRefresh) {this.refresh()
        this.scroll.on("pullingDown", () => {
          this.myPullDownRefresh();
          this.scroll.finishPullDown();
        })
      }
      //底部的上拉事件
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.myPullUpLoad();
          this.scroll.finishPullUp();
        })
      }
      //监听当前的滚动位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
      });
    },
    refresh(){
      this.scroll && this.scroll.refresh  
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScroll();
    }, 20)
  },
  watch:{
    data(){
      this.setTimeout(()=>{
        this.refresh()
      }, time)
      
    }
  }
}
</script>


<style lang='scss' scoped>
</style>