<template>
<div>
    <album-list-item />
</div>
</template>

<script>
import AsyncLoading from './async/AsyncLoading.vue'
import AsyncLoadError from './async/AsyncLoadError.vue'
const AlbumListItem = import('./AlbumListItem.vue')

export default {
    name: 'AlbumList',
    components: {
        AlbumListItem: () => ({
            component: AlbumListItem,
            loading: AsyncLoading,
            error: AsyncLoadError,
            delay: 100,
            timeout: 3000
        })
    },
}
</script>

<style scoped lang="scss">

</style>
