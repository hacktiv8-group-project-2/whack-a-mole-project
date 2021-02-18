<template>
<div
    class="hammer"
    style="
    width:100%;
    z-index:5;
    position: relative;
    overflow:hidden;
    border-radius: 10px;"
>
    <div
        style="
        padding-top: 60%;overflow:hidden;"
    >
        <div
            style="
            position:absolute;
            top:-8%;
            left:0;
            background: url(https://cms-assets.tutsplus.com/legacy-premium-tutorials/posts/16489/images/16489_9a6444515e6ce39bbba3a0c53e74354c.png);
            background-repeat: repeat;
            background-size: cover;
            width: 100%;
            padding-top:65%;
            border-radius: 10px;"
        >
            <Mole
                style="
                position:absolute;
                width:12%;"
                v-for="(mole,index) in moles"
                :key="mole"
                :class="[
                    index === 0 ? 'satu':
                    index === 1 ? 'dua' :
                    index === 2 ? 'tiga':
                    index === 3 ? 'empat':
                    index === 4 ? 'lima':
                    index === 5 ? 'enam':
                    index === 6 ? 'tujuh':
                    index === 7 ? 'delapan':
                    '']"
            ></Mole>
        </div>
    </div>
</div>
</template>
<script>
import Mole from './Mole.vue'
export default {
  components: {
    Mole
  },
  data () {
    return {
      moles: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
}
</script>
<style scoped>
.hammer{
    /* cursor: url("../assets/hammer.png"), auto; */
    cursor: url("../assets/hammer2-45.png"), auto;
    /* cursor: pointer; */
    -webkit-touch-callout: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
.satu{
    top: 9.5%;
    left:17%;
}
.dua{
    top: 22.5%;
    left:41.5%;
}
.tiga{
    top: 16.8%;
    left:71%;
}
.empat{
    top: 41.2%;
    left:15%;
}
.lima{
    top: 49.5%;
    left:47%;
}
.enam{
    top: 36.7%;
    left:78.5%;
}
.tujuh{
    top: 74%;
    left: 29.5%;
}
.delapan{
    top: 65.5%;
    left: 74.5%;
}
</style>
