<template>
  <MenuBar />  
 
  <RouterView />
  
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';
import MenuBar from './components/MenuBar.vue';
export default {
  components: {
    MenuBar
  }
}
</script>

<style scoped>


@media(width < 600px) {
  .mainWrapper {
        flex-direction: column;
        justify-content: flex-start;
    }
    
}
</style>
