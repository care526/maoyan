<template>
  <transition name="fade">
    <router-view /> 
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';
import { SET_HEIGHT } from './store/mutation-types';
export default {
  name: 'app',
  methods: {
    ...mapMutations({
      setHeight: SET_HEIGHT
    })
  },
  mounted () {
    //防抖处理函数
    function debounce (fn, wait) {
      var timer = null; //定时器
      return function () {
        if (timer !== null)
          clearTimeout(timer);
        timer = setTimeout(fn, wait);
      }
    }
    window.onresize = debounce(() => {
      this.setHeight(window.innerHeight)
    }, 100)
  }
}
</script>

<style lang='scss' scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease-out;
}
.fade-enter, .fade-leave-to {
  transform: translateY(500px);
  opacity: 0;
}
</style>
