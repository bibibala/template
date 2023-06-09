<template>
  <h1>hello,{{ name }}</h1>
</template>
<script setup>
import {ref} from "vue";

let name = ref('world')
</script>
<style scoped>

</style>