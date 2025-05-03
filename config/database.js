const mongoose = require("mongoose");
require('dotenv').config();

exports.connect = () => {
    mongoose.connect("mongodb://localhost:27017/authapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected successfully");
    })
    .catch((err) => {
        console.log("DB connection issue");
        console.error(err);
        process.exit(1);
    });
};
