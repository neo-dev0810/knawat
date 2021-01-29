<template>
  <nav class="nav">
    <h2 class="nav__header">Knawat Products</h2>
    <div class="nav__cart">
      <button class="cartButton" @click="showCart = !showCart">
        <b-icon-cart-fill></b-icon-cart-fill>
      </button>
      <span class="total-quantity"> {{ $store.getters.getCartCount }}</span>
      <div v-if="showCart" class="cart-dropdown">
        <cart />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Cart from "./Cart.vue";
export default {
  components: {
    Cart,
  },
  data: () => ({
    showCart: false,
  }),
};
</script>

<style scoped>
.nav {
  align-items: center;
  background: #777272;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
.total-quantity {
  align-items: center;
  background: lightblue;
  border-radius: 50%;
  font-weight: bold;
  padding: 0.5rem 0.7rem;
  position: absolute;
  right: -1rem;
  top: -1rem;
}
.cart {
  margin-top: 2rem;
  text-align: center;
}
.nav__cart {
  position: relative;
}
.cartButton {
  background: #777272;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  height: 2.5rem;
  width: 2.5rem;
}
.cart-dropdown {
  position: absolute;
  right: 8%;
  top: 35px;
  color: black;
  background: rgb(235, 238, 240);
  width: 28rem;
  padding: 1rem;
  transition: all ease-out 100ms;
  transform-origin: top;
  border-radius: 0.2rem;
  z-index: 99;
  box-shadow: 3px 2px 4px -2px rgba(0, 0, 0, 0.45);
}
</style>
