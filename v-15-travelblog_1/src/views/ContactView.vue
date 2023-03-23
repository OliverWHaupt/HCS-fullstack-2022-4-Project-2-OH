<template>
  <div class="mainWrapper">
    <BackDashboardButton />
    <div class="aboutDiv">      
        <div class="contactDiv">
          <h3>Editor</h3>
          <p>Oliver Haupt</p>
        </div>
        <div class="contactDiv">
          <h3>About This Project</h3>
          <p>Travel blogs are a great opportunity to show what component based web design can do. A growing number of
            experiences is updated, visualized and put into a greater context to reveal their deeper meaning.</p>
          <p>This travel blog 'WhereYouMetArt' not only lists locations but it collects the traveler's encounter with a
            work
            of art that they made an impacting experience with during their journey. </p>
        </div>
        <div class="contactDiv">
          <h3>Hamburg Coding School</h3>
          <p>This project was formed in the 'Fullstack Webdevelopment Course 2022-4' of Hamburg Coding School.</p>
        </div>
        <div class="contactDiv">
          <h3>Contact</h3>
          <p>HCS Hamburg Coding School GmbH</p>
          <p>Tel +49 40 22863615</p>
          <p>Email [someone]@hamburgcodingschool.com</p>
        </div>      
    </div>
  </div>

</template>

<script>
import BackDashboardButton from '../components/BackDashboardButton.vue';
export default {
  components: {
    BackDashboardButton

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
.aboutDiv {
  width: 75%;
  margin: 4px auto;
}

.contactDiv {
  width: 90%;
  padding: 10px;
  margin: 5px auto;
  background-color: rgb(232, 249, 255);
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: lightgrey 5px 5px 5px;
  margin: 5px auto;
  padding: 5px;
  font-size: smaller;
}

h3 {
  font-weight: bold;
}
</style>
