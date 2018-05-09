<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__message">
        <h1>Kite Spot Repository</h1>
        <p>KiteThere is mapping out the globe, one spot at a time.</p>
      </div>
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
</style>
