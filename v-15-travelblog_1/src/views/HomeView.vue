<template>
   <div class="mainWrapper">
  <div class="homeWrapper">
    <PreviewsContainer class="PreviewsContainer"/>    
    <HomeMap class="HomeMap"/>
  </div>  
</div>
</template>

<script>
import PreviewsContainer from '../components/PreviewsContainer.vue';
import HomeMap from '../components/HomeMap.vue';
export default {
  components: {
    PreviewsContainer, HomeMap

  },
  data() {
    return {

    }
  },
  methods: {

  }
}; 
</script>

<style scoped>
.PreviewsContainer {
  max-width: 45%;
}

.HomeMap {
  width: 45%;
}

.homeWrapper {
  display: flex;
}

@media (width < 600px) {
  .homeWrapper {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

  }
  .PreviewsContainer, .HomeMap {
    width: 95%;
    max-width: none;
  }
}
</style>
