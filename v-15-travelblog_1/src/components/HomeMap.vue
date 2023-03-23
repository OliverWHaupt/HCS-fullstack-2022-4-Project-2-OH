<template>
  <div class="mapContainer">
    <div class="innerMapContainer">
      <MapboxMap style="height: 400px"
        access-token="pk.eyJ1Ijoib2hhdXB0IiwiYSI6ImNsY21rcml4dzB0eDIzbm5yMDY1dW8wdWMifQ.PeYQo-jSOZHqJ0ZaB8AYOw"
        map-style="mapbox://styles/mapbox/streets-v11" :center="[newestLon, newestLat]" :zoom="0">
        <MapboxMarker v-for="post in blogPosts" :lng-lat="[post.lon, post.lat]" popup>
          <template v-slot:popup>
            <RouterLink to="/post" @click="passIdToDetailPage(post.id)">
              <popupMarkerContent :title="post.title" :dateStart="post.dateStart" :dateEnd="post.dateEnd"
                :imgAuthor="post.imgAuthor" :authorName="post.authorName" />
            </RouterLink>
          </template>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </div>
</template>

<script>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl';
import { usePostIdStore } from '../stores/renderDetailsPost';
import popupMarkerContent from "./popupMarkerContent.vue"
export default {
  components: {
    MapboxMap, MapboxMarker, popupMarkerContent
  },
  data() {
    return {
      blogPosts: [],
      newestLon: 0,
      newestLat: 0
    }
  },
  methods: {
    passIdToDetailPage(id) {
      const idToStore = usePostIdStore();
      idToStore.postId = id
    }
  },
  mounted() {
    fetch('../locations.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.blogPosts = data;
        this.newestLon = this.blogPosts[this.blogPosts.length - 1].lon;
        this.newestLat = this.blogPosts[this.blogPosts.length - 1].lat;
      })
  }
}
</script>
  
<style scoped>
a {
  text-decoration: none;
  color: brown;
}

.mapContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  border-radius: 5px;
  border: solid lightgrey 1px;
  box-shadow: lightgrey 5px 5px 5px;
  overflow: hidden;
  margin: 0 5%;
}
.innerMapContainer{
  width: 500px;
}

@media(width < 600px) {
  .mapContainer {
    width: 100%;
    height: 150px;
    margin: 0;
  }
}
</style>
  