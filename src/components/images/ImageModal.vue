<template>
<div class="thumbnailContainer">
    <div @click="showModal" v-bind:style="{ backgroundImage: 'url(' + image.src + ')' }" class="thumbnail">
    </div>
    <b-modal ref='thumbnailBox' hide-footer size="lg" v-model="modalShow" :title='"CATEGORY: " + image.category'>
        <b-img v-bind:src="image.srcLarge" fluid alt="Responsive image" />
        <p class="tags">tags: {{image.tags}}</p>
        <b-row>
            <b-col cols="6" >
                <b-btn class="mt-1" variant="outline-info" block @click="previousModal(image.id)">Previous</b-btn>
            </b-col>
            <b-col cols="6">
                <b-btn class="mt-1" variant="outline-info" block @click="nextModal(image.id)">Next</b-btn>
            </b-col>
            <b-col offset-lg="10" lg="2" offset-md="9" md="3" offset-sm="9" sm="3" cols="4" offset="8">
                <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-btn>
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
            this.$refs.thumbnailBox.show();
        },
        hideModal() {
            this.$refs.thumbnailBox.hide();
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
}
.thumbnail:hover {
    transform: scale(1.1);
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
</style>
