<script>
import axios from "axios";
export default {
  data: function () {
    return {
      product: {},
      cartedProduct: {},
      quantity: 0,
    };
  },
  created: function () {
    axios.get("/products/" + this.$route.params.id).then((response) => {
      console.log("products show", response);
      this.product = response.data;
    });
  },
  methods: {
    destroyPost: function (product) {
      axios.delete("/products/" + product.id).then((response) => {
        console.log("products destroy", response);
        this.$router.push("/products");
      });
    },
    createCartedProduct: function () {
      var params = { quantity: this.quantity, product_id: this.$route.params.id };
      axios
        .post("/carted_products", params)
        .then((response) => {
          console.log("carted products create", response);
          this.$router.push("/carted_products");
        })
        .catch((error) => {
          console.log("carted products create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="products-show">
    <h2>{{ product.name }}</h2>
    <img v-bind:src="product.primary_image" alt="" width="400" />
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <router-link v-bind:to="`/products/${product.id}/edit`">Edit product</router-link>
    <br />
    <router-link to="/products">Back to all products</router-link>
    <br />
    <button v-on:click="destroyPost(product)">Delete Now</button>
    <br />
    <input type="text" v-model="quantity" />
    <button v-on:click="createCartedProduct()">Buy Now</button>
  </div>
</template>
