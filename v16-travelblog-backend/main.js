const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

const connection = require("./database/connection");

app.use(express.json());
app.use(cors());

app.get("/", async function (req, res) {
    const results = await connection.getBlogPosts();
    res.json(results);
});

app.post("/", async function (req, res) {
    const result = await connection.addBlogPost(req.body);
    res.json(result);
});



app.listen(port, () => {
    console.log("listening on port " + port)
}
    );