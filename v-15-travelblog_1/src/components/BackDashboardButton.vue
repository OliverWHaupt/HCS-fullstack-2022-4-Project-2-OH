<template>
  <div>
    <RouterLink class="navLink" to="/">
      <button class="backToDashboard">
        <i class="fa fa-home" aria-hidden="true"></i>
        <!-- <i class="fa-solid fa-arrow-left"></i> -->
      </button>
    </RouterLink>
  </div>
</template>

<script>
export default {
  components: {

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
.backToDashboard {
  margin: 3px 0;
  width: 30px;
  background-color: white;
  color: lightskyblue;
  border-radius: 5px;
}

.navLink {
  background-color: white;
  color: lightskyblue;
}

@media (width < 600px) {
  .backToDashboard {
    position: relative;
    top: -43px;
    right: -190px;
    background-color: transparent;
    color: white;
    border: none;
  }

}
</style>