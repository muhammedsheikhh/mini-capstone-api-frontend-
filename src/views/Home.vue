<script>
import axios from "axios";

import "vue3-carousel/dist/carousel.css";
/* global mapboxgl */
export default {
  mounted: function () {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_API_KEY;
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-87.6298, 41.8781], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    console.log(map);
    const marker1 = new mapboxgl.Marker({ color: "red" }).setLngLat([-87.6298, 41.8781]).addTo(map);
    console.log(marker1);

    const marker2 = new mapboxgl.Marker({ color: "red" }).setLngLat([-88, 41.8]).addTo(map);
    console.log(marker2);

    const marker3 = new mapboxgl.Marker({ color: "red" }).setLngLat([-87.9, 42]).addTo(map);
    console.log(marker3);
  },
  data: function () {
    return {
      products: [],
      images: [],
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
    <h1>Home</h1>

    <div>
      <img class="preo" src="../assets/image2.jpg" alt="" />
    </div>

    <div>
      <img class="pre" src="../assets/image1.jpg" alt="" />
    </div>

    <section id="testimonials">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <h1>Luxurious Motors Reviews</h1>
          <div class="carousel-item active rev">
            <h3>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
              designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
              scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </h3>
            <img class="" src="#" alt="" />
            <em>Pebbles, New York</em>
          </div>
          <div class="carousel-item">
            <h3>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
              designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
              scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </h3>
            <img class="" src="#" alt="" />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  </div>

  <div class="maps">
    <h2>Our Locations</h2>
    <div id="map"></div>
  </div>
  <div id="foter">
    <p>
      Luxurious Dealership
      <br />
      205 Lorem ipsum, Abcde, IL
      <br />
      Phone: (800) 000-0000 Fax: (812) 000-0000
    </p>
    <p>© Copyright 2022 Luxurious Dealership</p>
  </div>
</template>

<style>
.description {
  padding-left: 25%;
  padding-right: 25%;
}
.row {
  margin: 3%;
}

.mod {
  margin-left: 50%;
}

.search {
  text-align: left;
  padding-right: 16%;
  padding-left: 16%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.headr {
  background-color: #eeeeee;
  margin-bottom: 5%;
}

#map {
  text-align: center;
  height: 31rem;
  margin-top: 2%;
}

#foter {
  padding: 3% 15%;
  text-align: center;
  background-color: #000000;
  color: #fff;
}

.preowened {
  height: 15%;
}

#testimonials {
  margin: 3% 10%;
}

.rev {
  margin-top: 3%;
}
.pre {
  height: 28rem;
  width: 100%;
}
.preo {
  height: 22rem;
  width: 100%;
}
</style>
