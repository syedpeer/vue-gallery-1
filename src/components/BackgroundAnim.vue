<template>
<div>
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <div class="circle circle5"></div>
    <div class="circle circle6"></div>
    <div class="circle circle7"></div>
    <div class="circle circle8"></div>
</div>
</template>

<script>
export default {
    name: 'BackgroundAnim',
}
</script>

<style scoped lang="scss">
$white: #dcdcdd;
$yellow: #FEB914;
$gray: #46494c;

.circle {
    position: absolute;
    border-radius: 100%;
    z-index: 0;
}

.circle1 {
    height: 500px;
    width: 500px;
    left: -250px;
    bottom: -250px;
    animation: circle-ani1 10s infinite;
    animation-timing-function: linear;
    opacity: 0.5;
    background-color: $gray;
}

.circle2 {
    height: 120px;
    width: 120px;
    bottom: 200px;
    left: -70px;
    animation: circle-ani2 10s infinite;
    animation-timing-function: linear;
    opacity: 0.4;
    background-color: $gray;
}

.circle3 {
    height: 30px;
    width: 30px;
    top: 180px;
    left: 80px;
    animation: circle-ani3 10s infinite;
    animation-timing-function: linear;
    opacity: 0.8;
    background-color: $yellow;
}

.circle4 {
    height: 220px;
    width: 220px;
    left: 100px;
    bottom: -100px;
    animation: circle-ani3 10s infinite;
    animation-timing-function: linear;
    opacity: 0.6;
    background-color: transparent;
    border: solid $gray 2px;
}

.circle5 {
    height: 50px;
    width: 50px;
    left: 300px;
    bottom: 30px;
    animation: circle-ani2 10s infinite;
    animation-timing-function: linear;
    opacity: 0.8;
    background-color: $yellow;
}

.circle6 {
    height: 300px;
    width: 300px;
    top: -150px;
    right: -80px;
    animation: circle-ani3 10s infinite;
    animation-timing-function: linear;
    opacity: 0.6;
    border: solid $gray 2px;
}

.circle7 {
    height: 165px;
    width: 165px;
    right: -100px;
    top: 71px;
    animation: circle-ani1 10s infinite;
    animation-timing-function: linear;
    opacity: 0.4;
    background-color: $gray;
}

.circle8 {
    height: 20px;
    width: 20px;
    top: 180px;
    right: 80px;
    animation: circle-ani2 10s infinite;
    animation-timing-function: linear;
    opacity: 0.8;
    background-color: $yellow;
}

@keyframes circle-ani1 {
    0% {
        transform: translateX(0px) translateY(0px);
    }

    20% {
        transform: translateX(20px) translateY(-10px);
    }

    40% {
        transform: translateX(-10px) translateY(-30px);
    }

    60% {
        transform: translateX(-20px) translateY(-10px);
    }

    80% {
        transform: translateX(10px) translateY(10px);
    }

    100% {
        transform: translateX(0px) translateY(0px);
    }
}

@keyframes circle-ani2 {
    0% {
        transform: translateX(20px) translateY(0px);
    }

    20% {
        transform: translateX(-10px) translateY(20px);
    }

    40% {
        transform: translateX(0px) translateY(-10px);
    }

    60% {
        transform: translateX(20px) translateY(0px);
    }

    80% {
        transform: translateX(-10px) translateY(20px);
    }

    100% {
        transform: translateX(20px) translateY(0px);
    }
}

@keyframes circle-ani3 {
    0% {
        transform: translateX(-30px) translateY(10px);
    }

    20% {
        transform: translateX(-10px) translateY(0px);
    }

    40% {
        transform: translateX(0px) translateY(-20px);
    }

    60% {
        transform: translateX(20px) translateY(10px);
    }

    80% {
        transform: translateX(15px) translateY(-20px);
    }

    100% {
        transform: translateX(-30px) translateY(10px);
    }
}

</style>
