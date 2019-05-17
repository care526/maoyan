<template>
  <div class="movie">
    <ComHeader :isNeedBack="headerIsNeedBack" v-bind:title="headerTitle" />
    <nav>
      <!-- 定位组件 -->
      <ComAddress />
      <router-link :to="{name: 'movie/hotMovies'}" :class="routeName.slice(7) === 'hotMovies' ? 'focusColor' : ''">
        正在热映
      </router-link>
      <router-link :to="{name: 'movie/willShow'}" :class="routeName.slice(7) === 'willShow' ? 'focusColor' : ''">
        即将上映
      </router-link>
      <ComSeach />
    </nav>
    <keep-alive>
      <transition name="movie">
        <router-view />
      </transition>
    </keep-alive>
    <ComFooter :path="routeName" />
  </div>
</template>

<script>
import ComHeader from '../components/common/ComHeader.vue';
import ComFooter from '../components/common/ComFooter.vue';
import ComSeach from '../components/ComSeach.vue';
import ComAddress from '../components/ComAddress.vue';
export default {
  name: 'movie',
  data () {
    return {
      headerTitle: '猫眼电影',  
      headerIsNeedBack: false,
      focus: 0
    }
  },
  components: {
    ComHeader,
    ComFooter,
    ComSeach,
    ComAddress  
  },
  computed: {
    routeName () {
      return this.$route.path;
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.movie {
  height: 100%;
}
.movie > nav {
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #f5f5f5;
  border-bottom: .5px solid #d8d8d8;
  div, a {
    font-size: 16px;
    width: 25%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  a {
    position: relative;
    z-index: 100;
    background-color: #f5f5f5;
  }
}
.movie-enter-active, .movie-leave-active {
  transition: all .1s ease-out;
}
.movie-enter, .movie-leave-to {
  opacity: 0;
}
</style>