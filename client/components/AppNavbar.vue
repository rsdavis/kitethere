<template>
  <div class="nav">
    <div class="nav__content">
      <div class="nav__logo">KiteThere</div>
      <div class="nav__link">home</div>
      <div class="nav__link">about</div>
      <div class="nav__link">map</div>
    </div>
  </div>
</template>

<style>
.nav {
  border-bottom: 1px solid rgb(220, 220, 220);
  height: 80px;
  display: grid;
  grid-template-columns: var(--layout);
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
</style>
