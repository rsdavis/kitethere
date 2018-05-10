<template>
  <div class="search">
    <div class="search__content">
      <AppSearchMap></AppSearchMap>
      <AppSearchPanel></AppSearchPanel>
    </div>
  </div>
</template>

<script>
import AppSearchMap from '@/components/AppSearchMap.vue'
import AppSearchPanel from '@/components/AppSearchPanel.vue'

import { mapMutations } from 'vuex'

export default {
  components: { AppSearchMap, AppSearchPanel },

  async fetch ({ store, params }) {
    await store.dispatch('spots/fetch')
  }
}
</script>

<style>
.search {
  display: grid;
  grid-template-columns: var(--layout);
}

.search__content {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.search__map {
  height: calc(100vh - 80px);
  width: 100%;
}
</style>
