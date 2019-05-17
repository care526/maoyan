<template>
  <header class="head">
    <h1>{{ title }}</h1>
    <img v-if="isNeedBack" src="../../assets/back.png" @click="this.back" />
  </header>
</template>

<script>
export default {
  name: 'ComHeader',
  props: {
    title: String,
    isNeedBack: Boolean
  },
  methods: {
    back () {
      this.$router.back();
    }
  }
}
</script>
 

<style lang='scss' scoped>
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
  background-color: #e54847;
  h1 {
    color: white;
    font-size: 18px;
    text-align: center;
    line-height: 50px;
  }
  img {
    position: absolute;
    top: 10px;
    left: 4px;
  }
}
</style>