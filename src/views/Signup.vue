<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: { name: "", password: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template class="middle">
  <div class="login">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Signup</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="submit()">
            <div class="paddin input-group form-group">
              <input type="text" class="form-control" placeholder="username" v-model="newUserParams.name" />
              <small>{{ 50 - newUserParams.name.length }}</small>
            </div>
            <div class="paddin input-group form-group">
              <input type="text" class="form-control" placeholder="email" v-model="newUserParams.email" />
            </div>
            <div class="paddin input-group form-group">
              <input type="text" class="form-control" placeholder="password" v-model="newUserParams.password" />
              <small class="text-danger" v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6">
                Must be atleast 6 chracters
              </small>
            </div>
            <div class="paddin input-group form-group">
              <input
                type="password"
                class="form-control"
                placeholder="password confirmation"
                v-model="newUserParams.password_confirmation"
              />
            </div>

            <div class="paddin">
              <input type="submit" value="Signup" class="login_btn" />
            </div>
          </form>
        </div>
        <div class="card-footer"></div>
      </div>
    </div>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </div>
</template>
