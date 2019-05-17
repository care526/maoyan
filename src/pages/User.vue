<template>
  <div>
    <ComHeader :isNeedBack="headerIsNeedBack" :title="headerTitle" />
  </div>
</template>

<script>
import ComHeader from '../components/common/ComHeader.vue';
export default {
  name: 'user',
  data () {
    return {
      headerTitle: '猫眼电影',
      headerIsNeedBack: true
    }
  },
  components: {
    ComHeader
  }
}
</script>


<style lang='scss' scoped>

</style>