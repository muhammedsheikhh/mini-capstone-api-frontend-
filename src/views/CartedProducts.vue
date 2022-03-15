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
  <a class="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>

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

<style>
.social-card-header {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 96px;
}
.social-card-header i {
  font-size: 32px;
  color: #fff;
}
.bg-facebook {
  background-color: #3b5998;
}
.text-facebook {
  color: #3b5998;
}
.bg-google-plus {
  background-color: #dd4b39;
}
.text-google-plus {
  color: #dd4b39;
}
.bg-twitter {
  background-color: #1da1f2;
}
.text-twitter {
  color: #1da1f2;
}
.bg-pinterest {
  background-color: #bd081c;
}
.text-pinterest {
  color: #bd081c;
}
.share:hover {
  text-decoration: none;
  opacity: 0.8;
}
.MultiCarousel {
  float: left;
  overflow: hidden;
  padding: 15px;
  width: 100%;
  position: relative;
}
.MultiCarousel .MultiCarousel-inner {
  transition: 1s ease all;
  float: left;
}
.MultiCarousel .MultiCarousel-inner .item {
  float: left;
}
.MultiCarousel .MultiCarousel-inner .item > div {
  text-align: center;
  padding: 10px;
  margin: 10px;
  background: #f1f1f1;
  color: #666;
}
.MultiCarousel .leftLst,
.MultiCarousel .rightLst {
  position: absolute;
  border-radius: 50%;
  top: calc(50% - 20px);
}
.MultiCarousel .leftLst {
  left: 0;
}
.MultiCarousel .rightLst {
  right: 0;
}

.MultiCarousel .leftLst.over,
.MultiCarousel .rightLst.over {
  pointer-events: none;
  background: #ccc;
}
</style>
