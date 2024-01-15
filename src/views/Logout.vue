<script setup>
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification/composition'

const { logout } = useAuth()
const router = useRouter()
const toast = useToast()
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen"></div></template></script>   </script>