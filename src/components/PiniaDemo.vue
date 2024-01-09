<script setup>
import { storeToRefs } from 'pinia';
import { useStoreDemo} from '../store/index.js'
const store = useStoreDemo()
console.log(store)
const {msg} = storeToRefs(useStoreDemo())
console.log(msg)
const changeValue = () => {
//   const changeStoreDemo = useStoreDemo()
//   changeStoreDemo.msg = '响应式老卢'
store.changeStoreDemo('giao')
}
</script>


<template>{{ msg }}
<button type="button" @click="changeValue">无法改变</button>
</template>