<template>
  <div>
    <ul style="list-style-type: none">
      <li v-if="$store.getters.isEmptyCart">
        <h3>Cart is Empty</h3>
      </li>
      <li
        v-for="cartItem in $store.getters.getCartItems"
        :key="cartItem.product.sku"
      >
        <b-card no-body class="overflow-hidden" style="max-width: 540px">
          <b-row no-gutters>
            <b-col md="4">
              <b-card-img
                :src="cartItem.product.images[0]"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body>
                <b-card-text>
                  {{ cartItem.product.name.en }}
                </b-card-text>
                <b-card-text>
                  ${{ cartItem.product.variations[0].sale_price.toFixed(2) }}
                </b-card-text>
                <b-button
                  variant="danger"
                  @click="
                    $store.commit('REMOVE_CART_ITEM', cartItem.product.sku)
                  "
                  >Remove</b-button
                >
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </li>
      <li v-if="!$store.getters.isEmptyCart">
        <b-button variant="primary" class="checkout">Checkout</b-button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.checkout {
  margin: 1rem 8rem;
}
</style>
