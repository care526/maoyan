<template>
  <router-link to="/seach" class="com_seach">
    <img src="./../assets/seach.png">
  </router-link>
</template>

<script>
export default {
  name: 'Seach'
}
</script>

<style lang='scss' scoped>
.com_seach {
  position: relative;
  width: 40px;
  height: 40px;
  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    margin: 10px 20px 0 0;
  }
}
</style>