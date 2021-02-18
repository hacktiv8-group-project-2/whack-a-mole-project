<template>
    <div
        style="
        width:100%;
        position:relative;
        z-index:10;"
    >
    <div
        style="
        padding-top:93.5%;
        position:relative;
        overflow:hidden;"
    >
        <img
            @click="whack"
            class="whack"
            style="
            position:absolute;
            left:0;
            width: 125%;
            transition:all .5s ease;"
            v-bind:style="{top:isClicked?'90%':'4%'}"
            src="https://www.clipartmax.com/png/full/28-288482_mole-clipart-whack-a-mole-from-whack-a-mole.png" alt="">
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isClicked: false
    }
  },
  methods: {
    whack () {
      this.isClicked = !this.isClicked
    }
  }
}
</script>
<style scoped>
.whack{
    /* cursor: url("../assets/hammer.png"), auto; */
    cursor: url("../assets/hammer2.png"), auto;
    /* cursor: pointer; */
}

</style>
