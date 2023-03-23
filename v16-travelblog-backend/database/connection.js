const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "root",
    database: "Whereyoumetart"
});
function query(sql, params) {
    return new Promise(function(resolve, reject) {
        connection.query(sql, params, function(err, results) {
            if (err) {
                reject(err);
                return;
            }
            resolve(results);
        });
    });
}

async function getBlogPosts() {
    const sql = `SELECT * FROM recipes`;
    const results = await query(sql);
    return results;
}

async function addBlogPost(newPostBody) {
    const sql = `INSERT INTO ArtBlogPost VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
        newPostBody.imgLocation,
        newPostBody.cityName,
        newPostBody.cityCountry,
        newPostBody.lat,
        newPostBody.lon,
        newPostBody.title,
        newPostBody.pieceOfArt,
        newPostBody.imgArtPiece,
        newPostBody.dateStart,
        newPostBody.dateEnd,
        newPostBody.imgAuthor,
        newPostBody.authorName,
        newPostBody.journeyDescripstion
    ];
    const results = await query(sql, params);
    return results;
}

module.exports = {
    getBlogPosts,
    addBlogPost
}
