<template>
  <div class="movie_item2">
    <router-link :to="{path: '/file/' + movie.id}" v-for="(movie, index) in movieExpected" :key="index">
      <img :src="movie.img" />
      <p>{{movie.wish}}人想看</p>
      <p>{{movie.nm}}</p>
      <p>{{movie.comingTitle}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MovieItem2',
  props: {
    movieExpected: Array
  },
  methods: {
    stopVisit () {
      alert('该功能暂未开放')
    }
  }
}
</script>
 
<style lang='scss' scoped>
.movie_item2 {
  position: relative;
  display: flex;
  a {
    img {
      width: 85px;
      height: 115px;
      margin: 10px 7px 2px 8px;
    }
    p:nth-of-type(1) {
      position: absolute;
      top: 105px;
      color: #faaf00;
      font-size: 12px;
      font-weight: 600;
      text-align: center;
    }
    p {
      width: 85px;
      margin: 2px 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow:ellipsis;
    }
  }
}
</style>