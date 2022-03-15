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
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Login</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="submit()">
            <div class="paddin input-group form-group">
              <input type="text" class="form-control" placeholder="email" v-model="newSessionParams.email" />
            </div>
            <div class="paddin input-group form-group">
              <input type="password" class="form-control" placeholder="password" v-model="newSessionParams.password" />
            </div>
            <div class="row align-items-center remember">
              <input type="checkbox" />
              Remember Me
            </div>
            <div class="">
              <input type="submit" value="Login" class="login_btn" />
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?
            <a href="#">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Numans");
html,
body {
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
}

.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #ffc312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #ffc312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 4px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}

.links a {
  margin-left: 4px;
}

.login {
  margin: 10rem;

  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
}

.paddin {
  padding-top: 2%;
}
</style>
