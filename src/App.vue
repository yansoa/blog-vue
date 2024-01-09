<script setup>

import HelloWorld from './components/HelloWorld.vue'
import PiniaDemo from './components/PiniaDemo.vue';
// import router from './router/index.js';
import {useRouter} from 'vue-router'
const router = useRouter;
const user=()=>{
  router.push({
    name:"users",
    params:{
      id:1,
      username:"test"
    }
  });
}
</script>

<template>
  <div>
    <PiniaDemo></PiniaDemo>
    <p><router-link to="/" >Go to Index</router-link></p>
    <p><router-link to="/home" >Go to Home</router-link></p>
    <p><router-link to="/user" >Go to Users</router-link></p>
    <button type="button" @click="user">yileo</button>
    <router-view></router-view>
  </div>
</template>
