<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-title">管理员登录</div>
      <el-form :model="loginForm" ref="loginFormRef" :rules="loginRules" label-width="80px">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="loginForm.username" clearable placeholder="请输入你的用户名" :prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="loginForm.password" clearable type="password" placeholder="请输入你的密码"
            :prefix-icon="Lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';

const loginFormRef = ref(null);

const loginForm = ref({
  username: '',
  password: ''
});

const loginRules = ref({
  username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }]
});

const submitForm = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      // Your login logic here
      console.log('Login successful');
    } else {
      return false;
    }
  });
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-card {
  width: 400px;
}

.login-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.el-form-item {
  text-align: center;
  /* 让表单项内的内容居中显示 */
}

.el-button {
  margin-left: 70px;

}
</style>
