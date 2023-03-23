<template>
  <!-- <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imgArtPiece" alt="This is a Preview-Img">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <h3>{{ title }}</h3>
        <time :datetime="dateStart">{{ dateStart }}</time>
        <div class="line"></div>
        <time :datetime="dateEnd">{{ dateEnd }}</time>
      </div>
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="imgAuthor" :alt="authorName">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ authorName }}</p>
        </div>
      </div>
    </div>
  </div> -->


  <div class="PostPreviewCard">
     <div class="imgArtPieceDiv">
        <img  :src="imgArtPiece" alt="This is a Preview-Img">
      </div>
      <div class="infoLocationDiv">
        <h3>{{title}}</h3>
        <p>{{dateStart}}</p>
        <div class="line"></div>
        <p>{{dateEnd}}</p>
        <div class="authorDiv">
            <img class="imgAuthor" :src="imgAuthor" :alt="authorName">
            <p>{{authorName}}</p>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  components: {

  },
  props: {
    imgLocation: "#",
    title: "Titel",
    dateStart: "from",
    dateEnd: "to",
    imgArtPiece: "#",
    imgAuthor: "#",
    authorName: "John Doe"
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
h3 {
  font-size: small;
  font-weight: bold;
  margin: 5px auto 5px;
}

p {
  font-size: 9pt;
  margin: 2px;
}

.line {
  border-bottom: solid 1px lightgrey;
  width: 50%;
  margin: 0 auto;
}

.PostPreviewCard {
  width: 180px;
  /* min-width: 150px;
    max-width: 200px; */
  height: 260px;
  border-radius: 5px;
  border: solid lightgrey 1px;
  box-shadow: rgb(224, 224, 224) 5px 5px 5px;
  margin: 5px 5px;
  overflow: hidden;
}

.imgAuthor {
  width: 40px;
  border-radius: 10px;
}

.imgArtPieceDiv {
  overflow: hidden;
  height: 100px;
  margin-bottom: 10px;
}

.imgArtPieceDiv img {
  width: 100%;
}

.infoLocationDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}

.authorDiv {
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  padding: 4px 2px;  
}</style>
  