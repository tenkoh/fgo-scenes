<template>
  <img
    class="VuetifyLogo"
    alt="Vuetify Logo"
    :src="logo"
  >
</template>

<script>
export default {
  data(){
    return{
      logo: this.$basePath() + 'vuetify-logo.svg'
    }
  }
}
</script>

<style>
.VuetifyLogo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
