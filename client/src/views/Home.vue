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
    <h2 is="sui-header">{{getUserName}}</h2>

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
    <Board
      :moles="board"
      style="
      width: 50%;
      position: absolute;
      top:20%;
      left:50%;
      transform: translate(-50%,0);"
    >
    </Board>
    <h2 @click.prevent="gameStart">Start</h2>
  </div>
</template>

<script>
import UserList from '../components/UserList'
// import RoomList from '../components/RoomList.vue'
import Board from '../components/Board.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    UserList,
    // RoomList,
    Board
  },
  data () {
    return ({
      board: [],
      player: 'host' || 'guest',
      started: false,
      ended: false
    })
  },
  created () {
    this.sockets.subscribe('updateBoard', (newBoard) => {
      // subscribe mirip kaya on. tapi karna di main.js make socket jadi middleware. jadi ga bisa pake on, disaranin make subscribe
      this.board = newBoard
    })
  },
  methods: {
    gameStart () {
      this.$socket.emit('gameStart')
      this.started = true
      // interval randomize emit
      this.randomizeBoardFromSocket()
    },
    randomizeBoardFromSocket () {
      // function yang berguna mengatur interval.
      let timer = 0
      const self = this
      setInterval(function () {
        if (timer >= 10) {
          clearInterval(this)
          self.gameEnd()// <= dijalanin di sini end game
        } else {
          self.$socket.emit('randomize')
          timer++
        }
      }, 4000)
    },
    gameEnd () {
      this.$socket.emit('endGame')
      this.ended = true
      // untuk end game kalo interval sudah abis
    }
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
