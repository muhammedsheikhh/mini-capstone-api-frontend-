<script>
import axios from "axios";
export default {
  data: function () {
    return {
      product: {},
      editProductParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/products/" + this.$route.params.id).then((response) => {
      console.log("products show", response);
      this.product = response.data;
      this.editProductParams = this.product;
    });
  },
  methods: {
    updateProduct: function (product) {
      axios
        .patch("/products/" + product.id, this.editProductParams)
        .then((response) => {
          console.log("products update", response);
          this.$router.push("/products");
        })
        .catch((error) => {
          console.log("products update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="products-edit">
    <h1>New Product</h1>
    <form v-on:submit.prevent="updateProduct(product)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="editProductParams.name" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="editProductParams.primary_image" />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" v-model="editProductParams.price" />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" v-model="editProductParams.description" />
      </div>

      <input type="submit" value="Update" />
    </form>
  </div>
</template>
