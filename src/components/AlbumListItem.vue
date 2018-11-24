<template>
<div>
<b-container >
    <b-row>
        <b-col v-for="albumCategory in albumCategories" :key="albumCategory" cols="12" sm="6" md="4" lg="3">
            <b-card v-bind:title="albumCategory" img-alt="Image" img-top tag="article" class="mb-2">
                <button v-on:click="handleOpenAlbum(albumCategory)" >see gallery</button>
                <p class="card-text">
                    
                </p>
            </b-card>
        </b-col>
    </b-row>
</b-container>
</div>
</template>

<script>
import ImagesAsync from "../services/api/ImagesAsync.js";
import albumCategories from './albumCategories.js'
export default {
  name: "AlbumListItem",
  data() {
    return {
      albumCategories: ['food', 'nature', 'animals', 'science', 'people', 'religion', 'health', 'places', 'computer', 'industry', 'sports', 'travel', 'buildings', 'music', 'business'],
    };
  },
  methods: {
    handleOpenAlbum (category) {
      this.$router.push({name:'album', params: {category: category}})
    }
  },
  created() {
  }
};
</script>
