<template>
  <div class="mainWrapper">
    <BackDashboardButton />
    <PostDetails id="PostDetails" :postId="Details.postId" :imgLocation="Details.imgLocation" :title="Details.title"
      :cityName="Details.cityName" :cityCountry="Details.cityCountry" :dateStart="Details.dateStart"
      :dateEnd="Details.dateEnd" :pieceOfArt="Details.pieceOfArt" :imgArtPiece="Details.imgArtPiece"
      :journeyDescription="Details.journeyDescription" :imgAuthor="Details.imgAuthor" :authorName="Details.authorName" />
  </div>
</template>
  
<script>
import BackDashboardButton from '../components/BackDashboardButton.vue';
import PostDetails from '../components/PostDetails.vue';
import { usePostIdStore } from '../stores/renderDetailsPost';
const idToStore = usePostIdStore();
export default {
  components: {
    BackDashboardButton,
    PostDetails
  },
  data() {
    return {
      postId: idToStore.postId,
      Details: {},
      blogPosts: []
    }
  },
  methods: {
  },
  mounted() {
    fetch('../locations.json')
      .then((response) => {
        return response.json();
      })
      .then((data => {
        this.blogPosts = data;
        this.blogPosts.forEach((post) => {
          if (post.id === this.postId) {
            this.Details = post;
            console.log(post)
          }
        });
      }));
  }
}
</script>
  
<style scoped></style>
  