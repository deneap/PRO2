<template>
  <v-layout column>
    <SongsSearchPanel />
    <v-flex xs6>
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsSearchPanel from './SongsSearchPanel'
import SongsPanel from './SongsPanel.vue'
import SongsServices from '@/services/SongsServices.js'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null,
    }
  },
  async created () {
    this.songs = (await SongsServices.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
