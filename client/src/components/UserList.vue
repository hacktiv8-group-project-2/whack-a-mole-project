<template>
  <sui-list-item relaxed style="text-align: left;">
    <sui-image avatar src="https://semantic-ui-vue.github.io/static/images/avatar/small/rachel.png" />
    <sui-list-content>
      <a is="sui-list-header">{{ user }}</a>
      <sui-list-description>
        is online
      </sui-list-description>
    </sui-list-content>
  </sui-list-item>
</template>

<script>
export default {
  props: ['user']
}
</script>
