<template>
  <div>
    <div class="product-body">
      <h1>Products List</h1>
      <div class="product-container">
        <div
          class="product-card"
          v-for="product in products"
          :key="product.name.en"
        >
          <img class="product-image" :src="product.images[0]" alt="" />
          <p class="product-name">{{ product.name.en }}</p>
          <p class="product-price">
            ${{ product.variations[0].sale_price.toFixed(2) }}
          </p>
          <button
            class="add-to-cart"
            @click="$store.commit('ADD_CART_ITEM', product)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
    <div>
      <b-pagination
        v-model="currentPage"
        :total-rows="total"
        :per-page="perPage"
        size="lg"
        align="center"
        @change="handlePageChange"
      >
      </b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [],
    total: 0,
    currentPage: 1,
    fetching: true,
    perPage: 10,
  }),
  mounted() {
    this.fetchProducts();
  },

  methods: {
    fetchProducts() {
      const token = localStorage.getItem("token");

      Meteor.call(
        "getProducts",
        token,
        this.currentPage,
        (error, { data: { products, total } }) => {
          if (error) {
            console.log(error);
            return;
          }
          this.products = products;
          this.total = total;
        }
      );
    },
    handlePageChange(value) {
      this.currentPage = value;
      this.fetchProducts();
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: serif;
}
.product-body {
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  max-width: 200px;
  min-height: 400px;
  box-sizing: border-box;
  margin: 1rem;
  text-align: center;
  border-radius: 8px;
  -webkit-box-shadow: 10px 10px 29px -8px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 10px 10px 29px -8px rgba(0, 0, 0, 0.61);
  box-shadow: 10px 10px 29px -8px rgba(0, 0, 0, 0.61);
}

.product-image {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.product-name {
  font-weight: 700;
}

.add-to-cart,
.product-name,
.product-price {
  margin-top: 5px;
  font-size: 14px;
}

.product-price {
  opacity: 0.7;
}

.add-to-cart {
  text-align: center;
  padding: 6px 11px;
  margin-bottom: 15px;
  background: 0;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
}
</style>
