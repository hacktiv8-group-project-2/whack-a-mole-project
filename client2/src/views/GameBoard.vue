<template>
  <div>
    <button @click.prevent="randomGrid">randomize</button>
    <button @click.prevent="startGame">Start</button>
    <div class="grid-container">
      <GridMole
        v-for="grid in board"
        :key="grid.id"
        :grid="grid"
        :board="board"
        :gameStatus="gameStatus"
      />
      <Grass id="grass1"/>
      <Grass id="grass2"/>
      <Grass id="grass3"/>
    </div>
  </div>
</template>

<script>
import GridMole from '../components/GridMole.vue'
import Grass from '../components/Grass.vue'

export default {
  name: 'GameBoard',
  components: {
    GridMole,
    Grass
  },
  methods: {
    randomGrid () {
      this.$socket.emit('randomize')
    },
    startGame () {
      this.$socket.emit('gameStart')
    }
  },
  computed: {
    getUsername () {
      return this.$store.state.username
    },
    board () {
      return this.$store.state.board
    },
    gameStatus () {
      return this.$store.state.gameStatus
    }
  }
}
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    margin: 50px auto;
    width: 700px;
    height: 450px;
  }

  #grass1 {
    position: absolute;
    top: 45%;
    left: 45%;
    height: 55px;
  }

  #grass2 {
    position: absolute;
    top: 27%;
    left: 23%;
    height: 55px;
  }
  #grass3 {
    position: absolute;
    top: 77%;
    left: 58%;
    height: 55px;
  }
</style>
