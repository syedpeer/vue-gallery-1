<template>
<div class="homeContainer">
    <b-container class="authorContainer">
        <b-row class="authorCard">
            <b-col offset="1" cols="10">
                <h1>About</h1>
                <p>
                    PIX is a Vue.js 2.0 album app. It's UI was created with 'Bootstrap+Vue' CSS library. App's using Pixabay image API to fetch pics from different categories - if images won't show, check whether Pixabay website is online. Check out my GitHub profile below:
                </p>
            </b-col>
            <b-col offset-lg="8" lg="2" offset-md="8" md="2" sm="6" cols="6" class="gh linkInfo">
                <p>GH profile: </p>
            </b-col>
            <b-col lg="2" md="2" sm="6" cols="6" class="pb linkInfo">
                <p> Image API:</p>
            </b-col>
            <b-col offset-lg="8" lg="2" offset-md="8" md="2" offset-sm="0" sm="6" offset="0" cols="6" class="pixabay gh"><a href="https://github.com/andriejka">
    <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Pixabay">
</a></b-col>
            <b-col lg="2" md="2" sm="6" cols="6" class="pb pixabay"><a href="https://pixabay.com/">
    <img src="https://pixabay.com/static/img/logo_square.png" alt="Github">
</a></b-col>

        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
$white: #dcdcdd;
$yellow: #feb914;
$gray: #46494c;

.homeContainer {
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  height: 100vh;
  position: relative;
  padding-top: 56px; //menu size
}

.authorContainer {
  max-width: 900px;
  position: relative;
  z-index: 1;
}

.authorCard {
  text-align: center;
  background-color: #231f20;
  color: $white;
  height: 100%;
  margin: 100px 0;
  -webkit-box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 2px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;

  .pixabay {
    margin-bottom: 50px;

    img {
      width: 100%;
      width: 75px;
      height: 75px;
      border-radius: 20%;
    }
  }

  .linkInfo {
    p {
      font-size: 14px;
    }
  }

  .gh {
    text-align: right;
  }

  .pb {
    text-align: left;
    img {
      border: 2px $white solid;
    }
  }

  h1 {
    margin: 50px 0;
    font-weight: 900;
    font-size: 42px;
    text-transform: uppercase;
  }

  p {
    margin: 10px 0;
    font-weight: 300;
    font-size: 20px;
  }
}
</style>
