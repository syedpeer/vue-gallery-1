<template>
<transition name="fade">
    <slot>

    </slot>
</transition>
</template>

<script>
export default {
    name: "FadeTransition"
}
</script>

<style lang="scss">
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
