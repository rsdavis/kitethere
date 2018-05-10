<template>
  <div id="gmap"></div>
</template>

<script>
import googleMapsAPI from '@/assets/google-maps-api.js'

export default {
  data () {
    return {
      map: null
    }
  },

  computed: {
    collection () { return this.$store.state.spots.collection }
  },

  mounted () {
    googleMapsAPI().then(this.initMap)
  },

  methods: {
    initMap () {
      const options = {
        zoom: 2,
        center: { 'lat': 10, 'lng': -50 },
        mapTypeId: 'hybrid',
        gestureHandling: 'greedy'
      }
      var element = document.getElementById('gmap')
      this.map = new window.google.maps.Map(element, options)
    }
  }
}
</script>

<style>
#gmap {
  width: 100%;
  height: calc(100vh - 80px);
}
</style>
