<template>
  <div id="app">
    <button class="btn btn-primary m-5" @click="display=!display">toggle</button>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <transition enter-active-class="animated bounceIn">
        <div v-if="display" class="alert alert-danger w-50">C'est un alerte !</div>
      </transition>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
 
  data(){
    return {
      display : false,
    }
  },
}
</script>

<style scoped>
  .v-enter {
    opacity: 0;
    transform: translateX(-20px);
    filter: grayscale(1);
  }

  .v-enter-to {

  }

  .v-enter-active {
    transition : all 0.5s ease-in-out;
  }

  .v-leave {
    
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-20px);
    filter: grayscale(1);
  }
  .v-leave-active {
    transition : all 0.5s ease-in-out;
  }


</style>
