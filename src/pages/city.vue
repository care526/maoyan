<template>
  <div class="test">
    <ComScroll v-bind="options">
     <template slot="list">
       <ul>
        <div v-for="(city, index) in citys" :key="index" @click="asd(city)">{{ city }}</div>
      </ul>
     </template>
       <template slot-scope="props">
          <span>{{props.msg}}</span>
        </template>

    </ComScroll>
  </div>
</template>

<script>
import ComScroll from '../components/common/ComScroll.vue';
import { constants } from 'crypto';
export default {
  name: 'cityList',
  components: {
    ComScroll
  },
  data () {
    return {
      options: {
        name: 'city',
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
        getScrollPosition: this.getScrollPosition
      },
      citys: [1,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    }
  },
  methods: {
    asd (city) {
      console.log(this.$props)
    },
    myPullDownRefresh () {
      console.log('pullDownRefresh')
    },
    myPullUpLoad () {
      console.log('pullUpLoad')
    }
  }
}
</script>

<style lang='scss' scoped>
.city {
  width: 100px;
  height: 200px;
  overflow: hidden;
  text-align: center;
  div {
    width: 20px;
  }
}
</style>