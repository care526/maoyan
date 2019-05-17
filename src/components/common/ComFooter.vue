<template>
  <footer class="foot" ref="foot">
    <router-link to="/movie">
      <img v-if="path.slice(1, 6) === 'movie' ? true : false" src="../../assets/movieFocus.png" />
      <img v-else src="../../assets/movie.png" />
      <p :class="path.slice(1, 6) === 'movie' ? 'focusColor' : ''">电影</p>
    </router-link>
    <router-link to="/cinema">
      <img v-if="path === 'cinema' ? true : false" src="../../assets/cinemaFocus.png" />
      <img v-else src="../../assets/cinema.png" />
      <p :class="path === 'cinema' ? 'focusColor' : ''">影院</p>
    </router-link>
    <router-link to="/user">
      <img src="../../assets/user.png" />
      <p>我的</p>
    </router-link>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex';
import { SET_WINDOWHEIGHT } from '../../store/mutation-types';
import { constants } from 'crypto';
export default {
  name: 'ComFooter',
  props: {
    path: String
  },
  methods: {
    ...mapMutations({
      'setWindowHeight': SET_WINDOWHEIGHT
    })
  },
  created () {
    this.$nextTick(() => {
      //90是整个窗口最上面的两个部分的高度，50 + 40
      this.setWindowHeight(this.$refs.foot.offsetTop - 90);
    })
  }
}
</script>
 

<style lang='scss' scoped>
.foot {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 50px;
  border-top: .5px solid #d8d8d8;
  background-color: #f5f5f5;
  a {
    width: 30%;
    img {
      position: relative;
      left: 50%;
      transform: translateX(-12px);
      margin-top: 5px;
    }
    p {
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>