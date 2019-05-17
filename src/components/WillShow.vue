<template>
    <ComScroll v-bind="options1">
      <p :style="{'padding': '5px 0 0 10px'}">近期最受期待</p>
      <ComScroll v-bind="options2" :data="movieExpected">
        <movie-item2 :movieExpected="movieExpected" />
      </ComScroll>
      <p class="box_stall"></p>
      <ul>
        <MovieItem1 :movieList="movieComingList"/>
      </ul>
    </ComScroll>
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import MovieItem1 from './common/MovieItem1.vue';
import MovieItem2 from './common/MovieItem2.vue';
import ComScroll from '../components/common/ComScroll.vue';
export default {
  name: 'WillShow',
  components: {
    MovieItem1,
    MovieItem2,
    ComScroll
  },
  data () {
    return {
      options1: {
        name: 'willComing',
        scrollY: true,
        click: true,
        pullDownRefresh: {
          threshold: 50,
          stop: 0
        },
        pullUpLoad: {
          threshold: -50
        },
        myPullDownRefresh: this.myPullDownRefresh1,
        myPullUpLoad: this.myPullUpLoad1,
      },
      options2: {
        name: 'mostExpect',
        scrollX: true,
        click: true,
        pullUpLoad: {
          threshold: -50
        },
        myPullUpLoad: this.myPullUpLoad2,
      },
      movieComingList: [],
      movieExpected: []
    }
  },
  computed: {
    windowHeight () {
      return (this.$store.state.height -140) + 'px';
    }
  },
  watch: {
    windowHeight (val, oldVal) {
      document.getElementsByClassName(this,options1.name)[0].style.height = this.windowHeight;
    }
  },
  methods: {
    myPullDownRefresh1 () {
      this.movieComingList = [];
      this.reStartComingMovie();
    },
    myPullUpLoad1 () {
      axios.post('/comingList').then(v => {
        console.log(v.data)
        v.data.forEach(movie => {
          this.movieComingList.push(movie);
        });
        console.log('增加了')
      }, j => {
        console.log('数据请求失败')
      })
    },
    myPullUpLoad2 () {
      console.log('增加了');
    },
    reStartComingMovie () {
      axios.post('/comingList').then(v => {
        this.movieComingList = v.data;
        }, j => {
          console.log('请求出错')
        })
    }
  },
  created () {
    axios.post('/mostExpected')
      .then(v => {
        this.movieExpected = v.data;
        this.$nextTick(() => {
          //设置滑动组件的初始状态
          document.getElementsByClassName('mostExpect')[0]
                  .getElementsByClassName('content')[0]
                  .style.width = this.movieExpected.length * 101 + 'px';
          document.getElementsByClassName('willComing')[0].style.height = this.windowHeight;
        })
      }, j => {
        console.log('请求出错')
      })
    this.reStartComingMovie();
  }
}
</script>


<style lang='scss' scoped>
.willComing {
  width: 100%;
  transform: translateY(90px);
  overflow: hidden;
  .mostExpect {
    width: 94%;
    margin: 0 3%;
    overflow: hidden;
  }
  .box_stall {
    width: 100%;
    height: 10px;
    margin: 8px 0 5px 0;
    background: white;
  }
}


</style>