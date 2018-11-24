<template>
<div class="thumbnail-box">
    <div @click="showModal" v-bind:style="{ backgroundImage: 'url(' + image.src + ')' }" class="thumbnail">
    </div>
    <b-modal ref='thumbnailBox' hide-footer size="lg" v-model="modalShow" :title="image.category">
        <b-img v-bind:src="image.srcLarge" fluid alt="Responsive image" />
        <p class="my-4">{{image.tags}}</p>
        <b-row>
            <b-col cols="4">
                <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
                <b-btn class="mt-3" variant="outline-info" block @click="nextModal(image.id)">Next</b-btn>
                <b-btn class="mt-3" variant="outline-info" block @click="previousModal(image.id)">Previous</b-btn>
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
            if(previous) {
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
}

.thumbnail-box {
    padding: 15px 0;
}
</style>
