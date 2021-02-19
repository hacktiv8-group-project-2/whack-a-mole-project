<template>
  <div>
    <form class="loginForm" @submit.prevent="setUsername">
      <h2>Login</h2>
      <input v-model="username" type="text" placeholder="Username" required>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    setUsername () {
      this.$store.commit('setUsername', this.username)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .loginForm {
    margin: auto;
    margin-top: 250px;
  }
</style>
