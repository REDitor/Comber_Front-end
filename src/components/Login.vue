<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto">
          <h1>Login</h1>
          <form class="mt-5">
            <div class="mb-3">
              <label for="usernameInput" class="form-label">Username/Email</label>
              <input
                id="usernameInput"
                type="text"
                class="form-control"
                v-model="username"
              />
            </div>
            <div class="mb-3">
              <label for="passwordInput" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="passwordInput"
                v-model="password"
              />
            </div>
            <button type='button' @click="login()" class="btn btn-success col-12 mb-3">Login</button>
            <router-link to="/" class="text-decoration-none text-success">Cancel Login</router-link>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '../axios-auth';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post('/users/login', {
          username: this.username,
          password: this.password
        })
        .then((res) => {
          axios
            .defaults.headers.common['Authorization'] = `Bearer ${res.data.jwt}`;
          console.log(res.data.jwt);
          this.$router.push('/');
        })
        .catch((err) => console.error(err));
    }
  }
};
</script>

<style>
</style>