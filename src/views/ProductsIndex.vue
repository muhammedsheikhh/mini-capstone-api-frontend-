<script>
import axios from "axios";
export default {
  data: function () {
    return {
      products: [],
      nameFilter: "",
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/products").then((response) => {
        console.log("indexProducts", response.data);
        this.products = response.data;
      });
    },
    filterProducts: function () {
      return this.products.filter((product) => {
        var lowerName = product.name.toLowerCase();
        var lowerNameFilter = this.nameFilter.toLowerCase();
        return lowerName.includes(lowerNameFilter);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="headr">
      <h1>All Vehicles</h1>
      <div class="mb-4 search">
        <input class="form-control" v-model="nameFilter" type="text" />
        Search by Model
      </div>
    </div>
    <div class="row">
      <div v-for="product in filterProducts()" v-bind:key="product.id" class="col-12 mb-4">
        <div class="row">
          <div class="col-4">
            <img class="mod" v-bind:src="product.primary_image" alt="" width="300" />
          </div>
          <div class="col-8">
            <h3 style="padding-bottom: 3%">{{ product.name }}</h3>
            <p>{{ product.price }} $</p>
            <p class="description">{{ product.description }}</p>
            <a v-bind:href="`/products/${product.id}`">More details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer">
    <p>
      Luxurious Dealership
      <br />
      205 Lorem ipsum, Abcde, IL
      <br />
      Phone: (800) 000-0000 Fax: (812) 000-0000
    </p>
    <p>© Copyright 2022 Luxurious Dealership</p>
  </footer>
</template>

<style></style>
