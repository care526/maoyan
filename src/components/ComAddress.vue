<template>
  <router-link to="/cityList" class="address">
    <p>{{address}}<i></i></p>
  </router-link>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ComAddress',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'address'
    ])
  }
}
</script>

<style lang='scss' scoped>
.address {
  position: relative;
  width: 40px;
  height: 40px;
  p {
    position: absolute;
    top: 0;
    left: 20px;
    font-size: 14px;
    line-height: 40px;
    i {
      display: inline-block;
      width: 0;
      height: 0;
      border-top: 4px solid black;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
      margin: 5px 4px 4px 4px;
    }
  }
}
</style>