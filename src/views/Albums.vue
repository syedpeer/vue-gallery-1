<template>
<div class="albumsPage">
    <album-list/>
</div>
</template>

<script>
import AlbumList from "../components/AlbumList.vue";

export default {
  name: "Albums",
  components: {
    AlbumList
  }
};
</script>

<style lang="scss" scoped>
$white: #dcdcdd;
$yellow: #feb914;
$gray: #46494c;

.albumsPage {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  min-height: calc(100vh - 55px);
  position: relative;
  padding-top: 56px; //menu size
}
</style>
