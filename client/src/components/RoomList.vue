<template>
<sui-card-group :items-per-row="3">
  <sui-card v-for="room in rooms" :key="room">
    <sui-card-content>
    <sui-card-header>
        Project Timeline {{room}}
    </sui-card-header>
    </sui-card-content>
    <sui-card-content>
    <sui-header size="tiny">ACTIVITY</sui-header>
    <!--
        sui-feed is not available yet, therefore base semantic ui has been substituted for now
    -->
    <div class="ui small feed">
        <div class="event">
        <div class="content">
            <div class="summary">
            <a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
            </div>
        </div>
        </div>
        <div class="event">
        <div class="content">
            <div class="summary">
            <a>Stevie Feliciano</a> was added as an <a>Administrator</a>
            </div>
        </div>
        </div>
        <div class="event">
        <div class="content">
            <div class="summary"><a>Helen Troy</a> added two pictures</div>
        </div>
        </div>
    </div>
    <!-- end of base semantic ui, to be updated in the future with sui-feed -->
    </sui-card-content>
    <sui-card-content extra>
    <sui-button>Join Project</sui-button>
    </sui-card-content>
  </sui-card>
</sui-card-group>
</template>
<script>
export default {
  data () {
    return {
      rooms: [1, 2, 3]
    }
  }
}
</script>
