<template>
  <div
    style="
      display: flex;
      background: rgba(163,213,176);
      width: 100%;
      min-height:100vh;
      position:relative;
      background: rgba(204,152,102,1);
      justify-content: space-between;
      padding: 20px;">
    <user-list style="flex-width: 400px;padding: 20px 0px;"></user-list>
    <h2 is="sui-header"></h2>

    <!-- <room-list
      style="
      position: absolute;
      top: 20%;
      right:10%;
      width: 500px;"
    ></room-list> -->

    <!-- animation -->
    <!-- <div style="
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
    </div> -->

    <!-- Board -->
    <GameBoard/>
  </div>
</template>

<script>
import UserList from '../components/UserList'
// import RoomList from '../components/RoomList.vue'
import GameBoard from '../components/GameBoard'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    UserList,
    // RoomList,
    GameBoard
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    getUserName () {
      return this.$store.state.user.name
    }
  }
}
</script>
