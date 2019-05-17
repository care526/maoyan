<template>
  <div>
    <ComHeader :isNeedBack="headerIsNeedBack" :title="headerTitle" />
    <nav>
      <input type="text" placeholder="搜电影、搜影院">
      <p @click="cancel">取消</p>
    </nav>
  </div>
</template>

<script>
import ComHeader from '../components/common/ComHeader.vue';
export default {
  name: 'Seach',
  components: {
    ComHeader
  },
  data () {
    return {
      headerTitle: '猫眼电影',
      headerIsNeedBack: true
    }
  },
  methods: {
    cancel () {
      this.$router.back();
    }
  }
}
</script>

<style lang='scss' scoped>
nav {
  transform: translateY(50px);
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: .5px solid #d8d8d8;
  background: white;
  input {
    width: 70%;
    height: 28px;
    margin: 5px 25px;
    border: .5px solid #d8d8d8;
    border-radius: 4px;
    text-indent: 30px;
    background: url('../assets/seach_black.png') 6px 6px no-repeat;
  }
  p {
    font-size: 18px;
    color: #e54847;
  }
}
</style>