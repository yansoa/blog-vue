<template>
  <!-- <Login></Login> -->
  <!--  <div>
    

  <PiniaDemo></PiniaDemo>
    <AxiosDemo></AxiosDemo>
    <p><router-link to="/">Go to Index</router-link></p>
    <p><router-link to="/home">Go to Home</router-link></p> -->
  <!-- 如果有一个对应 /users 的路由，可以使用这个链接 -->
  <!-- <router-link :to="{ name: 'users', params: { id: '1', username: 'yileo' } }">Go to Users</router-link> -->

  <!-- <button type="button" @click="navigateToUser">Navigate to User</button>
  <router-view></router-view>
  </div> -->
  <router-view></router-view>
</template>

<script setup>
import Login from './views/Login.vue';
import AxiosDemo from './components/AxiosDemo.vue';
// import { useRouter } from 'vue-router';

// const router = useRouter();

// const navigateToUser = () => {
//   router.push({
//     name: 'users',
//     params: {
//       id: '2',
//       username: 'yansoa'
//     }
//   });
// }

</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
