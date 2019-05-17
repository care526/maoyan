<template>
  <ComScroll v-bind="options">
    <ul>
      <MovieItem1 :movieList="movieList" />
    </ul>
  </ComScroll>
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import MovieItem1 from './common/MovieItem1.vue';
import ComScroll from '../components/common/ComScroll.vue'
import { constants } from 'crypto';
export default {
  name: 'HotMovies',
  components: {
    MovieItem1,
    ComScroll
  },
  data () {
    return {
      //滑动组件的参数
      options: {
        name: 'hotMovie',
        scrollY: true,
        click: true,
        pullDownRefresh: {
          threshold: 50,
          stop: 0
        },
        pullUpLoad: {
          threshold: -50
        },
        myPullDownRefresh: this.myPullDownRefresh,
        myPullUpLoad: this.myPullUpLoad,
      },
      movieList: []
    }
  },
  computed: {
    windowHeight () {
      return (this.$store.state.height -140) + 'px';
    }
  },
  watch: {
    windowHeight (val, oldVal) {
      document.getElementsByClassName(this.options.name)[0].style.height = this.windowHeight;
    }
  },
  methods: {
    myPullDownRefresh () {
      this.movieList = [];
      this.reStart();
    },
    myPullUpLoad () {
      axios.post('/movieOnInfoList').then(v => {
        console.log(v.data)
        v.data.forEach(movie => {
          this.movieList.push(movie);
        });
        console.log('增加了')
        }, j => {
        console.log('数据请求失败')
      })
    },
    reStart () {
      axios.post('/movieOnInfoList')
      .then(v => {
        this.movieList = v.data;
      }, j => {
        console.log('数据请求失败')
      })
    }
  },
  created () {
    //请求数据，初始化
    this.reStart();
    this.$nextTick(() => {
      document.getElementsByClassName('hotMovie')[0].style.height = this.windowHeight;
    })
  }
}
</script>


<style lang='scss' scoped>
.hotMovie {
  width: 100%;
  overflow: hidden;
  transform: translateY(90px)
}
</style>