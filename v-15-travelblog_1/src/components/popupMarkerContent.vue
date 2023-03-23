<template>
    <div class="infoLocationDiv">
        <p>{{ title }}</p>
        <p>{{ dateStart }} - {{ dateEnd }}</p>
        <div class="authorDiv">
            <img class="imgAuthor" :src="imgAuthor" :alt="authorName">
            <p>{{ authorName }}</p>
        </div>
    </div>
</template>
<script>
export default {
    components: {

    },
    props: {
        title: "Titel",
        dateStart: "from",
        dateEnd: "to",
        imgAuthor: "#",
        authorName: "John Doe"
    }

}
</script>

<style scoped>
.imgAuthor {
    width: 30px;
    height: 30px;
    border-radius: 10%;
}
p {
  margin: 2px auto;
}
.infoLocationDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2px;
}
.authorDiv {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2px;
    margin: 2px;
}
</style>
  



