<template>
    <nav id="burgerMenu" :style="burgerMenuVisible">
          <button class="burgerMenuButton" @click="disappearBurgerMenuButtons">
            <RouterLink class="navLink" to="/">
              <i class="fa fa-home" aria-hidden="true"></i> Home
            </RouterLink>
          </button>
          <button class="burgerMenuButton" @click="disappearBurgerMenuButtons">
            <RouterLink class="navLink" to="/contact">Contact</RouterLink>
          </button>
          <button class="burgerMenuButton" @click="disappearBurgerMenuButtons">
            <RouterLink class="navLink" to="/add"><i class="fas fa-share"></i>Add New Post</RouterLink>
          </button>
          <button class="burgerMenuButton" @click="disappearBurgerMenuButtons">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            Login
          </button>
        </nav>
      
      <button class="burgerButton" @click="showBurgerMenu"><i class="fas fa-bars fa-2x burgerSign"></i></button>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      burgerMenuVisible: "display:none"
    }
  },
  methods: {
    showBurgerMenu() {
      if (this.burgerMenuVisible = "display:none") { this.burgerMenuVisible = "display:flex" }
      else (this.burgerMenuVisible = "display:none")
    },
    disappearBurgerMenuButtons() {
      this.burgerMenuVisible = "display:none"
    }

  }
};
</script>

<style scoped>
.burgerButton {
  display: none;
  margin-right: 10px;
  border: none;
  box-shadow: none;
  background: transparent;
}

.burgerSign {
  color: white;

}

#burgerMenu {
  display: none;
  width: 150px;
  flex-direction: column;
  justify-content: right;
  position: absolute;
  z-index: 3;
  top: 30px;
  right: 3px;

  border-bottom: solid 1px rgb(122, 122, 237);
  background-image: linear-gradient(rgb(52, 184, 228), rgb(172, 219, 235));
}

.burgerMenuButton {
  background-color: transparent;
  color: white;
  margin: 0;
  padding: 3px 15px;
  text-decoration: none;
  display: block;
}
.navLink {
  margin: 0;
  text-decoration: none;
  color: white;
  display: block;
}

@media(width < 600px) {
    .burgerButton {
    display: block;
  }
}

</style>