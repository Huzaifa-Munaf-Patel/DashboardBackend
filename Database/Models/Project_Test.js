const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    projectName:String,
    keyName:String,
    message:String
});

const test = mongoose.model("Project_Test", Schema);

module.exports = test;