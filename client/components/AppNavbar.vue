<template>
  <div class="nav">
    <div class="nav__content">
      <div class="nav__logo">KiteThere</div>
      <div class="nav__link">
        <nuxt-link to="/">home</nuxt-link>
      </div>
      <div class="nav__link">about</div>
      <div class="nav__link">
        <nuxt-link to="/map">map</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
.nav {
  border-bottom: 1px solid rgb(220, 220, 220);
  height: 80px;
  display: grid;
  grid-template-columns: var(--layout);
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
}

.nav__content {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 100px 100px 100px;
  align-items: center;
}

.nav__logo {
  font-size: 32px;
  font-weight: bold;
  color: rgb(30, 40, 50);
}

.nav__link {
  justify-self: right;
}

.nav__link > * {
  color: rgb(36, 50, 67);
  text-decoration: none;
}
</style>
