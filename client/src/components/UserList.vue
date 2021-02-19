<template>
<sui-list class="userList">
  <sui-list-item v-for="user in users" :key="user.id" class="userCard" relaxed style="text-align: left;">
    <sui-image avatar src="https://semantic-ui-vue.github.io/static/images/avatar/small/rachel.png" />
    <sui-list-content>
      <sui-list-header>{{user.name}}</sui-list-header>
      <!-- <a is="sui-list-header">{{ user.name }}</a> -->
      <sui-list-description>
        score <a is="sui-list-header" style="display: inline-block;">{{ user.score }}</a>
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</sui-list>
</template>

<script>
export default {
  props: [
    'user'
  ],
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>

<style scoped>
.userList {
  background-color: rgba(255, 255, 255, 0.3);
  width: 350px;
  border-radius: 5px;
}

.userCard {
  margin: 0px 10px;
}
</style>
