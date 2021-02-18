<template>
<sui-list>
  <sui-list-item v-for="user in this.$store.state.users" :key="user.id" relaxed style="text-align: left;">
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
  props: ['user']
}
</script>
