const mongoose = require("mongoose");
require('dotenv').config();

exports.connect = () => {
    mongoose.connect("mongodb+srv://sakshi32:n7eDc1UONRC1clwL@cluster0.aqnor.mongodb.net/Authdata", {
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
