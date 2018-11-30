<template>
<div>
    <b-container class="imageContainer">
        <button v-if="!fetched" class="btn btn-sm btn-warning loading">Loading...</button>
        <b-row>
            <b-col cols="12" class="pages">
                <button variant="outline-secondary" class="btn" v-on:click="previousPage()" :disabled="!(page > 1)" >&#8678; Previous</button>
                <div class="pageNum">{{page}}</div>
                <button variant="outline-secondary" class="btn" v-on:click="nextPage()" :disabled="!(page < 4)" >Next &#8680;</button>
            </b-col>
            <b-col cols="12" sm="6" md="4" lg="3" v-for="image in images" :key="image.id" :id="image.id">
                <image-modal v-bind:image="image"></image-modal>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import ImagesAsync from "../../services/api/ImagesAsync.js";
import ImageModal from "./ImageModal.vue";

export default {
    name: "ImageItem",
    components: {
        ImageModal
    },
    data() {
        return {
            images: [],
            fetched: false,
            page: this.$route.params.num,
            category: this.$route.params.category,
        };
    },
    watch: {
        page: function () {
            this.$router.push({
                name: "album",
                params: {
                    category: this.category,
                    num: this.page
                }
            });
        }
    },
    methods: {
        async imagesList(category, page) {
            this.images = [];
            const fetched = ImagesAsync.getImages(category, page);
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
                alert(
                    "Images can't be downloaded, check if Pixabay website is online. Error:" +
                    error
                );
            }
        },
        nextPage() {
            if(this.page < 4) {
                this.page += 1;
                this.imagesList(this.category, this.page);
            }
        },
        previousPage() {
            if(this.page > 1) {
                this.page -= 1;
                this.imagesList(this.category, this.page);
            }
        }
    },
    created() {
        this.imagesList(this.category, this.page);
        
    }
};
</script>

<style lang="scss">
.loading {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    padding: 10px;
    text-transform: uppercase;
}

.imageContainer {
    min-height: 140vh;
    padding: 81px 0;
}

.pages {
    text-align: right;
    button{
        border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
    }
}
@media only screen and (max-width: 576px) {
    .pages {
        button:nth-child(even) {
            margin-right: 20px;
        }
    }
}
.pageNum {
    display: inline-block;
    color: #46494c;
}
</style>
