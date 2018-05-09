<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__message">hello</div>
      <img class="hero__swoosh" src="@/assets/content-swoosh.svg">
      <img class="hero__img" src="@/assets/cropped.jpg" alt="">
    </div>
  </div>
</template>

<style>
.hero {
}

.hero__content {
  position: relative;

  display: grid;
  grid-template-columns: var(--layout);
  grid-template-rows: auto;
}

.hero__message {
  grid-row: 1;
  grid-column: 2;
  height: 100%;
  width: 100%;
}

.hero__swoosh {
  grid-row: 1;
  grid-column: 2;

  position: absolute;
  left: 20%;
  z-index: 2;
  width: 31%;
  transform: scaleY(-1);
}

.hero__img {
  grid-row: 1;
  grid-column: 2;

  position: absolute;
  left: 20%;
  width: 80%;
}
</style>
