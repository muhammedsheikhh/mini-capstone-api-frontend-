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
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input class="form-control" type="text" v-model="newUserParams.name" />
        <small>{{ 50 - newUserParams.name.length }}</small>
      </div>
      <div>
        <label>Email:</label>
        <input class="form-control" type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <label>Password:</label>
        <input class="form-control" type="password" v-model="newUserParams.password" />
        <small class="text-danger" v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6">
          Must be atleast 6 chracters
        </small>
      </div>
      <div>
        <label>Password confirmation:</label>
        <input class="form-control" type="password" v-model="newUserParams.password_confirmation" />
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
.signup {
  text-align: left;
  margin-left: 10rem;
  margin-right: 50%;
  margin-bottom: 12%;
}

.b2 {
  margin-top: 2%;
}

.middle {
  text-align: center;
}
</style>
