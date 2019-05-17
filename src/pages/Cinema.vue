<template>
  <div class="cinema">
    <ComHeader v-bind:isNeedBack="headerIsNeedBack" v-bind:title="headerTitle" />
    <nav>
      <!-- 定位组件 -->
      <ComAddress />
      <router-link :to="{path: 'seach'}">
        <input type="text" placeholder="搜影院" />
      </router-link>
    </nav>
    <ComFooter v-bind:path="routeName" />
  </div>
</template>

<script>
import ComHeader from '../components/common/ComHeader.vue';
import ComFooter from '../components/common/ComFooter.vue';
import ComAddress from '../components/ComAddress.vue'
export default {
  name: 'cinema',
  data () {
    return {
      routeName: this.$route.name,
      headerTitle: '影院',
      headerIsNeedBack: false
    }
  },
  components: {
    ComHeader,
    ComFooter,
    ComAddress
  }
}
</script>

<style lang='scss' scoped>
.cinema > nav {
  transform: translateY(50px);
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: .5px solid #d8d8d8;
  background: rgb(245, 245, 245);
  a {
    font-size: 16px;
    width: 25%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  a:nth-of-type(2) {
    width: 75%;
    input {
      width: 85%;
      height: 28px;
      text-indent: 10px;
      border: .5px solid #d8d8d8;
      border-radius: 4px;
    }
  }
}
</style>