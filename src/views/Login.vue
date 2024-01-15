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
          <el-button :disabled="LoginButtonDisabled" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';

const loginFormRef = ref(null);

const loginForm = ref({
  username: '',
  password: ''
});

const LoginButtonDisabled = ref(true);

const loginRules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

onMounted(() => {
  // Access el-form instance using refs
  loginFormRef.value.validate((valid) => {
    if (valid) {
      LoginButtonDisabled.value = false;
    } else {
      LoginButtonDisabled.value = true;
    }
  });
});

watch([() => loginForm.username, () => loginForm.password], () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      LoginButtonDisabled.value = false;
    } else {
      LoginButtonDisabled.value = true;
    }
  });
});

const submitForm = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      // Your login logic here
      console.log('Login successful');
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
}

.el-button {
  margin-left: 70px;
}
</style>
