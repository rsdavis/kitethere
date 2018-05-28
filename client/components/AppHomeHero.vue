<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__message">
        <h1 class="hero__title">Kite Spot Repository</h1>
        <p>KiteThere is mapping out the globe, one spot at a time.</p>
        <div class="hero__controls">
          <AppHomeHeroButton :icon="faGlobe" :text="'Go To Map'"></AppHomeHeroButton>
          <AppHomeHeroButton :icon="faMapMarkerAlt" :text="'Add A Spot'"></AppHomeHeroButton>
        </div>
      </div>
      <img class="hero__swoosh" src="@/assets/content-swoosh.svg">
      <img class="hero__img" src="@/assets/cropped.jpg" alt="">
    </div>
  </div>
</template>

<script>
import AppHomeHeroButton from '@/components/AppHomeHeroButton.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe'
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt'

export default {
  components: { FontAwesomeIcon, AppHomeHeroButton },
  computed: {
    faGlobe () { return faGlobe },
    faMapMarkerAlt () { return faMapMarkerAlt }
  }
}
</script>

<style>
.hero {
}

.hero__content {
  position: relative;

  display: grid;
  grid-template-columns: var(--layout);
  grid-template-rows: calc(100vh - 80px);
}

.hero__message {
  color: rgb(36, 50, 67);
  grid-row: 1;
  grid-column: 2;
  align-self: center;
  z-index: 2;
  font-size: 24px;
  width: 35%;
}

.hero__title {
  font-size: 44px;
}

.hero__swoosh {
  grid-row: 1;
  grid-column: 2;

  position: absolute;
  left: 20%;
  z-index: 1;
  height: 100%;
  transform: scaleY(-1);
}

.hero__img {
  grid-row: 1;
  grid-column: 2;

  position: absolute;
  left: 20%;
  width: 80%;
  height: 100%;
  object-fit: cover;
  object-position: 30% 0;
}

.hero__controls {
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
}
</style>
