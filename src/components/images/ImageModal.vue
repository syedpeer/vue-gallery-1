<template>
<div>
    <div @click="modalShow = !modalShow" v-bind:style="{ backgroundImage: 'url(' + image + ')' }" class="thumbnail">
    </div>
    <b-modal v-model="modalShow">
        Hello From Modal!
    </b-modal>
</div>
</template>

<script>
export default {
    name: 'ImageModal',
    props: ['image'],
    data() {
        return {
            modalShow: false
        }
    }
}
</script>

<style lang="scss">
    .thumbnail {
        width: 100%;
        height: 200px;
        background-position: center;
    }
</style>
