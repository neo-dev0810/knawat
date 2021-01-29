<template>
  <div>
    <navbar />
    <products />
  </div>
</template>

<script lang="ts">
import Products from "./components/Products.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    Products,
  },
  mounted() {
    if (!this.$store.getters.isAuthorized) {
      Meteor.call("getToken", (error, { data: { channel } }) => {
        if (error) {
          return;
        }
        this.$store.commit("SET_TOKEN", channel.token);
      });
    }
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
}
</style>
