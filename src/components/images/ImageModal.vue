<template>
<div class="thumbnailContainer">
    <div @click="showModal" v-bind:style="{ backgroundImage: 'url(' + image.src + ')' }" class="thumbnail">
    </div>
    <b-modal ref='modalRef' hide-footer size="lg" v-model="modalShow" :title='"CATEGORY: " + image.category'>
        <b-img v-bind:src="image.srcLarge" fluid alt="Responsive image" />
        <p class="tags">tags: {{image.tags}}</p>
        <b-row>
            <b-col cols="6" >
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
export default {
    name: "ImageModal",
    props: ["image"],
    data() {
        return {
            modalShow: false
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
    }
};
</script>

<style lang="scss">
.thumbnail {
    width: 100%;
    height: 300px;
    background-position: center;
    transition: 0.5s;
    border-radius: 10px;
    &:hover {
        transform: scale(1.1);
}
}

.thumbnailContainer{
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
</style>
