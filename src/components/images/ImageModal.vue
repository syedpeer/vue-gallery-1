<template>
<div class="thumbnailContainer">
    <fade-transition>
        <img :src="image.src" alt="Image failed to load" onerror="this.onerror=null;this.src='/static/assets/nophoto.jpg';" v-show="didMount" @click="showModal" class="thumbnail">
    </fade-transition>
        <b-modal ref='modalRef' hide-footer size="lg" v-model="modalShow" :title='"CATEGORY: " + image.category'>
            <b-img v-bind:src="image.srcLarge" fluid alt="Responsive image" onerror="this.onerror=null;this.src='/static/assets/nophoto.jpg';" />
            <p class="tags">tags: {{image.tags}}</p>
            <b-row>
                <b-col cols="6">
                    <b-btn class="mt-2 buttonOther" variant="outline-secondary" block @click="previousModal(image.id)">
                        &#8678; Previous</b-btn>
                </b-col>
                <b-col cols="6">
                    <b-btn class="mt-2 buttonOther" variant="outline-secondary" block @click="nextModal(image.id)">Next &#8680;</b-btn>
                </b-col>
            </b-row>
        </b-modal>
</div>
</template>

<script>
import FadeTransition from '../animations/FadeTransition.vue'
export default {
    name: "ImageModal",
    props: ["image"],
    components: {
        FadeTransition
    },
    data() {
        return {
            modalShow: false,
            didMount: false
        };
    },
    methods: {
        showModal() {
            this.$refs.modalRef.show();
        },
        nextModal(id) {
            const next = document.getElementById(id).nextSibling ? document.getElementById(id).nextSibling.children[0].children[0] : null;
            if (next) {
                next.click()
            }
        },
        previousModal(id) {
            const previous = document.getElementById(id).previousSibling ? document.getElementById(id).previousSibling.children[0].children[0] : null;
            if (previous) {
                previous.click()
            }
        }
    },
    mounted() {
        this.didMount = true;
    }
};
</script>

<style lang="scss" scoped>
.thumbnail {
    width: 100%;
    height: 300px;
    background-position: center;
    transition: 0.5s;
    border-radius: 10px;
    object-fit: cover;

    &:hover {
        transform: scale(1.1);
    }
}

.thumbnailContainer {
    padding: 15px 0;
}

.modal-title {
    text-transform: uppercase;
}

@media only screen and (max-width: 476px) {
    .modal-body {
        padding: 0.5rem;
    }
}

.tags {
    text-align: right;
    font-size: 12px;
    margin: 5px 0;
}

.modal-dialog {
    padding-top: 50px;

    header {
        background-color: #dcdcdd;
        border-bottom-color: #feb914;

        h5 {
            font-weight: 900;
        }

        button {
            opacity: 1;
            font-size: 28px;

            &:focus {
                outline: none;
            }
        }
    }

    .modal-body {
        background-color: #dcdcdd;
    }
}

.buttonOther {
    color: #46494c;
    border: #feb914 1px solid;
    font-weight: 700;
    transition: background-color ease-in 0.4s;

    &:hover {
        background-color: #46494c;
        border-color: #feb914;
    }

    &:active {
        border: none;
        background-color: #feb914;
    }
}

.fade-enter-active {
    transition: opacity 2.6s ease-in-out;
}
</style>
