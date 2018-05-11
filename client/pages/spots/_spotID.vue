<template>
  <div class="spot">
    <div class="spot__hero">{{ spot.name }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  asyncData ({ params, env }) {
    return axios({
      url: env.API_URL + '/spots/' + params.spotID,
      method: 'get'
    }).then(response => {
      return { spot: response.data }
    }).catch(error => {
      console.log(error)
    })
  }

}
</script>

<style>

</style>
