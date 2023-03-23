<template>
    <div class="previewContainer">
      <RouterLink v-for="post in blogPosts" to="/post">
        <PostPreview :imgArtPiece="post.imgArtPiece" :title="post.title" :dateStart="post.dateStart" :dateEnd="post.dateEnd"
          :imgAuthor="post.imgAuthor" :authorName="post.authorName" @click="passIdToDetailPage(post.id)"/>
      </RouterLink>
    </div>
</template>
  
<script>
import PostPreview from './PostPreview.vue';
import { usePostIdStore } from '../stores/renderDetailsPost';
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      blogPosts: []
    }
  },
 methods: { 
    passIdToDetailPage(id){ 
      const idToStore = usePostIdStore();
      idToStore.postId = id ;
      //alert("clicked post:" + id);
      console.log(idToStore.postId);      
      console.log(id)
    }
  },
  mounted() {
    fetch('../locations.json')
      .then((response) => {
        return response.json();
      })
      .then((data => {
        this.blogPosts = data;
        // console.log(data);
        // console.log(this.blogPosts);
      }));
    }
}
</script>
  
<style scoped>
.previewContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow: scroll;
}
a{
  text-decoration: none;
  color: black;
}
@media(max-width < 600px) {
    .previewContainer {
        /* flex-direction: column; */
        overflow: auto;
    }    
}
</style>