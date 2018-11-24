<template>
<div>
    <b-container v-if="fetched">
        <b-row>
            <b-col cols="12" sm="6" md="4" lg="3" v-for="image in images" :key="image.id">
                <image-modal v-bind:image="image.src"></image-modal>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import ImagesAsync from "../../services/api/ImagesAsync.js";
import ImageModal from './ImageModal.vue';
export default {
    name: "ImageItem",
    components: {
        ImageModal
    },
    data() {
        return {
            images: [],
            fetched: false
        };
    },
    methods: {
        async imagesList(category) {
            const fetched = ImagesAsync.getImages(category);
            const hits = await fetched;
            try {
                hits.hits.map(image => {
                    this.images.push({
                        src: image.webformatURL,
                        id: image.id
                    });
                });
                this.fetched = true;
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        const category = this.$route.params.category;
        this.imagesList(category);
    }
};
</script>

<style lang="scss">
    
</style>
