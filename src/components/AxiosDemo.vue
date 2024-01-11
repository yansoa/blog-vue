<template>
    <div>
        <button @click="fetchData">Fetch Data</button>
        <div v-if="data">
            <pre>{{ data }}</pre>
        </div>
        <div v-if="error">
            Error: {{ error }}
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);
const error = ref(null);

const fetchData = () => {
    const url = 'https://www.fastmock.site/mock/76be31bd34de2a758b29c9e8ef41d8aa/api/test';
    axios.get(url)
        .then(response => {
            data.value = response.data;
            error.value = null;
            console.log(response.data);
            alert(JSON.stringify(response.data, null, 2));
        })
        .catch(err => {
            error.value = err.message;
            data.value = null;
            alert(err.message);
        });
};
</script>
  