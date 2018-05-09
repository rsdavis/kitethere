<template>
  <div>
    <AppNavbar></AppNavbar>
    <nuxt/>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
export default {
  components: { AppNavbar }
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  --layout: minmax(20px, 1fr) minmax(0, 1200px) minmax(20px, 1fr);
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
