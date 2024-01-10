<template>
  <div>
    <PiniaDemo></PiniaDemo>
    <p><router-link to="/">Go to Index</router-link></p>
    <p><router-link to="/home">Go to Home</router-link></p>
    <!-- 如果有一个对应 /users 的路由，可以使用这个链接 -->
    <router-link :to="{ name: 'users', params: { id: '1', username: 'yileo' } }">Go to Users</router-link>

    <button type="button" @click="navigateToUser">Navigate to User</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import PiniaDemo from './components/PiniaDemo.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToUser = () => {
  router.push({
    name: 'users',
    params: {
      id: '2',
      username: 'yansoa'
    }
  });
}

</script>
