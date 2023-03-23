<template>
    <div id="wrapper" :style.="{'background-image':'url(' + imgLocation + ')'}"></div>
    <div class="postWrapper">
        <div class="imgArtPieceDiv">
            <img class="imgArtPiece" :src="imgArtPiece" :alt="ArtPiece">
            <!-- <img :src="imgLocation" alt="Location"> -->
        </div>
        <div class="infoJourneyDiv">
            {{ postId }}
            <h3>{{ title }}</h3>
            <p>{{ dateStart }} - {{ dateEnd }}</p>            
            <p>{{ cityName }}, {{ cityCountry }}</p>
            <div>{{ pieceOfArt }}
                <!-- <img class="imgArtPiece" :src="imgArtPiece" :alt="ArtPiece"> -->
            </div>
            <div class="journeyDescription"><p>{{ journeyDescription }}</p></div>
            <div class="authorDiv">
                <img class="imgAuthor" :src="imgAuthor" :alt="authorName">
                <p>{{ authorName }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    components: {
    },
    props: {
        postId: 0,
        imgLocation: "#",
        title: "Titel",
        cityName: "",
        cityCountry: "",
        dateStart: "from",
        dateEnd: "to",
        pieceOfArt: "",
        imgArtPiece: "#",
        journeyDescription: "",
        imgAuthor: "#",
        authorName: "John Doe"
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        
    }
};
</script>
  
<style scoped>
.postWrapper {
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1200px;
    width: 85%;
    border-radius: 5px;
    /* border: solid lightgrey 1px; */
    box-shadow: lightgrey 5px 5px 5px;
    margin: 5px auto;
    padding: 10px 3px 0 3px;
    overflow: hidden;
}
#wrapper {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1200px;
    width: 85%;
    border-radius: 5px;
    /* border: solid lightgrey 1px;
    box-shadow: lightgrey 5px 5px 5px; */
    margin: 5px auto;
    overflow: hidden;
    opacity: 0.25;
}

.imgAuthor {
    width: 45px;
    border-radius: 50%;
    margin-right: 20px;
}

.imgArtPieceDiv {
    overflow: hidden;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 5px 0 15px;
}

/* .imgLocationDiv img {
    width: 100%;
} */

.infoJourneyDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4px auto;
    background-color: antiquewhite;
    width: 80%;
    max-width: 1000px;
}
.journeyDescription {
    max-height: 200px;
    width: 95%;
    overflow: scroll;
    background-color: rgb(250, 246, 241);
    border: solid 1px rgb(197, 186, 172);
    border-radius: 5px;
    padding: 3px 1px;
    margin: 3px auto;
    font-size: smaller;
}

.authorDiv {
    display: flex;
    /* width: 80%;
    max-width: 600px; */
    justify-content: space-between;
    padding: 2px;
    margin: 0 10px 4px 0;
}
.imgArtPiece {
    max-height: 200px;
}
h3 {
    font-weight: bold;
}
</style>
  