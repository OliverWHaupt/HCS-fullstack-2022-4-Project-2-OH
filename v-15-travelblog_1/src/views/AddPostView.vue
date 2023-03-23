<template>
    <div class="mainWrapper">
        <BackDashboardButton />
        <div class="allInputs">
            <input class="input is-normal" type="text" placeholder="* Title of your Post" v-model="newPost.title">
            <input class="input is-normal" type="text" placeholder="* What piece of art did you encounter?"
                v-model="newPost.pieceOfArt">
            <input class="input is-normal" type="text" placeholder="* URL image piece of Art" v-model="newPost.imgArtPiece">
            <div class="dateInput">
                <input class="input is-normal" type="date" placeholder="* Journey Start Date" v-model="newPost.dateStart">
                <input class="input is-normal" type="date" placeholder="* Journey End Date" v-model="newPost.dateEnd">
            </div>
            <div class="locationInput">
                <div class="locationInput">
                    <input class="input is-normal" type="text" placeholder="* City" v-model="newPost.cityName">
                    <input class="input is-normal" type="text" placeholder="* Country" v-model="newPost.cityCountry">
                </div>
                <input class="input is-normal" type="text" placeholder="URL City Image" v-model="newPost.imgLocation">
            </div>
            <div class="authorInput">
                <input class="input is-normal" type="text" placeholder="URL Author Image" v-model="newPost.imgAuthor">
                <input class="input is-normal" type="text" placeholder="* Author Name" v-model="newPost.authorName">
            </div>
            <div class="journesDescription">
                <textarea class="textarea" placeholder="* How I met ... " v-model="newPost.journeyDescription"></textarea>
            </div>
            <button class="submitButton" @click="submitNewPost">Submit</button>
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
            newPost: {
                imgLocation: "",
                cityName: "",
                cityCountry: "",
                lat: "",
                lon: "",
                title: "",
                pieceOfArt: "",
                imgArtPiece: "",
                dateStart: "",
                dateEnd: "",
                imgAuthor: "",
                authorName: "",
                journeyDescription: ""

            }
        }
    },
    methods: {
        async submitNewPost() {
            if (this.newPost.cityName != "" &&
                this.newPost.cityCountry != "" &&
                this.newPost.title != "" &&
                this.newPost.pieceOfArt != "" &&
                this.newPost.imgArtPiece != "" &&
                this.newPost.dateStart != "" &&
                this.newPost.dateEnd != "" &&
                this.newPost.authorName != "" &&
                this.newPost.journeyDescription != ""
            ) {
                alert("Entry complete, will be submitted");
                // weatherAPI-function -> get lat/lon
                fetch(`https://api.weatherbit.io/v2.0/current?city=${this.newPost.cityName}&country=${this.newPost.cityCountry}&key=0792ddda68674451b32d152b17315169&include=minutely`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((d) => {                        
                        this.newPost.lat = d.data[0].lat;
                        this.newPost.lon = d.data[0].lon;                       
                    });
                if (this.newPost.imgLocation === "") { this.newPost.imgLocation = this.newPost.imgArtPiece };
                if (this.newPost.imgAuthor === "") { this.newPost.imgAuthor = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" };
                console.log(this.newPost);

                // fetch...usw POST zu Datenbank //  ... Code adapted from Example "recipe share" 
                const newPostBodyString = JSON.stringify(this.newPost);
                const fetchOptions = {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    body: newPostBodyString
                };
                const response = await fetch("http://localhost:3000", fetchOptions);
                const result = await response.json();
                console.log(result);             
            }
            else {
                alert("Sorry, required Data is missing - Please complete your entry")
            }
        }
    }
}; 
</script>

<style scoped>
.allInputs {
    max-width: 900px;
    width: 85%;
    border-radius: 5px;
    /* border: solid lightgrey 1px; */
    box-shadow: lightgrey 5px 5px 5px;
    background-image: linear-gradient(rgb(52, 184, 228), white);
    margin: 5px auto;
    padding: 10px 2% 0 2%;
    overflow: hidden;
}

.allInputs input {
    margin: 4px 2px;
}

.dateInput,
.locationInput,
.authorInput {
    display: flex;
    justify-content: space-between;
}

@media (width < 600px) {
    .allInputs {
        width: 100%
    }

    input {
        font-size: smaller;
    }
}
</style>