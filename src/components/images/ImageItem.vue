<template>
<div>
    <b-container class="imageContainer">
        <button v-if="!fetched" class="btn btn-sm btn-warning loading">Loading...</button>
        <transition name="fade">
            <b-row v-show="fetched">
                <b-col cols="12" sm="6" md="4" lg="3" v-for="image in images" :key="image.id" :id="image.id">
                    <image-modal v-bind:image="image"></image-modal>
                </b-col>
            </b-row>
        </transition>
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
                        srcLarge: image.largeImageURL,
                        tags: image.tags,
                        id: image.id,
                        category: category
                    });
                });
                this.fetched = true;
            } catch (error) {
                alert("Images can't be downloaded, check if Pixabay website is online. Error:" + error)
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
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    padding: 10px;
    text-transform: uppercase;
}

.imageContainer {
    min-height: 100vh;
    padding: 81px 0;
}

.fade-enter-active {
    transition: opacity 2.6s ease-in-out;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter {
    opacity: 0;
}
</style>
