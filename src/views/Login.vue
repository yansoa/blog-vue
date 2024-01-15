<template>
  <div class="login-container">
    <el-card class="box-card">
      <h2>管理员登录</h2>
      <el-form :model="loginInfo" ref="loginRef" :rules="rules" label-width="80px">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="loginInfo.username" clearable placeholder="请输入你的用户名" :prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="loginInfo.password" clearable type="password" placeholder="请输入你的密码" :prefix-icon="Lock"></el-input>
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
  loginRef.value.validate((valid) => {
    if (valid) {
      LoginButtonDisabled.value = false;
    } else {
      LoginButtonDisabled.value = true;
    }
  });
});

const submitForm = () => {
  loginRef.value.validate((valid) => {
    if (valid) {
      console.log('登录成功');
    }
  });
};
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

</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.box-card {
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
