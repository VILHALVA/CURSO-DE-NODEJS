if (process.env.NODE_ENV == "production") {
    module.exports = {mongoURI: "URL"}; // COLOQUE SUA URL
}
else {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"};
}