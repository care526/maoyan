<template>
  <div class="movie_item1">
    <router-link :to="{path: '/file/' + movie.id}" v-for="(movie, index) in movieList" :key="index">
        <nav>
          <img :src="movie.img" />
          <div>
            <p>
              <b>{{movie.nm}}</b>
              <img v-show="movie.version" src="../../assets/max_3d.png" />
            </p>
            <p v-if="movie.sc !== '0.0'">观众评 <i>{{movie.sc}}</i></p>
            <p v-else><i>{{movie.wish}}</i> 人想看</p>
            <p>主演：{{movie.star}}</p>
            <p>{{movie.showInfo}}</p>
          </div>
          <span @click.prevent="stopVisit">
            <button v-if="movie.sc === '0.0'" class="buttonBlue">预售</button>
            <button v-else  class="buttonRed">购票</button>
          </span>
        </nav>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'MovieItem1',
  props: {
    movieList: Array
  },
  methods: {
    stopVisit () {
      alert('该功能暂未开放')
    }
  }
}
</script>
 
<style lang='scss' scoped>
.movie_item1 {
  a {
    position: relative;
    display: flex;
    width: 100%;
    height: 114px;
    background: #f5f5f5;
    nav {
      position: relative;
      width: 100%;
      padding: 10px 0;
      font-style: 12px;
      border-bottom: .5px solid #d8d8d8;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 64px;
        height: 90px;
        margin: 12px 10px;
      }
      div {
        margin-left: 84px;
        width: calc(100% - 65px - 84px);
        height: 90px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          min-width: 160px;
          b {
            font-size: 16px;
          }
          img {
            position: relative;
            top: 1px;
            left: 6px;
            width: 43px;
            height: 14px;
            margin: 0;
          }
          i {
            color: #faaf00;
          }
        }
      }
      span {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        height: 60px;
        padding: 40px 15px 0 0;
        background: #f5f5f5;
        .buttonRed, .buttonBlue {
          width: 50px;
          height: 30px;
          background-color: #f03d37;
          border: none;
          border-radius: 4px;
          color: white;
        }
        .buttonBlue {
          background-color: #3c9fe6;
        }
      }
    }
  }
}
</style>