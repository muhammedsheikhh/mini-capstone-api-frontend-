<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
      httpStatus: "",
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("flashMessage", "Logged in!!!");
          this.$router.push("/");
        })
        .catch((error) => {
          this.httpStatus = error.response.status;
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input class="form-control" type="email" v-model="newSessionParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input class="form-control" type="password" v-model="newSessionParams.password" />
      </div>
      <input class="b2" type="submit" value="Submit" />
    </form>
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
.login {
  text-align: left;
  margin-left: 10rem;
  margin-right: 50%;
  margin-bottom: 19%;
}

.b2 {
  margin-top: 2%;
}
</style>
