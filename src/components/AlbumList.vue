<template>
<div>
    <b-container class="albumsContainer">
        <transition name="fade">
            <b-row v-show="created">
                <b-col class="cardsMargin" v-for="albumCategory in albumCategories" :key="albumCategory.category" cols="12" sm="6" md="4" lg="3">
                    <b-card v-on:click="handleOpenAlbum(albumCategory.category)" v-bind:title="albumCategory.category" :img-src="albumCategory.thumbnail" img-alt="Image" img-top tag="article" class="mb-2 albumCard">
                        <button >see album</button>
                    </b-card>
                </b-col>
            </b-row>
        </transition>

    </b-container>
</div>
</template>

<script>
import {
    albumCategories
} from "./albumCategories.js";

export default {
    name: "AlbumList",
    data() {
        return {
            albumCategories: {
                ...albumCategories
            },
            created: false,
        };
    },
    methods: {
        handleOpenAlbum(category) {
            this.$router.push({
                name: "album",
                params: {
                    category: category
                }
            });
        },
    },
    mounted() {
        this.created = true;
    }
};
</script>

<style lang="scss" scoped>
.albumCard {
    position: relative;
    overflow: hidden;
    min-height: 275px;
    transition: 2s;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    border: none;
    cursor: pointer;

    img {
        position: absolute;
        overflow: hidden;
        transition: 1s;
        opacity: 1;
        border-bottom: #feb914 solid 1px;
    }

    .card-body {
        position: absolute;
        bottom: 10px;
        width: 100%;
    }

    &:hover {
        background-color: #231f20;

        h4 {
            color: white;
        }

        img {
            transform: scale(2.5);
            overflow: hidden;
            opacity: 0.4;
        }
    }
}

@media only screen and (max-width: 1200px) {
    .albumCard {
        min-height: 245px;
    }
}

@media only screen and (max-width: 768px) {
    .albumCard {
        min-height: 275px;
    }
}

@media only screen and (max-width: 576px) {
    .albumCard {
        background-color: #231f20;

        h4 {
            color: white !important;
        }

        img {
            transform: scale(2.5);
            overflow: hidden;
            opacity: 0.4;
        }
    }
}

.albumsContainer {
    padding: 50px 0;
    text-transform: uppercase;

    h4 {
        font-size: 24px;
        font-weight: 700;
        color: #231f20;
    }

    button {
        font-size: 14px;
        text-transform: uppercase;
        width: 100%;
        background-color: transparent;
        border: none;
        color: #feb914;
        border-bottom: solid 2px #feb914;
        text-align: right;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
}

.cardsMargin {
    margin: 5px 0;
}
.fade-enter-active {
    transition: opacity .9s ease-in-out;
}

.fade-enter-to {
    opacity: 1;
}

.fade-enter {
    opacity: 0;
}
</style>
