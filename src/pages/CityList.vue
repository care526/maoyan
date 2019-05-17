<template>
  <div class="cityList wrapper3" ref="wrapper3" :style="{height: windowHeight}">
    <div class="content">
      <div id="city_recent">
        <p>最近访问的城市</p>
        <ul>
          <li v-for="(city, index) in recentCitys" @click="setCity(city)" :key="index">{{city}}</li>
        </ul>
      </div>
      <div id="city_hot">
        <p>热门城市</p>
        <ul>
          <li v-for="(city, index) in hotCitys" @click="setCity(city)" :key="index" >{{city}}</li>
        </ul>
      </div>
      <!-- 将id设置为city_A,city_B,city_C...... -->
      <div :id="Object.keys(letter)[0]" v-for="(letter, index) in allCitys" :key="index">
        <p>{{ (Object.keys(letter)[0]) }}</p>
        <ul>
          <li v-for="(city, index) in letter[Object.keys(letter)[0]]" @click="setCity(city)" :key="index">{{city}}</li>
        </ul>
      </div>
    </div>
    <nav>
        <ul>
          <li>
            <a @click="scrollTo('city_recent')">最近</a>
          </li>
          <li>
            <a @click="scrollTo('city_hot')">热门</a>
          </li>
          <li v-for="(list, index) in lists" :key="index">
            <!-- <a :href="'#' + list">{{list}}</a> -->
            <a @click="scrollTo(list)">{{list}}</a>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import { mapMutations } from 'vuex'
import { SET_ADDRESS } from '../store/mutation-types.js'
import { constants } from 'crypto';
export default {
  name: 'CityList',
  data () {
    return {
      //最近使用的城市
      recentCitys: ['南京', '北京', '武汉'],
      //热门城市
      hotCitys: [],
      //所有城市
      allCitys: [
        { A: ['阿拉善盟', '鞍山', '安庆', '安阳'] },
        { B: ['北京', '保定', '蚌埠', '包头'] },
        { C: ['重庆', '鞍山', '安庆'] },
        { D: ['大连', '鞍山', '安庆', '安阳'] },
        { E: ['阿拉善盟', '鞍山', '安庆', '安阳'] },
        { F: ['阿拉善盟', '鞍山', '安庆', '安阳'] },
        { G: ['阿拉善盟', '鞍山', '安庆', '安阳'] },
        { H: ['阿拉善盟', '鞍山', '安庆', '安阳'] },
        { I: ['阿拉善盟', '鞍山', '安庆', '安阳'] }
      ],
      lists: ['A','B','C','D','E','F','G','H','I',],
      windowHeight: this.$store.state.height + 'px',
      scrolled: 0
    }
  },
  watch: {
    windowHeight (val, oldVal) {
      document.getElementsByClassName('wrapper3')[0].style.height = this.windowHeight;
    }
  },
  methods: {
    setCity (city) {
      this.setAddress(city);
      // 更新最近城市数组
      // 添加之前判断最近城市中是否包含该城市
      if (!this.recentCitys.some(function (x) {
        return x === city;
      })) {
        this.recentCitys.unshift(city)  //添加
        this.recentCitys.pop();  //删除
      }
      // 设置成功后返回上一页
      this.$router.back();
    },
    scrollTo (list) {
      let maxScrollHeight = 0 - this.scroll.maxScrollY; //负数
      // console.log(maxScrollHeight);
      //获取待滑动的block的距离（当前元素距顶部的高度 - 以滑动的距离）
      let willScrollHeight = document.getElementById(list).offsetTop;
      willScrollHeight = willScrollHeight <= maxScrollHeight ? willScrollHeight : maxScrollHeight;
      // 滚动到指定位置
      this.scroll.scrollTo(0, 0 - willScrollHeight, 700);
    },
    ...mapMutations({
      setAddress: 'SET_ADDRESS'
    })
  },
  created () {
    //获取当前的热门城市
    axios.post('/hotCitys')
      .then((v) => {
        this.hotCitys = v.data;
      })
  },
  mounted () {
    //设置滚动
    this.scroll = new BScroll(this.$refs.wrapper3, {
      scrollY: true,
      click: true 
    })
    // 监听滚动当前的位置
    this.scroll.on('scroll', (position) => {
      this.scrolled = 0 - position.y;
    });
  }
}
</script>

<style lang='scss' scoped>
.cityList {
  width: 100%;
  overflow: hidden;
  background: #ebebeb;
  div {
    position: relative;
    div {
      p {
        height: 30px;
        margin-left: 15px;
        line-height: 30px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 15px;
        background: rgb(245, 245, 245);
        li {
          width: 28%;
          height: 30px;
          margin: 15px 2% 0 2%;
          text-align: center;
          line-height: 30px;
          background: white;
          border: 1px solid rgb(230, 230, 230);
        }
      }
    }
  }
  nav {
    width: 30px;
    position: fixed;
    top: 100px;
    right: 0;
    ul {
      li {
        text-align: center;
      }
    }
  }
}
</style>