<template>
  <div>
    <ComHeader :isNeedBack="headerIsNeedBack" :title="headerTitle" />
    <section class="login-from">
      <!-- 表单部分 -->
      <div>
        <p @click="focusCount" :class="login_count ? 'focus' : ''">美团账号登录</p>
        <p @click="focus2Phone" :class="login_phone ? 'focus' : ''">手机验证登录</p>
      </div>
      <!-- 美团账号登录 -->
      <form v-show="login_count">
        <input type="text" placeholder="账户名/手机号/Email" />
        <input type="text" placeholder="请输入您的密码" />
        <button>登录</button>
      </form>
      <!-- 手机验证登录 -->
      <form v-show="login_phone">
        <input type="text" placeholder="请输入手机号" v-model="login_phone_number" />
        <p :class="ButtonDisabled ? 'ButtonDisabled' : ''">获取验证码</p>
        <input type="text" placeholder="请输入短信验证码" />
        <button :class="ButtonDisabled ? 'ButtonDisabled' : ''">登录</button>
      </form>
      <!-- 立即注册/找回密码/服务电话 -->
      <footer>
        <nav>
          <p>立即注册</p>
          <p class="findPassword">找回密码</p>
        </nav>
        <address>©猫眼电影客服电话：<span>400-670-5353</span></address>
      </footer>
    </section>
  </div>
</template>

<script>
import ComHeader from '../components/common/ComHeader.vue';
export default {
  name: 'Login',
  components: {
    ComHeader
  },
  data () {
    return {
      //header的数据
      headerTitle: '猫眼电影',
      headerIsNeedBack: true,
      //表单的切换
      login_count: true,
      login_phone: false,
      //手机登录的数据
      login_phone_number: '',
      //buttom的禁用样式
      ButtonDisabled: true
    }
  },
  methods: {
    focusCount () {
      this.login_phone = !this.login_phone;
      this.login_count = !this.login_count;
    },
    focus2Phone () {
      this.login_count = !this.login_count;
      this.login_phone = !this.login_phone;
    }
  },
  watch: {
    login_phone_number (val, oldVal) {
      if (val.length === 11) {
        this.ButtonDisabled = false;
      } else {
        console.log(this.ButtonDisabled)
        this.ButtonDisabled = true;
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.login-from {
  transform: translateY(50px);
  margin: auto 10px;
  div {
    display: flex;
    p {
      width: 50%;
      font-size: 16px;
      padding: 5px 0;
      text-align: center;
    }
    p.focus {
      color: #e54847;
      border-bottom: 4px solid #e54847;
    }
  }
  form {
    margin-top: 8px;
  }
  form:nth-of-type(1) {
    width: 100%;
    input {
      width: 100%;
      height: 30px;
      margin: 5px 0;
      text-indent: 5px;
      border: none;
      border-bottom: .5px solid #d8d8d8;
      border-radius: 4px;
      &:focus {
        background: #dcdcdc;
      }
    }
    button {
      width: 100%;
      height: 50px;
      margin: 5px 0;
      font-size: 24px;
      color: white;
      border: none;
      background: #e54847;
    }   
  }
  form:nth-of-type(2) {
    position: relative;
    width: 100%;
    input {
      width: 100%;
      height: 30px;
      margin: 5px 0;
      text-indent: 5px;
      border: none;
      border-bottom: .5px solid #d8d8d8;
      border-radius: 4px;
      &:focus {
        background: #dcdcdc;
      }
    }
    p {
      position: absolute;
      top: 6px;
      right: 0;
      height: 20px;
      color: #e54847;
      background: white;
      border: 1px solid #e54847;
      border-radius: 5px;
      padding: 4px 10px;
    }
    button {
      width: 100%;
      height: 50px;
      margin: 5px 0;
      font-size: 24px;
      color: white;
      border: none;
      background: #e54847;
    }   
  }
  footer {
    nav {
      display: flex;
      width: 100%;
      font-size: 16px;
      color: #e54847;
      p {
        width: 50%;
      }
      .findPassword {
        text-align: right;
      }
    }
    address {
      margin-top: 10px;
      text-align: center;
      span {
        color: #e54847;
      }
    }
  }
}
.ButtonDisabled {
  color: #999 !important;
  background: #dcdcdc !important;
  border-color: #999 !important;
}
</style>