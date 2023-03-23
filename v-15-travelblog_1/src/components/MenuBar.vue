<template>
  <div class="outerMenuBar">
    <div class="innerMenuBar">
      <div class="anotherContainerForLogoAndTitle">
        <i class="fa-solid fa-mountain-sun fa-5x navBarLogo"></i>
        <p class="siteTitle">whereYouMetArt</p>
      </div>

      <div>
        <nav class="navBar">
          <button class="newPostButton">
            <RouterLink class="navLink" to="/contact">Contact</RouterLink>
          </button>
          <button class="newPostButton">            
            <RouterLink class="navLink" to="/add"><i class="fas fa-share"></i>Add New Post</RouterLink>
          </button>
          <button class="loginButton">
            <i class="fa fa-sign-in" aria-hidden="true"></i>
            Login
          </button>
        </nav>
      </div>
        <BurgerMenu />
    </div>
  </div>
</template>
  
<script>
import BurgerMenu from "./BurgerMenu.vue";
export default {
  components: {
    BurgerMenu
  },
  props: {
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
.siteTitle {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: xx-large;
}
.innerMenuBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: auto;
}
.outerMenuBar {
  border-bottom: solid 0.5px lightgrey;
  background-image: linear-gradient(rgb(52, 184, 228), white);
  padding: 8px;
}
.navBar {
  margin-right: 50px;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navBarLogo {
  width: 100px;
  border: solid 8px turquoise;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 15px 0 0;
}
.anotherContainerForLogoAndTitle {
  display: flex;
  align-items: center;
}
.navLink {
  margin: 0;
  text-decoration: none;
  color: white;
  display: block;
}
.newPostButton,
.loginButton {
  background-color: transparent;
  color: white;
  margin: 0;
  padding: 3px 15px;
  text-decoration: none;
  display: block;
  border: none;
  border-radius: 5px;
}
.newPostButton {
  width: 131px;
}
.loginButton {
  width: 80px;
}
.newPostButton:hover,
.loginButton:hover {
  background-color: rgb(141, 200, 219);
}

@media(width < 600px) {
  .previewContainer {
    flex-direction: column;
    overflow: auto;
  }
  .siteTitle {
    font-size: large;
  }
  .navBarLogo {
    width: 35px;
    font-size: x-large;
    border: solid 3px turquoise;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 10px 0 0;
  }
  .navBar {
    display: none;
  }
}
</style>
  