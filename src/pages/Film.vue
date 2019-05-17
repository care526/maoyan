<template>
  <div>
    <ComHeader :isNeedBack="headerIsNeedBack" :title="headerTitle" />
    <div class="movieDetail">
      <img :src="film.img" />
      <section>
        <h1><b>{{film.nm}}</b></h1>
        <p>{{film.enm}}</p>
        <p v-if="film.sc !== '0.0'"><span>{{film.sc}}</span><b> ({{film.snum}}人评)</b></p>
        <p v-else><span>{{film.bingeWatch}}</span> 想看</p>
        <p>
          {{film.cat}}
          <img v-show="film.version" src="../assets/max_3d.png" />
        </p>
        <p>{{film.src}}/{{film.dur}}分钟</p>
        <p>{{film.pubDesc}}</p>
      </section>
      <i></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ComHeader from '../components/common/ComHeader.vue';
import { constants } from 'crypto';
export default {
  name: 'Film',
  components: {
    ComHeader
  },
  data () {
    return {
      headerTitle: '猫眼电影',
      headerIsNeedBack: true,
      film: {}
    }
  },
  created () {
    axios.post('/movieDetail', {
      id: this.$route.params.id
    }).then(v => {
      this.film = v.data;
      })
  }
}
</script>

<style lang='scss' scoped>
.movieDetail {
  transform: translateY(50px);
  position: relative;
  display: flex;
  img {
    width: 110px;
    height: 150px;
    margin: 20px;
  }
  section {
    margin: 20px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    h1 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 5px;
      span {
        font-size: 20px;
        color: #fc0;
      }
      img {
        width: 43px;
        height: 14px;
        margin: 0 10px;
      }
    }
  }
  i {
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 90px;
    right: 20px;
    background: url('../assets/right.png')
  }
}
</style>