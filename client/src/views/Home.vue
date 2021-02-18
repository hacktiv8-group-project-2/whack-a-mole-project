<template>
  <div style="display: flex;background: rgba(163,213,176);width: 100%;min-height:100vh;">
    <user-list style="flex-width: 400px;padding: 20px;"></user-list>

    <!-- animation -->
    <div style="
      width: 550px;
      height: 300px;
      position:absolute;
      top: 60%;
      left: 35%;
      transform: translate(-50%,-50%);
      overflow: hidden;
    ">
      <img
        style="
          width: 555px;
          position:absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);"
        src="https://cdn.dribbble.com/users/224485/screenshots/1985081/fun.gif">
    </div>
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
