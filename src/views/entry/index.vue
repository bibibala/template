<script setup>
import {ref} from "vue";

let name = ref('world')
</script>

<template>
  <h1>hello,{{ name }}</h1>
</template>

<style scoped>

</style>