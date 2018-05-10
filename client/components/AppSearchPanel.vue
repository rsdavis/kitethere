<template>
  <div>
    <div v-for="spot in collection" :key="spot.id">
      <span>{{ spot.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    collection () { return this.$store.state.spots.collection }
  }
}
</script>
