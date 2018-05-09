<template>
  <div class="footer">
    <div class="footer__content">
      <p>&#169; 2018 KiteThere</p>
      <p>Contact: ryan.sc.davis@gmail.com</p>
    </div>
  </div>
</template>

<style>
.footer {
  background-color: rgb(36, 50, 67);

  display: grid;
  grid-template-columns: var(--layout);
  grid-template-rows: 140px;
  align-items: center;
  justify-items: center;
}

.footer__content {
  grid-column: 2;
  color: white;
  text-align: center;
}

</style>
