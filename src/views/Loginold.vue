<template>
  <div class="login-container">
    <div class="animated-lines"></div>
    <el-card class="box-card">
      <div class="login-title">管理员登录</div>
      <el-form :model="loginInfo" ref="loginRef" :rules="rules" label-width="80px">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="loginInfo.username" clearable placeholder="请输入你的用户名" :prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="loginInfo.password" show-password clearable type="password" placeholder="请输入你的密码" :prefix-icon="Lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="LoginButtonDisabled" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, watch, reactive, onMounted } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';

const loginInfo = reactive({
  username: "",
  password: ""
});

const loginRef = ref(); // 确保这部分在 setup 函数内

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

let LoginButtonDisabled = ref(true);

watch([() => loginInfo.username, () => loginInfo.password], () => {
  try {
    loginRef.value.validate((valid) => {
      if (valid) {
        LoginButtonDisabled.value = false;
      } else {
        LoginButtonDisabled.value = true;
      }
    });
  } catch (error) {
    console.error('Error in watcher callback:', error);
  }
});

const submitForm = () => {
  loginRef.value.validate((valid) => {
    if (valid) {
      console.log('登录成功');
      alert('登录成功');
    }
  });
};
</script>

<style scoped>
/* .login-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
} */

.box-card {
  position: relative;
  width: 400px;
  z-index: 2; /* 确保卡片在线条背景之上 */
}

.login-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.el-form-item {
  text-align: center;
}

.el-button {
  width: 20%;
  margin: 0 150px 0 auto;
}

.animated-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #3498db, #2ecc71, #e74c3c, #f39c12);
  background-size: 400% 400%;
  animation: gradientAnimation 10s infinite;
  z-index: 1; /* 确保在卡片之下 */
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
