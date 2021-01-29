import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    cartItems: [],
  },
  getters: {
    isAuthorized: ({ token }) => {
      return Boolean(token);
    },
    getCartItems: ({ cartItems }) => {
      return cartItems;
    },
    getCartCount: ({ cartItems }) => {
      return cartItems.length;
    },
    isEmptyCart: ({ cartItems }) => {
      if (cartItems[0]) return false;

      return true;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    ADD_CART_ITEM({ cartItems }, product) {
      const { sku } = product;
      const exists = cartItems.find((item) => item.product.sku === sku);

      if (!exists) {
        cartItems.push({
          product,
          quantity: 1,
        });

        return;
      }
      exists.quantity++;
    },
    REMOVE_CART_ITEM(state, sku) {
      const item = state.cartItems.find((item) => item.product.sku === sku);

      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product.sku !== sku
        );

        return;
      }
      item.quantity--;
    },
  },
  actions: {},
  modules: {},
});
