<template>
  <div id="grid-item" >
    <div class="mole-location">
      <img @click.prevent="whack" :class="grid.status === true ? 'mole' : 'mole-hide'" src="../assets/mole2.png" alt="">
    </div>
    </div>
</template>

<script>
export default {
  name: 'GridMole',
  data () {
    return {
    }
  },
  props: [
    'grid',
    'gameStatus',
    'board'
  ],
  methods: {
    whack () {
      if (this.grid.status === true) {
<<<<<<< HEAD
        const newScore = this.userScore + 1
        console.log(newScore)
        this.$socket.emit('updateScore', { score: newScore, id: this.userId })
=======
>>>>>>> 40dae957512fd183eb72577dc3f811eaff22bd19
        this.$store.commit('changeStatus', this.grid)
        this.$socket.emit('whack', this.board)
      }
    }
<<<<<<< HEAD
  },
  computed: {
    userScore () {
      return this.$store.state.user.score
    },
    userId () {
      return this.$store.state.user.id
    }
=======
>>>>>>> 40dae957512fd183eb72577dc3f811eaff22bd19
  }
}
</script>

<style scoped>
  #grid-item {
    text-align: center;
    align-content: center;
    background-image: url('../assets/mole hole repeat.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-color: rgb(204, 152, 102);
    height: 75px;
    width: 116.66px;
  }

  .mole-location {
    height: 55px;
    overflow: hidden;
  }

  .mole {
    transition: 0.3s ease;
    height: 50px;
    margin: 6.3px 15px 0px 0px;
    cursor: pointer;
  }

  .mole-hide {
    transition: 0.3s ease;
    height: 50px;
    margin: 6.3px 15px 0px 0px;
<<<<<<< HEAD
=======
    cursor: pointer;
>>>>>>> 40dae957512fd183eb72577dc3f811eaff22bd19
    transform: translateY(39px);
  }
</style>
