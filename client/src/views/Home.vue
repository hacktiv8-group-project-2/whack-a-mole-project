<template>
  <div style="display: flex;">
    <user-list style="flex-width: 400px;padding: 20px;"></user-list>

  </div>
</template>

<script>
import UserList from '../components/UserList'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    UserList
  }
}
</script>
